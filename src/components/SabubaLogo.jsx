import React from 'react';

export default function SabubaLogo({ className = "h-10 sm:h-11", variant = "light" }) {
  return (
    <div className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}>
      <img
        src="/assets/sabuba-logo-icon.png"
        alt="Sabuba Claypot Bowl Logo"
        className="h-full w-auto max-h-full object-contain select-none drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );
}
