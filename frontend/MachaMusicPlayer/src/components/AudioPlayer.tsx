import React, { useEffect, useRef } from "react";
import { type track } from "../types";
interface AudioPlayerProps {
  track: track;
  volume: number;
  isPlaying: boolean;
}

export default function AudioPlayer({
  track,
  volume,
  isPlaying,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleError = () => {
    console.error("Error loading audio source:", track.src);
  };

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
      audioRef.current.volume = volume;
    }
  }, [isPlaying, volume]);

  return (
    <audio ref={audioRef} onError={handleError}>
      <source src={track.src} type={track.type} />
    </audio>
  );
}
