import {useState} from 'react'

interface PlayerControlsProps {
  onPlay?: ()=>void
  onPuase?: ()=>void
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export default function PlayerControls({onPlay,onPuase,onVolumeChange}: PlayerControlsProps) {
  return (
    <div className='controlbar'>
      <button onClick={onPlay}>Play</button>
      <button onClick={onPuase}>Pause</button>
      <input title="volumeBar" type="range" onChange={onVolumeChange} />
    </div>
  )
}
