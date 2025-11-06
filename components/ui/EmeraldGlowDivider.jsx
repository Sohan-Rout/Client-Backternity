'use client';
import React from 'react';

export default function EmeraldGlowDivider({
  height = 1.5,
  color = '#10b981',
  glowIntensity = 0.3,
  pulseSpeed = 4,
}) {
  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: `${height}px`,
          background: `linear-gradient(
            to right,
            transparent,
            ${color},
            transparent
          )`,
          boxShadow: `0 0 8px ${color}${Math.floor(glowIntensity * 255)
            .toString(16)
            .padStart(2, '0')}`,
          opacity: 0.9,
          borderRadius: '9999px',
          animation: `pulseGlow ${pulseSpeed}s ease-in-out infinite`,
        }}
      />
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            filter: brightness(0.8);
            opacity: 0.7;
          }
          50% {
            filter: brightness(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
