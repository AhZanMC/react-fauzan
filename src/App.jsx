import { useState } from 'react'
import viteLogo from '/vite.svg'
// Mengimport komponen introduction
import Introduction from './components/Introduction.jsx'
import Profile from './components/profile.jsx'
import './App.css'

// function App() itu komponen utama di aplikasi ini, nama filenya App dan nama function juga App
function App() {
  return (
    <>
      <div>
        <Profile />

        {/* Memanggil Komponen Introduction */}
        <Introduction name="Fauzan"/>
        <Introduction name="Shima Rin"/>
      </div>
    </>
  )
}

export default App
