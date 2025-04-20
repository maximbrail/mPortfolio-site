import React from "react";
import "./styleCom.css";

export const MainCom = () => {
    return (
        <div className="main-obsh">
            <div className="main">
                <h1 className="main-title">Skills</h1>

                <div className="main-btns">
                    <button className="main-btn">HTML</button>
                    <button className="main-btn">CSS</button>
                    <button className="main-btn">JS</button>
                    <button className="main-btn">React.js</button>
                </div>
            </div>

            <div className="main">
                <h1 className="main-title">About</h1>

                <div className="main-btns">
                    <button className="main-btn">Voleyball</button>
                    <button className="main-btn">Movies</button>
                    <button className="main-btn">Music</button>
                    <button className="main-btn">Games</button>
                </div>
            </div>

            <div className="main2">
                <h1 className="main-title">Contact</h1>
                <h2 className="main-podtitle">Select a method below</h2>

                <div className="main-btns">
                    <button className="main-btn">Telegram</button>
                    <button className="main-btn">Instagram</button>
                    <button className="main-btn">WhatsApp</button>
                </div>
            </div>
        </div>
    );
};

export default MainCom;