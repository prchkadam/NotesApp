import React from 'react'

const introCard = () => {
  return (
    <div className='flex flex-nowrap p-10 gap-21 justify-center-safe'>
        <div className="place-self-center-safe">
            <p className='size-xl'> Platform for Notes </p>
            <p className='size-lg'> One connected workspace to capture, organize, and share every note. </p>
        </div>

        <div>
            <img className=' h-50 place-self-center-safe'
            src="https://images.ctfassets.net/spoqsaf9291f/7jWaVBJJRuAJ5MF4ZnIMj4/04abdc5c86fe8a9ff36c0b47f2d2f45c/new-landing-pages-notes.png" 
            alt="Woman capturing online meeting notes in Notion on a laptop" />
            
        </div>
    </div>
  )
}

export default introCard
