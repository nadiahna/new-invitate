import React, { useState, useRef, useEffect } from "react";
import HeartIcon from '@mui/icons-material/Favorite';
import AlbumIcon from '@mui/icons-material/Album';
import { Pause } from "@mui/icons-material";

interface AudioPlayerProps {
  audioSrc: any;
  id: string;
  onClickBtn: () => void;
  audioRef: any;
  isPlaying: boolean;
}

const AudioPlayer = ({ audioSrc, id, onClickBtn, audioRef, isPlaying }: AudioPlayerProps) => {

  const iconStyle = {
    color: "black",
    fontSize: 30,
  };

  return (

    <div className="audio-player">
      <audio id={id} autoPlay preload="true" loop ref={audioRef} >
        <source src={audioSrc} type="audio/mp3" />
      </audio>
      <button onClick={onClickBtn}>
        {isPlaying ? (
          <AlbumIcon sx={iconStyle} />
        ) : (
          <Pause sx={iconStyle} />
        )}
      </button>
    </div>

  );
};

export default AudioPlayer;