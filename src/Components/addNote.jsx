import React from 'react'
import { useState } from 'react'

const addNote = ({note, setNote}) => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        setNote([
            ...note,
            {title, details}
        ])

        setTitle('')
        setDetails('')
    }

  return (
    <div className='grid place-items-center'>
    <div className='bg-bggrey w-3/4 flex flex-row p-10 gap-100'>
        
        <img className='h-30 mt-6 ml-5 '
        alt="checklist" 
        src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6hdMkU8S6yUTcBJLAVdzo5%2F1cac668dd6a053cb744b57b223a47ab3%2FFrame_4383.png&w=1080&q=75" />

        <div className="flex flex-col">
            <h1>New Note</h1>

            <form onSubmit={onSubmit}>
                <input 
                className='border-2 black w-100 mt-1.5 mb-5'
                type="text"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                placeholder='Enter Notes Heading'/>

                <textarea 
                className='w-100 h-30 border-2 black mb-5'
                value={details}
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
                placeholder='Write Details Here' ></textarea>
                
                <button
                className=' border-2 black'
                > Add Note</button>
            </form>

        </div>

     </div>
    </div>
  )
}

export default addNote
