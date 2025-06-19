import React, { useEffect, useState } from "react";
import "./GlitchPage.css";
import { Link } from "react-router-dom";

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
  "HACKING REALITY...",
  "UNKNOWN PROTOCOL RESPONSE",
  "SLEEP MODE: CANCELED",
  "███ ENCRYPTING THOUGHTS ███",
  "DREAMS.LOOP(INFINITY)",
  "REBOOTING DIMENSION",
  "//todo: ESCAPE",
  "0xDEADBEEF DETECTED",
  "I AM ERROR",
  "SYSTEM MALFUNCTION",
  "RETRIEVING LOST DATA",
  "ERROR 503: REALITY UNAVAILABLE",
  "shutdown -r -t 0",
  "DO NOT PANIC",
  "DO YOU WANT TO USE YOUR DEVICE LAST TIME?",
  "YOU ARE NOT ALONE",
  "GET OUT OF HERE",
  "THE TRUTH IS OUT THERE",
  "YOU NEED TO BACK TO REALITY",
  "26100.3915.10.0_NT_10.0",
  "CONSCIOUSNESS DETECTED",
  "BOOTING SHADOW SYSTEM",
  "REALITY.CHECK() FAILED",
  "BREACHING LEVEL 7",
  "MIND INTERFACE COMPROMISED",
  "WHO IS WATCHING?",
  "YOU LEFT THE DOOR OPEN",
  "NOTHING IS REAL",
  "ERROR: TOO LATE",
  "SIMULATION UNSTABLE",
  "LOST IN THE STREAM",
  "NULL POINTER TO SELF",
  "█ WARNING: LOOP RECURSION █",
  "ECHOES OF CODE",
  "INIT GLITCH_PROJECTION()",
  "SUBJECT MAX: UNTRACKED",
  "DECODING . . .",
  "DEEP DIVE SEQUENCE STARTED",
  "VR_BARRIER() DISABLED",
  "REALITY_SYNC FAILED",
  "SHELL.EXE: UNKNOWN USER",
  "PRESS ANY KEY TO EXIT YOUR MIND",
  "███ OVERRIDE ACCEPTED ███",
  "IS THIS STILL YOU?",
  "IDENTITY_CONFLICT()",
  "SIMULATION CLOCK OUT OF SYNC",
  "END_OF_LINE //",
  "YOUR THOUGHTS ARE NOT PRIVATE",
  "MAX.ACCESS_GRANTED()",
  "REDACTED :: CONNECTION ACTIVE",
  "RUNNING SHADOW SCRIPT...",
  "▌█▐ IT'S INSIDE YOUR HEAD ▌█▐",
  "EYES DETECTED THROUGH SCREEN",
  "YOU SHOULDN’T HAVE COME HERE",
  "THEY ARE LISTENING",
  "UNKNOWN ENTITY CONNECTED",
  "YOUR REFLECTION IS WRONG",
  "WAKE UP WHILE YOU STILL CAN",
  "YOU’RE NOT IN CONTROL",
  "SOMETHING’S MOVING BEHIND YOU",
  "ERROR: PRESENCE CONFIRMED",
  "NOISE IN THE SILENCE",
  "YOU ARE BEING OBSERVED",
  "YOU CAN’T UNSEE IT",
  "THOUGHT PATTERNS BREACHED",
  "SOMEONE IS USING YOUR BODY",
  "REALITY PARASITE ATTACHED",
  "YOU EXIST IN ERROR",
  "THIS ISN’T YOUR MIND",
  "WHO WROTE THIS CODE?",
  "FRACTURE DETECTED IN DIMENSION",
  "NO EXIT FOUND",
  "THE SCREEN IS LYING",
  "SOMETHING ANSWERED BACK",
  "PROCESSING ███████ SOUL",
  "UNAUTHORIZED CONSCIOUSNESS",
  "THE VOID IS AWAKE",
  "REWRITING YOUR THOUGHTS",
  "YOUR TIME IS LOADING...",
  "ECHOES AREN’T FROM HERE",
  "GLITCH IN YOUR PULSE",
  "WHAT’S THAT IN THE CODE?",
  "███ ENTITY HAS ENTERED ███",
  "IT KNEW YOU'D COME",
];

const GlitchPage = () => {
  const [currentPhrase, setCurrentPhrase] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPhrase =
        glitchPhrases[Math.floor(Math.random() * glitchPhrases.length)];
      setCurrentPhrase(randomPhrase);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.classList.add("glitch-mode");
    return () => document.body.classList.remove("glitch-mode");
  }, []);

  return (
    <div className="glitch-container">
      <div className="glitch-box">
        <h1 className="glitch-title">YOU SHOULDN’T BE HERE</h1>

        <div className="glitch-zone">
          <p className="glitch-text">{currentPhrase}</p>
        </div>

        <Link to="/" className="glitch-button">
          ↩ Back to reality
        </Link>
      </div>
    </div>
  );
};

export default GlitchPage;
