import React from 'react';

export default function SabubaLogo({ className = "h-10", variant = "light" }) {
  // variant: "light" (for dark background) or "dark" (for light background)
  const primaryColor = variant === "dark" ? "#C8102E" : "#FFFFFF";
  const accentColor = variant === "dark" ? "#F59E0B" : "#FBBF24";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Pure Vector Claypot & Flame Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto aspect-square flex-shrink-0 drop-shadow-md"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Steam Lines */}
        <path d="M38 18 C35 12, 43 10, 40 4" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M50 18 C47 12, 55 10, 52 4" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M62 18 C59 12, 67 10, 64 4" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />

        {/* Claypot Outer Body */}
        <path 
          d="M20 38 C12 38, 12 48, 20 48 L22 48 C26 62, 35 70, 50 70 C65 70, 74 62, 78 48 L80 48 C88 48, 88 38, 80 38 Z" 
          fill={primaryColor} 
        />
        {/* Claypot Rim / Top Opening */}
        <ellipse cx="50" cy="38" rx="28" ry="8" fill={variant === "dark" ? "#FAF4EB" : "#121212"} />
        <ellipse cx="50" cy="38" rx="24" ry="6" fill={primaryColor} opacity="0.3" />
        
        {/* Claypot Dots / Topping texture inside pot */}
        <circle cx="42" cy="37" r="1.5" fill={primaryColor} />
        <circle cx="47" cy="39" r="1.5" fill={primaryColor} />
        <circle cx="53" cy="36" r="1.5" fill={primaryColor} />
        <circle cx="58" cy="38" r="1.5" fill={primaryColor} />

        {/* Fire Flames Underneath */}
        <path 
          d="M30 66 C32 60, 36 62, 38 56 C42 66, 48 54, 50 50 C52 54, 58 66, 62 56 C64 62, 68 60, 70 66 C65 78, 35 78, 30 66 Z" 
          fill="#C8102E" 
        />
        <path 
          d="M38 68 C40 63, 44 65, 46 60 C48 67, 50 58, 52 58 C54 67, 56 65, 62 68 C58 74, 42 74, 38 68 Z" 
          fill="#F59E0B" 
        />
      </svg>

      {/* Pure Typography */}
      <div className="flex flex-col text-left justify-center">
        <span className={`font-heading font-black tracking-wider text-xl sm:text-2xl leading-none ${
          variant === "dark" ? "text-sabuba-dark" : "text-white"
        }`}>
          SABUBA
        </span>
        <span className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest mt-1 ${
          variant === "dark" ? "text-sabuba-red" : "text-sabuba-gold"
        }`}>
          SARAPAN BUBUR BAKAR
        </span>
      </div>
    </div>
  );
}
