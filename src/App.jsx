import React from 'react'
import NavBar from './Components/navBar'
import IntroCard from './Components/introCard'
import AddNote from './Components/addNote'
import ViewNote from './Components/viewNote'
import { useState } from 'react'

const App = () => {

    const [note, setNote] = useState([])

  return (
    <div>
      <NavBar />
      <hr />
      <IntroCard />
      <AddNote
        note={note}
        setNote={setNote}/> 
       <ViewNote
        note={note}
        setNote={setNote}/>
    </div>
  )
}

export default App
