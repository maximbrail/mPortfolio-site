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
                        {activeSkill === "HTML" && <p>I use HTML to create the basic structure of websites. With HTML, I write different parts of a page like titles, paragraphs, pictures, and links. This helps to organize the content clearly so visitors can understand and use the website easily. Learning HTML is very important because it is the main language that all websites use. It works together with CSS and JavaScript to make websites look good and work well on different devices.</p>}
                        {activeSkill === "CSS" && <p>I use CSS to add styles and colors to my websites. CSS helps me change how the page looks by setting fonts, colors, sizes, and layouts. With CSS, I can make the site look beautiful and organized, and also make it work well on different screen sizes like phones and computers. Learning CSS is important because it makes websites more attractive and easier to use.</p>}
                        {activeSkill === "JS" && <p>I use JavaScript (JS) to write scripts that make websites interactive. With JavaScript, I can add things like buttons that work when you click them, forms that check your answers, and animations that make the page more lively. JavaScript helps websites respond to users and change content without needing to reload the whole page. Learning JavaScript is important because it makes websites smarter and more fun to use.</p>}
                        {activeSkill === "React.js" && <p>I use React and Vite because they are very helpful tools for building websites. React is a popular JavaScript library that helps me create web pages by breaking them into smaller parts called components, which makes coding easier and faster. Vite is a tool that helps me start and build my projects quickly with modern features. Together, React and Vite make it simple to create fast, organized, and modern websites.</p>}
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
                        {activeAbout === "Voleyball" && <p>I like to play volleyball because it is a fun and active sport. I usually play volleyball at school before lessons or during physical education classes. Playing volleyball helps me stay healthy, improve my teamwork skills, and enjoy time with friends.</p>}
                        {activeAbout === "Movies" && <p>I rarely watch movies, but my favorite movie is "A Minecraft Movie." Even though I don’t watch films often, I really enjoy this one because it is fun and full of adventure. It shows the exciting world of Minecraft, which I like a lot.</p>}
                        {activeAbout === "Music" && <p>I started getting into Eurovision recently, so now I like music from that contest. Eurovision has many different songs from many countries, and I enjoy listening to the variety of styles and languages. It helps me discover new music and learn about different cultures.</p>}
                        {activeAbout === "Games" && <p>I like sandbox games like Minecraft because they let me build and create anything I want. In these games, there are no limits, so I can explore, make houses, and have fun using my imagination. Minecraft is one of my favorite sandbox games because it is very creative and exciting.</p>}
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
