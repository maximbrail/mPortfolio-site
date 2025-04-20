import React from 'react'
import '../Components/styleCom.css'

export const Comparision = () => {
  return (
    <div className='comparison-div'>
      <h1 className='comparison-title'>Comparison</h1>
      <h2 className='comparison-podtitle'>Enter your details to compare: </h2>
      <input type='text' placeholder='Type your name...' className='comparison-input'/>
      <input type='number' placeholder='Type your height(cm)' className='comparison-input'/>
      <select className='select-gen'>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button className='comparison-btn'>Compare</button>
    </div>
  )
}

export default Comparision
