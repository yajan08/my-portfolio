"use client";

import { useEffect, useRef, useState } from "react";

interface SymbolData {
  id: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
}

const SYMBOL_SETS = [
  "E = mc^2   F = ma   \u03A3   \u221A   \u222B   \u2202   \u03C0   \u03B8",
  "\u2207   \u03BB   \u03A8   \u03C9   \u03B1   \u03B2   \u03B3   \u221E",
  "x = -y   a^2 + b^2 = c^2   sin\u03B8   cos\u03B8   tan\u03B8",
  "if (x > y) { return z; }   for (i=0; i<n; i++)   const \u03BB = f(x)",
  "\u2200x \u2208 R   \u2203y   \u2248   \u2260   \u2264   \u2265   \u2192   \u2190",
];

export default function RandomSymbols() {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const spawnSymbols = () => {
      const id = idRef.current++;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = 8 + Math.random() * 6;
      const opacity = 0.08 + Math.random() * 0.14;

      setSymbols((prev) => {
        const next = [...prev, { id, x, y, duration, opacity }];
        return next.length > 6 ? next.slice(next.length - 6) : next;
      });

      window.setTimeout(() => {
        setSymbols((prev) => prev.filter((item) => item.id !== id));
      }, (duration + 0.5) * 1000);
    };

    const interval = window.setInterval(spawnSymbols, 2200);
    spawnSymbols();

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="symbol-layer" aria-hidden="true">
      {symbols.map((symbol) => (
        <span
          key={symbol.id}
          className="symbol"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            opacity: symbol.opacity,
            animationDuration: `${symbol.duration}s`,
          }}
        >
          {SYMBOL_SETS[symbol.id % SYMBOL_SETS.length]}
        </span>
      ))}
    </div>
  );
}
