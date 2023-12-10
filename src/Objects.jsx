
import React, { useState, useRef, useEffect , Suspense} from "react"
import './index.css'
import {Canvas} from "@react-three/fiber"
import {Shadow, Html, CameraControls,useProgress,Loader} from "@react-three/drei"
import Object from "./Object"
import LoadingScreen from "./LoadingScreen"
// import { LoadingScreen } from "./LoadingScreen"


export default function Objects() {
   const cameraControlRef = useRef();
   const [isLoading, setIsLoading] = useState(true);
   const transitaudio=new Audio('./whoosh.mp3');

  
  const [start, setStart] = useState(false);
  const {progress}=useProgress();
  const [enterClicked, setEnterClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

 

  const [loading, setLoading] = useState(true);
  const isMobile=window.innerWidth<768;

  useEffect(() => {
    setTimeout(() => {setLoading(false);
    setFadeIn(true);
  },6000);
  }, [])
 
  const [isPlaying, setIsPlaying] = useState(false);
  const bgaudio = new Audio('./catbgaudio.mp3');
  

 


  return (
    <>
    {/* <Loader
        containerStyles={{
          // Customize loader container styles here
          background:
            "linear-gradient(rgba(252, 180, 217, 0.8), rgba(133, 193, 233))",
        }}
      ></Loader> */}
      {loading && <LoadingScreen />}
      
      <Canvas 
        shadows
        camera={{ fov: isMobile?90:75,  position: isMobile?[-1,7,15]:[-3, 5, 10]}}
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
                  <Html wrapperClass="header" >
                  <div style={{  position: 'absolute',
                     top:isMobile?'-400px':'-375px',
                     left:isMobile?'-180px':'-700px',}}>
                    <h1>Diya Basu</h1>
                    <p>•Creative Developer<br></br>•Content Writer<br></br>•AI-ML Programmer </p>
                    </div>
                    <div className="buttons" style={{position: 'absolute',
                      top:isMobile?'-435px':'-420px',
                      left:isMobile?'-190px':'-700px',
                    }}>
                    <button
                      type="button"
                      onClick={() => {
                        isMobile? cameraControlRef.current?.setPosition(-2,7,18,true):
                        cameraControlRef.current?.setPosition(-3,5,10,true);
                        transitaudio.play();
                      }}
                    >
                       Scene
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        isMobile?cameraControlRef.current?.setPosition(0,0,5.8,true):
                        cameraControlRef.current?.setPosition(0,0.5,3.8,true);
                        transitaudio.play();
                        bgaudio.play();
                        bgaudio.loop(true);
                      }}
                    >
                      Explore
                    </button>
                  </div>
                  </Html>           
      </Suspense>
      </Canvas>
      
      </>
  );
}