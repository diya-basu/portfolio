
import React, { useState, useRef, useEffect , Suspense} from "react"
import './index.css'
import {Canvas} from "@react-three/fiber"
import {Shadow, Html, CameraControls,useProgress,Loader} from "@react-three/drei"
import Object from "./Object"



export default function Objects() {
   const cameraControlRef = useRef();
   const [isLoading, setIsLoading] = useState(true);

  //  const handleButtonClick = () => {
  //     // Replace the URL with the desired link
  //     window.location.href = "https://drive.google.com/file/d/1LViNS_p6i3R7LzjpsyITiqIBI8Y17R28/view?usp=sharing";
  //   };
  //   useEffect(() => {
  //     // Simulate loading for 2 seconds
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }, []);
  
  const [start, setStart] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const onStarted = () => {
    setStart(true);
    setIsVisible(true);
  };
  const {progress}=useProgress();
  const [enterClicked, setEnterClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // ... other code

  const handleButtonClick = () => {
    setEnterClicked(true);
    setTimeout(() => {
      setFadeIn(true);
    }, 100); // Adding a small delay before fading in
  };

  return (
    <>
    
      <Canvas 
        shadows
        camera={{ fov: 75, position: [-3, 5, 10]}}
      >
        <CameraControls ref={cameraControlRef} enableTransition/>
        <Shadow
          scale={2}
          bias={-0.001}
          width={1024}
          height={1024}
        />
         <Suspense fallback={null}>          
                  <Object /> 
                  <Html>
                  <div className="header" style={{  position: 'absolute',
                    top: '-375px',
                    left: '-725px',
                    zIndex: 999, 
                    }}>
                      <h1>Diya Basu</h1>
                    <p>Creative Developer|Content Writer</p>
                    </div>
                  <div className="buttons" style={{  position: 'absolute',
                    top: '-250px',
                    left: '-725px',
                    zIndex: 999, 
                    opacity: setFadeIn ? 1:0,
                    transition: "opacity 0.5s ease-in",
                    }}>
                    <button
                      type="button"
                      onClick={() => {
                        cameraControlRef.current?.setPosition(-3,5,10,true);
                      }}
                    >
                      View Scene
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        cameraControlRef.current?.setPosition(0,0.5,3.8,true);
                      }}
                    >
                      Explore More
                    </button>
                  </div>
                  </Html>             
      </Suspense>
      </Canvas>
      <Loader
      containerStyles={{
        background: "linear-gradient(rgba(252, 180, 217, 0.8),rgba(133, 193, 233))",
      }}
      >   
      </Loader>
      {progress === 100}
      </>        
  );
}