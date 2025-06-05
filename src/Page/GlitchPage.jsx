import React, { useEffect, useState } from 'react';
import './GlitchPage.css';
import { Link } from 'react-router-dom';

const glitchPhrases = [
  "ACCESS GRANTED",
  "SYSTEM BREACH",
  "404 REALITY NOT FOUND",
  "HELLO MAX",
  "NEVER TRUST THE INTERFACE",
  "RUNNING... ████████",
  "mPortfolio.OVERDRIVE()",
  "WELCOME TO THE BACKDOOR",
  "GLITCH DETECTED",
  "DECODING HUMANITY...",
  "SIGNAL LOST",
  "TRACING ROUTE TO UNKNOWN",
  "LOADING . . . ERROR",
  "GHOST IN THE CODE",
  "YOU SHOULDN’T BE HERE",
  "INITIATING PROTOCOL 0x0F",
  "CORE OVERRIDE ENABLED",
  "WAKE UP, MAX",
  "SYSTEM.LOG(“YOU’RE NOT ALONE”)",
  "FALLING THROUGH THE STACK",
  "DEEP VOID INITIALIZED",
  "AI OVERRIDE IN PROGRESS",
  "MEMORY LEAK DETECTED",
  "EXECUTING DARK MODE",
  "UPLOAD COMPLETE ▒▒▒",
  ">>> RUN mind.exe",
  "Ξ PORTAL IS OPEN Ξ",
  "WARNING: STABLE REALITY NOT FOUND",
  "YOU ARE INSIDE THE LOOP",
  "DEBUGGING EXISTENCE...",
  "THE MATRIX IS PATCHED",
  "CONTROL+C... FAILED",
  "UNKNOWN PROTOCOL RESPONSE",
  "SLEEP MODE: CANCELED",
  "███ ENCRYPTING THOUGHTS ███",
  "DREAMS.LOOP(INFINITY)",
  "REBOOTING DIMENSION",
  "//todo: ESCAPE",
  "0xDEADBEEF DETECTED",
  "I AM ERROR"
];

const GlitchPage = () => {
  const [currentPhrase, setCurrentPhrase] = useState("INITIALIZING...");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPhrase = glitchPhrases[Math.floor(Math.random() * glitchPhrases.length)];
      setCurrentPhrase(randomPhrase);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glitch-container">
      <div className="noise-overlay" />
      <div className="scanlines" />

      <div className="glitch-box">
        <h1 className="glitch-title">WELCOME TO THE GLITCH</h1>

        <div className="glitch-zone">
          <p className="glitch-text">{currentPhrase}</p>
        </div>

        <Link to="/" className="glitch-button">↩ Back to reality</Link>
      </div>
    </div>
  );
};

export default GlitchPage;
