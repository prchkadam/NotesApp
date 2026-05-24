import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

const addNote = ({note, setNote}) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() && !details.trim()) return

    setNote([
      ...note,
      { title: title.trim() || 'Untitled', details: details.trim() }
    ])

    setTitle('')
    setDetails('')
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300">
        
        {/* Left Side Illustration */}
        <div className="hidden md:block w-40 h-40 flex-shrink-0">
          <img 
            className="w-full h-full object-contain select-none opacity-85 dark:opacity-75"
            alt="checklist illustration" 
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6hdMkU8S6yUTcBJLAVdzo5%2F1cac668dd6a053cb744b57b223a47ab3%2FFrame_4383.png&w=1080&q=75" 
          />
        </div>

        {/* Right Side Form */}
        <div className="flex-1 w-full">
          <div className="mb-5 flex items-center gap-2">
            <span className="flex w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-white animate-pulse" />
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-sans">
              Create New Note
            </h2>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <input 
                className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 text-sm sm:text-base outline-none focus:border-neutral-400 dark:focus:border-neutral-700 focus:ring-4 focus:ring-neutral-100 dark:focus:ring-neutral-800/30 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 transition-all duration-200"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title (e.g. Weekly Meeting Notes)"
              />
            </div>

            <div>
              <textarea 
                className="w-full h-28 px-4 py-2.5 rounded-lg bg-white dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-700 focus:ring-4 focus:ring-neutral-100 dark:focus:ring-neutral-800/30 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 transition-all duration-200 resize-y"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Write your details here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 shadow-sm transition-all duration-200 active:scale-98 cursor-pointer select-none"
            >
              <PlusCircle className="w-4 h-4" />
              Add Note
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default addNote
