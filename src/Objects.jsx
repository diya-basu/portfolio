
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

  
  const [start, setStart] = useState(false);
  const {progress}=useProgress();
  const [enterClicked, setEnterClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const bgaudio=new Audio('./catbgaudio.mp3');
  const transitaudio=new Audio('./whoosh.mp3');


 

  const [loading, setLoading] = useState(true)
  const isMobile=window.innerWidth<768;

  useEffect(() => {
    setTimeout(() => {setLoading(false);
    setFadeIn(true);
  },4000);
  }, [])
  const show = {
    opacity: 1,
    display: "block"
  };
  
  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };

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
        camera={{ fov: isMobile?90:75,  position: isMobile?[15,30,80]:[7, 6, 13]}}
      >
        <fog attach="fog" args={["#95a6e8",20,30]}/>
        <CameraControls ref={cameraControlRef} enableTransition enableZoom={false}/>
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
                    <p>•Creative Developer<br></br>•Content Writer<br></br>•AI-ML Programmer</p>
                    </div>
                  <div className="buttons" style={{position: 'absolute',
                      top:isMobile?'-450px':'-415px',
                      left:isMobile?'-190px':'-700px',
                    }}>
                    <button
                      type="button"
                      onClick={() => {
                        isMobile? cameraControlRef.current?.setPosition(-3,30,80,true):
                        cameraControlRef.current?.setPosition(7,6,13,true);
                        transitaudio.play();
                      }}
                    >
                       View Scene
                    </button>
                    <button
                      title="Click to enable music and explore"
                      type="button"
                      onClick={() => {
                        isMobile?cameraControlRef.current?.setPosition(2,0,-9,true):
                        cameraControlRef.current?.setPosition(1,1.5,-7,true);
                        transitaudio.play();
                        bgaudio.play();
                        bgaudio.loop=true;
                        bgaudio.volume=0.1;
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