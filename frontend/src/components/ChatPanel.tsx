import React from 'react';
import { AssistantChat } from './AssistantChat';
import { useGeminiKey } from '../lib/assistant';

export const ChatPanel: React.FC = () => {
  const hasKey = !!useGeminiKey();
  return (
    <div className="chat-panel">
      <div className="chat-header">
        <h2>AI Assistant</h2>
        <div className="chat-status">{hasKey ? 'Ready to help!' : 'Gemini key required'}</div>
      </div>
      <AssistantChat />
    </div>
  );
};
