import React from 'react'

const introCard = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-12 md:py-20">
      {/* Left Text Area */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50 uppercase tracking-wider">
          ✨ Space for your ideas
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
          NotesApp for <br />
          <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Notes & Docs.
          </span>
        </h1>
        
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
          One connected workspace to capture, organize, and share every note. Simple, fast, and completely focused on your thoughts.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <button 
            onClick={() => handleScroll('add-note')}
            className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-sm transition-all duration-200 shadow-sm active:scale-98 cursor-pointer"
          >
            Start taking notes
          </button>
          <button 
            onClick={() => handleScroll('view-notes')}
            className="px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 font-medium text-sm transition-all duration-200 active:scale-98 cursor-pointer"
          >
            View recent notes
          </button>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-transparent dark:from-neutral-800/20 dark:to-transparent rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
          <img 
            className="relative w-full h-auto max-h-[300px] md:max-h-[350px] object-contain drop-shadow-xl select-none dark:brightness-95 hover:scale-[1.02] transition-transform duration-500"
            src="https://images.ctfassets.net/spoqsaf9291f/7jWaVBJJRuAJ5MF4ZnIMj4/04abdc5c86fe8a9ff36c0b47f2d2f45c/new-landing-pages-notes.png" 
            alt="Workspace illustration showcasing digital notes and docs creation" 
          />
        </div>
      </div>
    </section>
  )
}

export default introCard
