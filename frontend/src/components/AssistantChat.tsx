import React, { useEffect, useRef, useState } from 'react';
import { Send, Key } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { askAssistant, AssistantError, clearGeminiKey, REPO_URL, setGeminiKey, useGeminiKey } from '../lib/assistant';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

const WELCOME =
  "Hello! I'm your Artemis+ mission assistant. I can help you with space exploration strategies, mission planning, and navigation techniques. What would you like to know?";

function newMessage(text: string, sender: Message['sender']): Message {
  return { id: `${Date.now()}-${Math.random()}`, text, sender, timestamp: new Date().toISOString() };
}

// Key panel + conversation, shared by the side panel and the home-page overlay.
export const AssistantChat: React.FC = () => {
  const geminiKey = useGeminiKey();
  const [keyInput, setKeyInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => [newMessage(WELCOME, 'assistant')]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [keyError, setKeyError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSetKey = () => {
    if (!keyInput.trim()) return;
    setGeminiKey(keyInput);
    setKeyInput('');
    setKeyError('');
  };

  const handleSendMessage = async () => {
    const text = inputMessage.trim();
    if (!text || !geminiKey || isLoading) return;

    setMessages((prev) => [...prev, newMessage(text, 'user')]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const reply = await askAssistant(text);
      setMessages((prev) => [...prev, { ...newMessage(reply.message, 'assistant'), timestamp: reply.timestamp }]);
    } catch (error) {
      const msg = error instanceof AssistantError ? error.message : 'Sorry, I encountered an error. Please try again.';
      setMessages((prev) => [...prev, newMessage(`**Error:** ${msg}`, 'assistant')]);
      if (error instanceof AssistantError && error.status === 401) {
        setKeyError(msg);
        clearGeminiKey();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const privacyNote = (
    <p className="byok-note">
      Your key stays in your browser and is sent only with your own requests. Nothing is saved. This project is open
      source, so you can check the code:{' '}
      <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
        github.com/zero-abd/artemis-plus-lunar-habitat-simulator
      </a>
    </p>
  );

  if (!geminiKey) {
    return (
      <div className="api-key-container">
        {keyError && <p className="byok-error">{keyError}</p>}
        <input
          type="password"
          className="api-key-input"
          placeholder="Enter your Gemini API key"
          autoComplete="off"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSetKey()}
        />
        <button className="api-key-button" onClick={handleSetKey} disabled={!keyInput.trim()}>
          <Key size={16} style={{ marginRight: '8px' }} />
          Use this key
        </button>
        <p className="byok-note">
          The assistant runs on Google Gemini with your own key. Get a free one from{' '}
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
            Google AI Studio
          </a>
          .
        </p>
        {privacyNote}
      </div>
    );
  }

  return (
    <>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.sender === 'assistant' ? <ReactMarkdown>{message.text}</ReactMarkdown> : message.text}
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <div className="input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask me about space exploration strategies..."
            value={inputMessage}
            maxLength={4000}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button className="send-button" onClick={handleSendMessage} disabled={!inputMessage.trim() || isLoading}>
            <Send size={20} />
          </button>
        </div>
        <button className="forget-key-button" onClick={clearGeminiKey} type="button">
          Forget my key
        </button>
      </div>
    </>
  );
};
