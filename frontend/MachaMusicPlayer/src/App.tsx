import { useState } from 'react'
import './App.css'
import TrackList from './components/TrackList'

function App() {
  
  

  return (
      <>
      <TrackList tracks={[{title: "Song 1", file: "song1.mp3"}, {title: "Song 2", file: "song2.mp3"}]} />
      </>
  )
}

export default App
