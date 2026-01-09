import { useState } from "react";
import "./App.css";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import AudioPLayer from "./components/AudioPlayer";
import { type track } from "./types";

function App() {
  const [tracks] = useState([
    {
      id: 1,
      title: "creep pikmin",
      src: "/creep-pikmin.mp3", // Use leading slash for public folder
      type: "audio/mp3",
    } as track,
  ]);

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  return (
    <div>
      <h3>{currentTrack.title}</h3>

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
