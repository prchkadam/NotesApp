import React from 'react'

const viewNote = ({note,setNote}) => {
    const dltNote = (idx) => {
        const oldNote = [...note]
        oldNote.splice(idx,1)
        setNote(oldNote)
    }
  return (
      <div className='mt-10 mb-10'>
        <h1 className='flex flex-wrap justify-center'>Recent Notes</h1>

        <div className='flex flex-wrap justify-center gap-10 mt-3'>
        {note.map((elm , idx) => {
            return (
            <div key={idx}
                className='bg-bggrey h-80 w-60 p-5'>
                    <h3>{elm.title}</h3> 
                    <p>{elm.details}</p>
                    <button className='border-4 w-3/4'
                    onClick={() => {
                            dltNote(idx)
                        }
                    }>Delete</button>
            </div>)
        })}
        </div>

        </div>
  )
}

export default viewNote

