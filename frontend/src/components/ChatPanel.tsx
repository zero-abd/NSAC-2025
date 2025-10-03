import React, { useState, useEffect, useRef } from 'react';
import { Send, Key } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

export const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    checkApiKeyStatus();
  }, []);

  const checkApiKeyStatus = async () => {
    try {
      const response = await axios.get('/api/chat/status');
      setHasApiKey(response.data.hasApiKey);
    } catch (error) {
      console.error('Error checking API key status:', error);
    }
  };

  const handleSetApiKey = async () => {
    if (!apiKey.trim()) return;

    setIsLoading(true);
    try {
      await axios.post('/api/chat/set-api-key', { apiKey });
      setHasApiKey(true);
      setApiKey('');
      
      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! I'm your Artemis+ mission assistant. I can help you with space exploration strategies, mission planning, and navigation techniques. What would you like to know?",
        sender: 'assistant',
        timestamp: new Date().toISOString()
      };
      setMessages([welcomeMessage]);
    } catch (error) {
      console.error('Error setting API key:', error);
      alert('Invalid API key. Please check your Gemini API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !hasApiKey) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/chat/message', {
        message: inputMessage,
        gameState: null // You can pass actual game state here if needed
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.data.message,
        sender: 'assistant',
        timestamp: response.data.timestamp
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'assistant',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!hasApiKey) {
    return (
      <div className="chat-panel">
        <div className="chat-header">
          <h2>AI Assistant</h2>
          <div className="chat-status">API Key Required</div>
        </div>
        
        <div className="api-key-container">
          <input
            type="password"
            className="api-key-input"
            placeholder="Enter your Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSetApiKey()}
          />
          <button
            className="api-key-button"
            onClick={handleSetApiKey}
            disabled={!apiKey.trim() || isLoading}
          >
            <Key size={16} style={{ marginRight: '8px' }} />
            {isLoading ? 'Setting...' : 'Set API Key'}
          </button>
          <p style={{ fontSize: '12px', color: '#7f8c8d', marginTop: '10px' }}>
            Get your free API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <h2>AI Assistant</h2>
        <div className="chat-status">Ready to help!</div>
      </div>
      
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.sender === 'assistant' ? (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            ) : (
              message.text
            )}
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
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            className="send-button"
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
