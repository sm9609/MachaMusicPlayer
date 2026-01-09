import {useState, type ReactEventHandler} from 'react'

interface PlayerControlsProps {
  onPause: ReactEventHandler
  onPlay: ReactEventHandler
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PlayerControls({onPlay,onPause,onVolumeChange}: PlayerControlsProps) {
  return (
    <div className='controlbar'>
      <button onClick={onPlay}>play</button>
      <button onClick={onPause}>pause</button>
      <input title="volumeBar" type="range" onChange={onVolumeChange} />
    </div>
  )
}
