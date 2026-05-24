import React from 'react'
import { Trash2, Inbox, SearchIcon } from 'lucide-react'

const viewNote = ({ note, setNote, searchQuery = '' }) => {
  const dltNote = (idx) => {
    const oldNote = [...note]
    oldNote.splice(idx, 1)
    setNote(oldNote)
  }

  // Filter notes by search query if it is provided
  const filteredNotes = note.filter((elm) => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return true
    return (
      (elm.title && elm.title.toLowerCase().includes(query)) ||
      (elm.details && elm.details.toLowerCase().includes(query))
    )
  })

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-sans">
            Recent Notes
          </h2>
          <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50">
            {filteredNotes.length}
          </span>
        </div>
      </div>

      {/* Empty States */}
      {filteredNotes.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center p-12 sm:p-16 border border-dashed border-neutral-200 dark:border-neutral-800/80 rounded-2xl bg-neutral-50/20 dark:bg-neutral-900/5">
          {note.length === 0 ? (
            <>
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-400 dark:text-neutral-500">
                <Inbox className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">No notes yet</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mt-1">
                Start capturing your thoughts by adding a new note above!
              </p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-400 dark:text-neutral-500">
                <SearchIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">No matches found</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mt-1">
                We couldn't find any notes matching "{searchQuery}". Try a different keyword.
              </p>
            </>
          )}
        </div>
      )}

      {/* Notes Grid */}
      {filteredNotes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.map((elm, idx) => {
            // Find the actual index in the main note array to delete the correct item
            const mainIdx = note.indexOf(elm)
            return (
              <div 
                key={idx}
                className="group relative flex flex-col justify-between p-5 bg-neutral-50/40 dark:bg-neutral-900/10 border border-neutral-200/60 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700/80 hover:shadow-sm transition-all duration-300 min-h-[160px] overflow-hidden"
              >
                {/* Delete Button (visible on hover for desktop, always visible on touch/mobile devices) */}
                <button 
                  onClick={() => dltNote(mainIdx)}
                  className="absolute top-3.5 right-3.5 p-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/80 md:bg-transparent md:border md:border-transparent md:opacity-0 group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-950/20 text-neutral-400 hover:text-red-600 dark:text-neutral-500 dark:hover:text-red-400 transition-all duration-200 cursor-pointer active:scale-90"
                  title="Delete Note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <div className="pr-6">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight mb-2 line-clamp-1 font-sans">
                    {elm.title}
                  </h3> 
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal whitespace-pre-wrap break-words line-clamp-4">
                    {elm.details}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default viewNote

