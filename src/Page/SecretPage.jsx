import React, { useState } from "react";
import "./SecretPage.css";
import meme from '../Assets/secret.jpg';
import meme2 from '../Assets/secret2.jpg';

export const SecretPage = () => {
  const [clicks, setClicks] = useState(0);
  const [spinning, setSpinning] = useState(false);

  // Для убегающей картинки
  const [pos, setPos] = useState({ top: "50%", left: "50%" });
  const [jump, setJump] = useState(false);

  const handleSpinClick = () => {
    setClicks(clicks + 1);
    setSpinning(true);
  };

  const onSpinAnimationEnd = () => {
    setSpinning(false);
  };

  const moveAway = () => {
    const newTop = Math.random() * 70 + 10 + "%";
    const newLeft = Math.random() * 70 + 10 + "%";
    setPos({ top: newTop, left: newLeft });
  };

  const handleJumpClick = () => {
    setJump(true);
    setTimeout(() => setJump(false), 300);
  };

  return (
    <div className="secret-page">
      <h1>Welcome to Secret Page!</h1>
      <h2>Clicks: {clicks}</h2>

        {/* 1 */}
      <img
        src={meme}
        alt="Secret Meme"
        className={`meme-img ${spinning ? "spin" : ""}`}
        onClick={handleSpinClick}
        onAnimationEnd={onSpinAnimationEnd}
        draggable={false}
      />

        {/* 2 */}
      <img
        src={meme2}
        alt="Escape Meme"
        className={`escape-img ${jump ? "jump" : ""}`}
        style={{ position: "absolute", top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
        onMouseEnter={moveAway}
        onClick={handleJumpClick}
        draggable={false}
      />
    </div>
  );
};

export default SecretPage;
