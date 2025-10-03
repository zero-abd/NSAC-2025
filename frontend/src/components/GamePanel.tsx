import React from 'react';

export const GamePanel: React.FC = () => {
  return (
    <div className="game-panel">
      <div className="game-container">
        <iframe
          className="game-iframe"
          src="/game"
          title="Artemis+ WebGL Game"
          allow="fullscreen; pointer-lock; gamepad; microphone; camera"
          allowFullScreen
        />
      </div>
    </div>
  );
};
