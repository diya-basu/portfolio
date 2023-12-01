
import React, { useState, useRef, useEffect , Suspense} from "react"
import './index.css'
import {Canvas} from "@react-three/fiber"
import {Shadow, Html, CameraControls,Loader} from "@react-three/drei"
import Object from "./Object"


export default function Objects() {
   const cameraControlRef = useRef();
   const handleButtonClick = () => {
      // Replace the URL with the desired link
      window.location.href = "https://drive.google.com/file/d/1LViNS_p6i3R7LzjpsyITiqIBI8Y17R28/view?usp=sharing";
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
          <Object />
         </Canvas>
      <div className="buttons" style={{  position: 'absolute',
         top: '20px',
         left: '20px',
         zIndex: 999, }}>
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
						cameraControlRef.current?.setPosition(0,1,5.2,true);
					}}
				>
					Explore More
				</button>
            <button
          type="button"
          onClick={handleButtonClick}
        >
          View Resume
        </button>
      </div>
    </>
  );
}