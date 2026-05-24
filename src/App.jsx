import React, { useState, useEffect } from 'react'
import NavBar from './Components/navBar'
import IntroCard from './Components/introCard'
import AddNote from './Components/addNote'
import ViewNote from './Components/viewNote'

const App = () => {
  const [note, setNote] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
    }
    return false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
      <NavBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
        <IntroCard />
        
        <div id="add-note" className="scroll-mt-24">
          <AddNote
            note={note}
            setNote={setNote}
          />
        </div>

        <div id="view-notes" className="scroll-mt-24 border-t border-neutral-100 dark:border-neutral-800 pt-12">
          <ViewNote
            note={note}
            setNote={setNote}
            searchQuery={searchQuery}
          />
        </div>
      </main>
    </div>
  )
}

export default App
