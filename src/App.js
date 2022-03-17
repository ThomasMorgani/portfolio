import { useState } from 'react'
import Hero from './components/Hero'
import Modal from './components/Modal'
import Works from './components/Works'
import tempItems from './data.js'

import './css/App.css'

// export const AppContext = createContext()
function App() {
  const modal = {
    isOpen: false,
  }
  const work = { items: tempItems, selected: null }
  const [appState, setState] = useState({ modal, work })

  return (
    <>
      <Hero></Hero>
      <Works {...{ appState, setState }}></Works>
      <Modal {...{ appState, setState }}></Modal>
      {/*  PROJECTS */}
      {/*  CONTACT*/}
      {/* LINKS */}
    </>
  )
}

export default App
