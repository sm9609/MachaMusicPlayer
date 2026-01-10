import { useState } from "react";
import "./App.css";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import AudioPLayer from "./components/AudioPlayer";
import { type track } from "./types";

/**
 * {
      id: 1,
      title: "City (Mid Part)",
      src: "/dragunov/City (Mid Part).mp3",
      type: "audio/mp3",
    } as track,
    {
      id: 2,
      title: "R&B",
      src: "/dragunov/R&B.mp3",
      type: "audio/mp3",
    },
    {
      id: 3,
      title: "Soul",
      src: "/dragunov/Soul.mp3",
      type: "audio/mp3",
    },
    {
      id: 4,
      title: "Stripped Skin",
      src: "/dragunov/Stripped Skin.mp3",
      type: "audio/mp3",
    },
    {
      id: 5,
      title: "We Must Go",
      src: "/dragunov/We Must Go.mp3",
      type: "audio/mp3",
    },
 * 
 */

function App() {
  const [tracks] = useState([
    {
      id: 1,
      title: "creep-pikmin",
      src: "/creep-pikmin.mp3",
      type: "audio/mp3",
    },
  ]);

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handleTackSelect = (track: track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div>
      <h3>{currentTrack.title}</h3>
      <TrackList tracks={tracks} onSelect={handleTackSelect} />
      <AudioPLayer track={currentTrack} isPlaying={isPlaying} volume={volume} />
      <PlayerControls
        onPlay={(_e) => setIsPlaying(true)}
        onPause={(_e) => setIsPlaying(false)}
        onVolumeChange={(e) => setVolume(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default App;
