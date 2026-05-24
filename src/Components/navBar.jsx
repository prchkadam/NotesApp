import React from 'react'
import { Plus , SunMoon } from 'lucide-react';

const navBar = () => {
  return (
    <div>
      <header className='flex flex-nowrap gap-30 justify-center-safe m-3 p-3'>

        <div className="flex flex-nowrap gap-3">
          <img src=" /favicon/favicon.ico" alt="logo" />
          <div className="place-self-center-safe">
          NotesApp
          </div>
        </div>


        <input className='border-2 border-black text-center'
        type="text"
        placeholder='Find Your Note' />

        <div className="place-self-center-safe">
          View Notes
        </div>
  
        <button className='bg-black rounded-md place-self-center-safe'>
          <Plus color="white" />
        </button>
        
        <button className='bg-black rounded-md place-self-center-safe '>
          <SunMoon color="white" strokeWidth={1} />
          </button>
          
      

      </header>
    </div>
  )
}

export default navBar
