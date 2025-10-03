import React, { useState, useEffect, useRef } from "react";
import { Send, Key } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface LandingPageProps {
  onNavigateToSimulator?: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateToSimulator,
}) => {
  const [showChat, setShowChat] = useState(false);
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
    if (showChat) {
      checkApiKeyStatus();
    }
  }, [showChat]);

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
        gameState: null
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

  return (
    <div className="landing-page">
      <div className="landing-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-accent">Artemis+</span>
            </h1>
            <p className="hero-subline">
              Interactive habitat-planning and validation environment focused on long-duration lunar missions at the south pole.
            </p>
            <p className="hero-subtitle">
              Combines in-situ resource utilization (ISRU), aeroponic vertical greenhouses, and closed-loop water systems so designers can test tradeoffs (mass, power, O₂, water, food) in minutes rather than months.
            </p>
            <div className="cta-buttons">
              <button className="cta-button" onClick={onNavigateToSimulator}>
                Web Simulation
              </button>

              <a
                className="cta-button"
                href="https://drive.google.com/file/d/1gC-KIiKuW8_-H1686DCXjRS6rKbsW6yA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Local Simulation (Preferred)
              </a>

              <a
                href="https://docs.google.com/document/d/1SzAdJUrG13BEjFGdndVeFb8ll743DiXvXLCdL5AuoD0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Data & Design Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Core System Pillars */}
        <div className="pillars-section">
          <div className="pillars-container">
            <h2 className="pillars-title">Core System Pillars</h2>
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">💧</div>
                <h3 className="pillar-title">Closed-Loop Water</h3>
                <p className="pillar-description">
                  Advanced water recycling systems achieving ≥95% water recovery rate (WRR) that capture, purify, and
                  reuse every drop of water, ensuring sustainable resource
                  management for long-term lunar habitation.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🌱</div>
                <h3 className="pillar-title">Aeroponic Vertical Greenhouse</h3>
                <p className="pillar-description">
                  Multi-level agricultural systems optimized for lunar gravity,
                  providing ~2,100 kCal/person/day food production and oxygen generation in a
                  controlled environment with 4 greenhouse rotation cycles.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🧱</div>
                <h3 className="pillar-title">ISRU & Material Recycling</h3>
                <p className="pillar-description">
                  In-Situ Resource Utilization facilities that process lunar
                  regolith and recycle plastics, metals, and glass into building materials, tools, and spare parts for habitat construction.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">📊</div>
                <h3 className="pillar-title">Measurable KPIs</h3>
                <p className="pillar-description">
                  The simulator outputs measurable KPIs (WRR, O₂ production, battery margin, kCal/person/day) and includes downloadable datasets and calculation notebooks for reproducible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Helper Button */}
      <button 
        className="ai-helper-button"
        onClick={() => setShowChat(!showChat)}
        title="How can I help you?"
      >
        💬
      </button>

      {/* Chat Panel */}
      {showChat && (
        <div className="homepage-chat-overlay">
          <div className="homepage-chat-panel">
            <div className="chat-header">
              <h2>AI Assistant</h2>
              <p className="chat-status">How can I help you with Artemis+?</p>
              <button 
                className="close-chat-button"
                onClick={() => setShowChat(false)}
              >
                ×
              </button>
            </div>
            
            {!hasApiKey ? (
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
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 Team CodeCrackers. All rights reserved.</p>
      </footer>
    </div>
  );
};
