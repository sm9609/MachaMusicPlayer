import React from 'react'
import {type track} from '../types'

interface TrackListProps {
    tracks?: track[]
}

export default function TrackList({tracks}: TrackListProps) {
  return (
    <div className='tracklist'>
        <ul>{tracks?.map((t,i)=>(<li>{t.title}</li>))}</ul>
    </div>
  )
}
