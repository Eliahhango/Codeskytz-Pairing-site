import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SoundOnIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
);

const SoundOffIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
);

// Royalty-free ambient music from Chosic.com
const MUSIC_URL = 'https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-equinox.mp3';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Synchronize audio playback with the isPlaying state
  useEffect(() => {
    if (isPlaying) {
      // The play() method returns a Promise which can be rejected if the user hasn't interacted with the page yet.
      audioRef.current?.play().catch(error => {
        console.error("Audio playback failed:", error);
        // If autoplay fails, we should reflect that in the UI state.
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <>
      {/* The audio element is not rendered visibly */}
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
      
      <motion.button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        className="fixed bottom-4 right-4 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all duration-300"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
