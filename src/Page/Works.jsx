import React from 'react'
import Prj1 from '../Assets/project1.png'
import Prj2 from '../Assets/project2.png'
import Prj3 from '../Assets/project3.png'
import Prj4 from '../Assets/project4.png'
import Prj5 from '../Assets/project5.png'
import Prj6 from '../Assets/project6.png'
import Prj7 from '../Assets/project7.png'
import Prj8 from '../Assets/project8.png'
import Prj9 from '../Assets/project9.png'
import Prj10 from '../Assets/project10.jpg'

export const Works = () => {
    return (
        <div className='header header2'>
            <h2 className='header-title'>Here are some of my sites. <br />
                Yes, I'm not author of this projects, but I did them</h2>
        <div className="cards">
        <a href="https://maximbrail.github.io/hotel-site/" target="_blank"rel="noopener noreferrer"className="card">
            <img src={Prj1} alt="" className="card-img" />
                <p className="card-title">Luxury Hotels Project</p>
        </a>
        <a href="https://maximbrail.github.io/shibuya-site-not-full/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj2} alt="" className="card-img" />
                <p className="card-title">Shibuya Project</p>
        </a>
        <a href="https://maximbrail.github.io/cat-energy-full/" target="_blank"rel="noopener noreferrer"className="card">
            <img src={Prj3} alt="" className="card-img" />
                <p className="card-title">Cat Energy Project</p>
        </a>
        <a href="https://maximbrail.github.io/ice-cream-site/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj4} alt="" className="card-img" />
                <p className="card-title">Polar Ice-Cream Project</p>
        </a>
        <a href="https://maximbrail.github.io/rolling-site-not-full/" target="_blank"rel="noopener noreferrer"className="card">
            <img src={Prj5} alt="" className="card-img" />
                <p className="card-title">Rolling Project</p>
        </a>
        <a href="https://react-3-4-dream.vercel.app/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj6} alt="" className="card-img" />
                <p className="card-title">Dream Project</p>
        </a>
        <a href="http://maximbrail.github.io/digital-agency-not-full" target="_blank"rel="noopener noreferrer"className="card">
            <img src={Prj7} alt="" className="card-img" />
                <p className="card-title">Digital Agency Project</p>
        </a>
        <a href="https://maximbrail.github.io/PS5-site/" target="_blank" rel="noopener noreferrer" className="card">
            <img src={Prj8} alt="" className="card-img" />
                <p className="card-title">PS5 Project</p>
        </a>
        <a href="https://maximbrail.github.io/vostok-site-hw/" target="_blank"rel="noopener noreferrer"className="card">
            <img src={Prj9} alt="" className="card-img" />
                <p className="card-title">Vostok Project</p>
        </a>
            </div>
        </div>
    )
}

export default Works;