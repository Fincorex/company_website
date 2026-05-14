import React from "react";

/**
 * MONO Logo - Clean, modern typography
 * Mono is an open banking platform
 */
export function LogoMono() {
  return (
    <svg className="w-24 sm:w-28 md:w-32 h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 25V5L20 15L30 5V25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="38" y="22" className="fill-current font-bold text-lg tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>mono</text>
    </svg>
  );
}

/**
 * FLUTTERWAVE Logo - Stylized 'F' with wave motion
 */
export function LogoFlutterwave() {
  return (
    <svg className="w-32 sm:w-36 md:w-40 h-8" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15C5 10 10 5 15 5C20 5 25 10 25 15C25 20 20 25 15 25C10 25 5 20 5 15Z" fill="#F5A623" />
      <path d="M15 5C20 5 25 10 25 15L15 15L15 5Z" fill="#FB4E4E" />
      <text x="35" y="22" className="fill-current font-extrabold text-lg tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>Flutterwave</text>
    </svg>
  );
}

/**
 * NIX Logo - Professional geometric fintech logo
 */
export function LogoNix() {
  return (
    <svg className="w-20 sm:w-24 md:w-28 h-8" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25V5L25 25V5" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
      <rect x="30" y="5" width="4" height="20" fill="currentColor" />
      <path d="M45 5L65 25M65 5L45 25" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

/**
 * VERIFYME Logo - Shield/Verification aesthetic
 */
export function LogoVerifyMe() {
  return (
    <svg className="w-32 sm:w-36 md:w-40 h-8" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2L5 7V14C5 20.5 9.3 26.5 15 28C20.7 26.5 25 20.5 25 14V7L15 2Z" fill="#00C48C" fillOpacity="0.2" stroke="#00C48C" strokeWidth="2" />
      <path d="M11 15L14 18L20 12" stroke="#00C48C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="35" y="22" className="fill-current font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>VerifyMe</text>
    </svg>
  );
}

export const ALL_LOGOS = [
  { id: 1, Component: LogoMono, name: 'MONO' },
  { id: 2, Component: LogoFlutterwave, name: 'FLUTTERWAVE' },
  { id: 3, Component: LogoNix, name: 'NIX' },
  { id: 4, Component: LogoVerifyMe, name: 'VERIFYME' },
];
