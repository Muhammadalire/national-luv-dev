import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Poetry from './components/Poetry';
import Prayers from './components/Prayers';
import ProudOfYou from './components/ProudOfYou';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Function to attempt playback
    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Once successful, remove the global listeners so we don't spam play
            document.removeEventListener('click', attemptPlay);
            document.removeEventListener('touchstart', attemptPlay);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
          });
      }
    };

    // Add listeners for any user interaction
    document.addEventListener('click', attemptPlay);
    document.addEventListener('touchstart', attemptPlay);

    return () => {
      document.removeEventListener('click', attemptPlay);
      document.removeEventListener('touchstart', attemptPlay);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation(); // Prevent triggering the global listener if it's still active
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Audio Element */}
      <audio ref={audioRef} src="/song_real.mp4" loop />

      {/* Floating Music Control Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-[#590d22] shadow-lg hover:bg-white/50 transition-all hover:scale-110"
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <Hero />
      <Letter />
      <Poetry />
      <Prayers />
      <ProudOfYou />

      <footer className="text-center py-8 text-[#800f2f] text-sm opacity-60">
        <p>Made with ❤️ for You | National Love Day Gift</p>
      </footer>
    </div>
  );
}

export default App;
