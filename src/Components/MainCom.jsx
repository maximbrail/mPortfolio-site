import React, { useState } from "react";
import "./styleCom.css";

export const MainCom = () => {
    const [activeSkill, setActiveSkill] = useState("");
    const [activeAbout, setActiveAbout] = useState("");
    const [activeContact, setActiveContact] = useState("");

    const toggleSkill = (item) => {
        setActiveSkill(prev => (prev === item ? "" : item));
    };

    const toggleAbout = (item) => {
        setActiveAbout(prev => (prev === item ? "" : item));
    };

    const toggleContact = (item) => {
        setActiveContact(prev => (prev === item ? "" : item));
    };

    return (
        <div className="main-obsh">
            {/* SKILLS */}
            <div className="main">
                <h1 className="main-title">Skills</h1>
                <div className="main-btns">
                    {["HTML", "CSS", "JS", "React.js"].map((skill) => (
                        <button
                            className="main-btn"
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
                {activeSkill && (
                    <div className="info-box">
                        {activeSkill === "HTML" && <p>I use HTML to write website layouts</p>}
                        {activeSkill === "CSS" && <p>I use CSS to write styles for the site</p>}
                        {activeSkill === "JS" && <p>I use JS to write scripts for the site</p>}
                        {activeSkill === "React.js" && <p>I use React and Vite because they are very convenient</p>}
                    </div>
                )}
            </div>

            {/* ABOUT */}
            <div className="main">
                <h1 className="main-title">About</h1>
                <div className="main-btns">
                    {["Voleyball", "Movies", "Music", "Games"].map((item) => (
                        <button
                            className="main-btn"
                            key={item}
                            onClick={() => toggleAbout(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                {activeAbout && (
                    <div className="info-box">
                        {activeAbout === "Voleyball" && <p>I like to play volleyball, but I play it at school</p>}
                        {activeAbout === "Movies" && <p>I rarely watch movies, but my favorite is "A Minecraft Movie"</p>}
                        {activeAbout === "Music" && <p>I started getting into Eurovision, so I like music from there</p>}
                        {activeAbout === "Games" && <p>I like sandboxes like Minecraft</p>}
                    </div>
                )}
            </div>

            {/* CONTACT */}
            <div className="main2">
                <h1 className="main-title">Contact</h1>
                <h2 className="main-podtitle">Select a method below</h2>
                <div className="main-btns">
                    {["Telegram", "Instagram", "WhatsApp"].map((platform) => (
                        <button
                            className="main-btn"
                            key={platform}
                            onClick={() => toggleContact(platform)}
                        >
                            {platform}
                        </button>
                    ))}
                </div>
                {activeContact && (
                    <div className="info-box">
                        {activeContact === "Telegram" && <p>Telegram: @ChillitChel</p>}
                        {activeContact === "Instagram" && <p>Instagram: @vmagent</p>}
                        {activeContact === "WhatsApp" && <p>WhatsApp: +998 90 123-12-34</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainCom;
