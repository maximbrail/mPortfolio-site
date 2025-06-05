import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./styleCom.css";
import Contacts from "../Page/Contacts.jsx"

import slide1 from "../Assets/slider1.png";
import slide2 from "../Assets/slider2.jpg";
import slide3 from "../Assets/slider3.jpg";
import slide4 from "../Assets/slider4.jpg";
import slide5 from "../Assets/slider5.jpg";
import slide6 from "../Assets/slider6.jpg";

export const MainCom = () => {
  const [activeSkill, setActiveSkill] = useState("");
  const [activeAbout, setActiveAbout] = useState("");
  const [activeContact, setActiveContact] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleSkill = (item) => {
    setActiveSkill((prev) => (prev === item ? "" : item));
  };

  const toggleAbout = (item) => {
    setActiveAbout((prev) => (prev === item ? "" : item));
  };

  const toggleContact = (item) => {
    setActiveContact((prev) => (prev === item ? "" : item));
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.setProperty("--mouse-x", `${x}px`);
    e.target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="main-obsh">
      {/* SKILLS LINE */}

      <div className="skills-progress">
        <h1 className="main-title">My Skill Progress</h1>
        <div className="progress-item">
          <p>HTML</p>
          <div className="progress-bar">
            <div className="progress-fill html"></div>
          </div>
        </div>
        <div className="progress-item">
          <p>CSS</p>
          <div className="progress-bar">
            <div className="progress-fill css"></div>
          </div>
        </div>
        <div className="progress-item">
          <p>JavaScript</p>
          <div className="progress-bar">
            <div className="progress-fill js"></div>
          </div>
        </div>
        <div className="progress-item">
          <p>React.js</p>
          <div className="progress-bar">
            <div className="progress-fill react"></div>
          </div>
        </div>
      </div>


      {/* SWIPER */}

      <div className="slider">
        <h1 className="main-title">Memes Slider</h1>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="slider-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SKILLS */}
      <div className="main">
        <h1 className="main-title">My Programming skills</h1>
        <div className="main-btns">
          {["HTML", "CSS", "JS", "React.js"].map((skill) => (
            <button
              className="main-btn"
              key={skill}
              onClick={() => toggleSkill(skill)}
              onMouseMove={handleMouseMove}
            >
              {skill}
            </button>
          ))}
        </div>
        {activeSkill && (
          <div className="info-box">
            {activeSkill === "HTML" && (
              <p>
                I use HTML (HyperText Markup Language) to create the basic
                structure of websites. With HTML, I write different parts of a
                page like titles, paragraphs, pictures, and links. This helps to
                organize the content clearly so visitors can understand and use
                the website easily. Learning HTML is very important because it
                is the main language that all websites use. It works together
                with CSS and JavaScript to make websites look good and work well
                on different devices.
              </p>
            )}
            {activeSkill === "CSS" && (
              <p>
                I use CSS (Cascading Style Sheets) to add styles and colors to
                my websites. CSS helps me change how the page looks by setting
                fonts, colors, sizes, and layouts. With CSS, I can make the site
                look beautiful and organized, and also make it work well on
                different screen sizes like phones and computers. Learning CSS
                is important because it makes websites more attractive and
                easier to use.
              </p>
            )}
            {activeSkill === "JS" && (
              <p>
                I use JavaScript (JS) to write scripts that make websites
                interactive. With JavaScript, I can add things like buttons that
                work when you click them, forms that check your answers, and
                animations that make the page more lively. JavaScript helps
                websites respond to users and change content without needing to
                reload the whole page. Learning JavaScript is important because
                it makes websites smarter and more fun to use.
              </p>
            )}
            {activeSkill === "React.js" && (
              <p>
                I use React and Vite because they are very helpful tools for
                building websites. React is a popular JavaScript library that
                helps me create web pages by breaking them into smaller parts
                called components, which makes coding easier and faster. Vite is
                a tool that helps me start and build my projects quickly with
                modern features. Together, React and Vite make it simple to
                create fast, organized, and modern websites.
              </p>
            )}
          </div>
        )}
      </div>

      {/* ABOUT */}
      <div className="main about">
        <h1 className="main-title">About me and my hobbies</h1>
        <div className="main-btns">
          {["Voleyball", "Movies", "Music", "Games"].map((item) => (
            <button
              className="main-btn"
              key={item}
              onClick={() => toggleAbout(item)}
              onMouseMove={handleMouseMove}
            >
              {item}
            </button>
          ))}
        </div>
        {activeAbout && (
          <div className="info-box">
            {activeAbout === "Voleyball" && (
              <p>
                I like to play volleyball because it is a fun and active sport.
                I usually play volleyball at school before lessons or during
                physical education classes. Playing volleyball helps me stay
                healthy, improve my teamwork skills, and enjoy time with
                friends.
              </p>
            )}
            {activeAbout === "Movies" && (
              <p>
                I rarely watch movies, but my favorite movie is "A Minecraft
                Movie." Even though I don’t watch films often, I really enjoy
                this one because it is fun and full of adventure. It shows the
                exciting world of Minecraft, which I like a lot.
              </p>
            )}
            {activeAbout === "Music" && (
              <p>
                I started getting into Eurovision recently, so now I like music
                from that contest. Eurovision has many different songs from many
                countries, and I enjoy listening to the variety of styles and
                languages. It helps me discover new music and learn about
                different cultures.
              </p>
            )}
            {activeAbout === "Games" && (
              <p>
                I like sandbox games like Minecraft because they let me build
                and create anything I want. In these games, there are no limits,
                so I can explore, make houses, and have fun using my
                imagination. Minecraft is one of my favorite sandbox games
                because it is very creative and exciting.
              </p>
            )}
          </div>

        )}
      </div>
    </div>
  );
};

export default MainCom;
