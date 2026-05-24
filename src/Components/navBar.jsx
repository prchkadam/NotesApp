import React, { useEffect } from 'react'
import { Plus, Sun, Moon, Search } from 'lucide-react';

const navBar = ({ searchQuery, setSearchQuery, darkMode, setDarkMode }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      const isInputFocused = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);
      if (e.key === '/' && !isInputFocused) {
        e.preventDefault();
        const searchInput = document.getElementById('search-notes-input');
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 dark:border-neutral-800/60 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 gap-3">
        {/* Logo and Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <img 
            className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform duration-300" 
            src="/favicon/favicon.ico" 
            alt="logo" 
          />
          <span className="font-bold text-base sm:text-[17px] tracking-tight text-neutral-900 dark:text-white font-sans">
            NotesApp
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-[140px] sm:max-w-xs md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none" />
          <input 
            id="search-notes-input"
            className="w-full pl-9 pr-10 py-1.5 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:border-neutral-400 dark:focus:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 transition-all duration-200 focus:bg-white dark:focus:bg-neutral-900"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find your note..." 
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono font-medium text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200/50 dark:border-neutral-700/50 pointer-events-none hidden sm:inline-block">
            /
          </kbd>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 sm:gap-2.5">
          <button 
            onClick={() => handleScroll('view-notes')}
            className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white px-2 py-1.5 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors duration-200"
          >
            View Notes
          </button>
    
          <button 
            onClick={() => handleScroll('add-note')}
            className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-lg bg-neutral-950 dark:bg-neutral-50 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            title="Add Note"
          >
            <Plus className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-905/30 text-neutral-700 dark:text-neutral-300 transition-all duration-200 cursor-pointer active:scale-95"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default navBar
