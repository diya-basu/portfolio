// import ReactLoading from 'react-loading';

import { useProgress } from "@react-three/drei"



import React,{useState,useEffect} from 'react';
import './LoadingScreen.css'; 
import {motion, animate, AnimatePresence} from 'framer-motion';
// import LoadingBar from 'react-top-loading-bar';
// import LinearProgress from '@mui/material/LinearProgress';
// import Stack from '@mui/material/Stack';
// // import gsap from 'gsap;

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [fade, setFade] = useState(false);
  useEffect(() => {
    // Trigger fade-out after 5000 milliseconds (5 seconds)
    const fadeOutTimeout = setTimeout(() => {
      setFade(true);
    }, 5000);
    // Clear the timeout when the component unmounts or when fade completes
    return () => clearTimeout(fadeOutTimeout);
  }, []);

  
  return (
  <div className="loading-screen" style={{opacity: fade? 0:1,  transition: "opacity 2s ease-in-out"}}
  >
      <div className="loader-card">
        <img src="./loadingpic.jpeg" alt="Diya's Mac" />
        <h3>Diya's Mac</h3>
      <div className="progressbar-container">
            <div className="progressbar">
                <motion.div 
                className="bar"
                animate={{
                    width: `${progress}%`
                }}
                transition={{
                    duration: 2,
                    delay:0.3
                }}
                />
            </div>
            <p>Please wait while we're setting up....</p>
    </div>
    </div>
   </div>
  );
};
export default LoadingScreen;