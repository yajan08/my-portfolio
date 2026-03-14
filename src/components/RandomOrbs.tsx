"use client";

import { useEffect, useRef, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  opacity: number;
}

export default function RandomOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const spawnOrb = () => {
      const id = idRef.current++;
      const size = Math.floor(80 + Math.random() * 180);
      const duration = 6 + Math.random() * 6;
      const opacity = 0.12 + Math.random() * 0.18;
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      const orb: Orb = { id, x, y, size, duration, opacity };
      setOrbs((prev) => {
        const next = [...prev, orb];
        return next.length > 10 ? next.slice(next.length - 10) : next;
      });

      window.setTimeout(() => {
        setOrbs((prev) => prev.filter((item) => item.id !== id));
      }, (duration + 0.5) * 1000);
    };

    const interval = window.setInterval(spawnOrb, 1400);
    spawnOrb();

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="orb-layer" aria-hidden="true">
      {orbs.map((orb) => (
        <span
          key={orb.id}
          className="orb"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            opacity: orb.opacity,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
