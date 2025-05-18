import React from 'react'
import Prj1 from '../Assets/project1.png'
import Prj2 from '../Assets/project2.png'
import Prj3 from '../Assets/project3.png'
import Prj4 from '../Assets/project4.png'

export const Works = () => {
    return (
        <div className='header header2'>
            <h2 className='header-title'>Here are some of my sites. <br />
                Yes, these are not my projects, but I did them</h2>
            <div className="cards">
                <div className='card'>
                    <img src={Prj1} alt="" className="card-img" />
                    <p className='card-title'>Luxury Hotels Project</p>
                </div>
                <div className='card'>
                    <img src={Prj2} alt="" className="card-img" />
                    <p className='card-title'>Shibuya Project</p>
                </div>
                <div className='card'>
                    <img src={Prj3} alt="" className="card-img" />
                    <p className='card-title'>Cat Energy Project</p>
                </div>
                <div className='card'>
                    <img src={Prj4} alt="" className="card-img" />
                    <p className='card-title'>Polar Ice Cream Project</p>
                </div>
            </div>
        </div>
    )
}

export default Works;