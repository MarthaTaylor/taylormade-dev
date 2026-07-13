'use client';

import * as React from 'react';

// Renders the word "Google" with each letter in its official brand colour.
// G:#4285F4 · o:#EA4335 · o:#FBBC05 · g:#4285F4 · l:#34A853 · e:#EA4335
const LETTER_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335'];

export function GoogleWord({ className = '' }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`} aria-label="Google">
      {'Google'.split('').map((ch, i) => (
        <span key={i} style={{ color: LETTER_COLORS[i] }} aria-hidden>
          {ch}
        </span>
      ))}
    </span>
  );
}
