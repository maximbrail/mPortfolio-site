import React from 'react'

export const Contacts = () => {
  return (
    <div className='contacts-div'>
        <h1 className='contacts-title'>Contact</h1>
        <input className='contact-input' type='text' placeholder='Type your name...'/>
        <input className='contact-input' type='number' placeholder='Type your age...'/>
        <input className='contact-input' type='text' placeholder='Type your comment...'/>
        <button className='contacts-btn'>Submit</button>
    </div>
  )
}
