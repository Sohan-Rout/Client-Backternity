'use client';
import React from 'react';

export default function EmeraldDivider({ speed = 3, height = 2, className = '' }) {
  return (
    <>
      <hr
        className={className}
        style={{
          position: 'relative',
          height: `${height}px`,
          border: 'none',
          background:
            'linear-gradient(90deg, transparent, rgba(16,185,129,0.9), transparent)',
          backgroundSize: '200% 100%',
          animation: `moveBeam ${speed}s linear infinite`,
          opacity: 0.8,
          borderRadius: '9999px',
        }}
      />
      <style jsx>{`
        @keyframes moveBeam {
          0% {
            background-position: -200% 0;
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 200% 0;
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}
