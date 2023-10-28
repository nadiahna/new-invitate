import React , {useState, useRef, useEffect} from "react";
import HeartIcon from '@mui/icons-material/Favorite';
import { Audiotrack } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";

const AudioPlayer = ({audioSrc}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        setIsPlaying(true);
    }, [])

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const iconStyle = {
        color: "#f266ab",
        fontSize: 25,
        Animation: isPlaying ? 'spin 0.9s linear infinite' : 
        'none',
    };

return (

    <div className="audio-player animate-spin">
      <audio autoPlay ref={audioRef} src={audioSrc} />
      <button onClick={togglePlay}>
        {isPlaying ? (
          <Audiotrack sx={iconStyle} />
        ) : (
          <Pause sx={iconStyle} />
        )}
      </button>
    </div>
   
);
};

 export default AudioPlayer;