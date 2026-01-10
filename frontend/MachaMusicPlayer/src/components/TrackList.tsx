import React, { type ReactEventHandler } from "react";
import { type track } from "../types";

interface TrackListProps {
  tracks?: track[];
  onSelect: (track: track) => void;
}

export default function TrackList({ tracks, onSelect }: TrackListProps) {
  return (
    <div className="tracklist">
      <ul>
        {tracks?.map((track, index) => (
          <li key={index} onClick={() => onSelect(track)}>
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
