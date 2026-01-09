import React from 'react'
import {type track} from '../types'

interface TrackListProps {
    tracks?: track[]
}

export default function TrackList({tracks}: TrackListProps) {
  return (
    <div className='tracklist'>
        <ul>{tracks?.map((track,index)=>(<li key={index}>{track.title}</li>))}</ul>
    </div>
  )
}
