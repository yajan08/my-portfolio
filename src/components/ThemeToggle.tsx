"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isSamurai, setIsSamurai] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "samurai") {
      document.documentElement.dataset.theme = "samurai";
      setIsSamurai(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isSamurai;
    setIsSamurai(next);
    if (next) {
      document.documentElement.dataset.theme = "samurai";
      window.localStorage.setItem("theme", "samurai");
    } else {
      delete document.documentElement.dataset.theme;
      window.localStorage.setItem("theme", "base");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-pressed={isSamurai}
    >
      {isSamurai ? "Return to Minimal" : "Enter Samurai Mode"}
    </button>
  );
}
