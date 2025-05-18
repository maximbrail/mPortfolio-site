import React from "react";
import "./styleCom.css";
import Prj1 from "../Assets/project1.png";
import Prj2 from "../Assets/project2.png";
import Prj3 from "../Assets/project3.png";
import Prj4 from "../Assets/project4.png";

export const HeaderCom = () => {
  return (
    <div className="header-obsh">
      <div className="header3">
        <h1 className="header-title2">Terminal</h1>
        <div className="window-controls">
          <div className="window-btn">-</div>
          <div className="window-btn">+</div>
          <div className="window-btn">×</div>
        </div>
      </div>

      <div className="header">
        <header className="podtitles">
        <h1 className="header-title header-title3">
            Microsoft Windows [Version 10.0.26100.3915] 
            <br/>
        &copy; mCorporation 2025. All rights reserved. Probably.
        </h1>
        </header>

        <h1 className="header-title">
          C:\Users\Max\Desktop{">"} cd PortfolioWeb
        </h1>
        <h1 className="header-title">
          C:\Users\Max\Desktop\PortfolioWeb{">"} npm run dev
          <br/>
          <br/>
          VITE v6.3.2  ready in 242 ms
        ➜  Local:   http://localhost:5173/
        </h1>
        <h1 className="header-title">
          <br/>
          C:\Users\Max\Desktop\PortfolioWeb{">"} echo Hello! I'm Max, 15-yrs old
          frond-end student
          <br/>
          <br/>
          Hello! I'm Max, 15-yrs old frond-end student.
        </h1>
        <h1 className="header-title">
          <br/>
          C:\Users\Max\Desktop\PortfolioWeb{">"} echo I live in Tashkent, study
          at school №145 and at the "IT Park" programming school.
          <br/>
          <br/>
          I live in Tashkent, study
          at school №145 and at the "IT Park" programming school.
        </h1>
      </div>

      <div className="header header2">
        <h2 className="header-title">
          Here are some of my sites. <br />
          Yes, these are not my projects, but I did them
        </h2>
        <div className="cards">
          <div className="card">
            <img src={Prj1} alt="" className="card-img" />
            <p className="card-title">Luxury Hotels Project</p>
          </div>
          <div className="card">
            <img src={Prj2} alt="" className="card-img" />
            <p className="card-title">Shibuya Project</p>
          </div>
          <div className="card">
            <img src={Prj3} alt="" className="card-img" />
            <p className="card-title">Cat Energy Project</p>
          </div>
          <div className="card">
            <img src={Prj4} alt="" className="card-img" />
            <p className="card-title">Polar Ice Cream Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCom;
