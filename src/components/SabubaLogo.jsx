import React from 'react';

export default function SabubaLogo({ className = "h-10", variant = "light", type = "full" }) {
  // If explicitly requested icon-only
  if (type === "icon") {
    return (
      <img
        src="/assets/sabuba-logo-icon.png"
        alt="Sabuba Claypot Icon"
        className={`object-contain select-none flex-shrink-0 drop-shadow-sm ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <div className={`inline-flex items-center flex-shrink-0 ${className}`}>
      <img
        src="/assets/sabuba-logo-full.png"
        alt="Sabuba - Sarapan Bubur Bakar"
        className="h-full w-auto max-h-full object-contain select-none drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );
}
