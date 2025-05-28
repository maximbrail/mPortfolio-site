import React, { useEffect, useState } from "react";
import "./styleCom.css";
import Prj1 from "../Assets/project1.png";
import Prj2 from "../Assets/project2.png";
import Prj3 from "../Assets/project3.png";
import Prj4 from "../Assets/project4.png";

export const HeaderCom = () => {
  const texts = [
    "Hello! I'm Max, a 15-year-old front-end development student from Tashkent, Uzbekistan. I'm currently studying at School №145 and also attending programming courses at IT Park, where I'm learning modern web technologies and improving my coding skills.",
    "I'm passionate about building beautiful, responsive, and user-friendly websites using HTML, CSS, and JavaScript. In my free time, I love experimenting with different layouts, exploring design ideas, and creating projects to practice what I’ve learned.",
    "I’m always eager to learn something new and grow as a developer. In the future, I hope to become a professional front-end engineer and work on real-world projects that help people and make a difference.",
    "Right now, I’m focusing on mastering JavaScript, learning how to work with APIs, and exploring frameworks like React."
  ];

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [allShownTexts, setAllShownTexts] = useState([]);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setAllShownTexts((prev) => [...prev, texts[textIndex]]);
        setCurrentText("");
        setCharIndex(0);
        setTextIndex((prev) => prev + 1);
      }
    }
  }, [charIndex, textIndex]);

  return (
    <div className="header-obsh">
      <div className="header3">
        <h1 className="header-title2">Notepad</h1>
        <div className="window-controls">
          <div className="window-btn">-</div>
          <div className="window-btn">+</div>
          <div className="window-btn">×</div>
        </div>
      </div>

      <div className="header">
        {allShownTexts.map((text, i) => (
          <h1 key={i} className="header-title">{text}</h1>
        ))}

        {textIndex < texts.length && (
          <h1 className="header-title">
            <span className="animated-text cursor-blink">{currentText}</span>
          </h1>
        )}
      </div>

      <div className="header header2">
        <h2 className="header-title">
          Here are some of my sites. <br />
          Yes, I am not the author of these sites, but I made them.
        </h2>
        <div className="cards">
          <a href="https://maximbrail.github.io/hotel-site/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj1} alt="" className="card-img" />
            <p className="card-title">Luxury Hotels Project</p>
          </a>
          <a href="https://maximbrail.github.io/shibuya-site-not-full/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj2} alt="" className="card-img" />
            <p className="card-title">Shibuya Project</p>
          </a>
          <a href="https://maximbrail.github.io/cat-energy-full/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj3} alt="" className="card-img" />
            <p className="card-title">Cat Energy Project</p>
          </a>
          <a href="https://maximbrail.github.io/final-ice-cream-updated/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj4} alt="" className="card-img" />
            <p className="card-title">Polar Ice Cream Project</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCom;
