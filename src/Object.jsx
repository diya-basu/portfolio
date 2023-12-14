import {OrbitControls,useGLTF,Html,ContactShadows,PositionalAudio} from "@react-three/drei"
import {useLoader} from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useEffect, useRef } from "react"
import { Group,PerspectiveCamera, SpotLight ,DirectionalLight,RectAreaLight,PointLight} from "three"


export default function Object(){
  useGLTF.preload('./scene.gltf')
  useGLTF.preload('./bg.gltf')

    // When loading the GLTF model
    const gltf = useLoader(GLTFLoader, './scene.gltf')
    const bg=useLoader(GLTFLoader,'./bg.gltf')
    const group = useRef()
    

  

    useEffect(() => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow=true;
            child.receiveShadow=true;
          }
        });
      }, [gltf.scene]);

      useEffect(() => {
        bg.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow=true;
            child.receiveShadow=true;
          }
        });
      }, [bg.scene]);


    

    return<>
        <OrbitControls
        enableZoom={false}
        minDistance={4}
        maxDistance={15}
        minAzimuthAngle={-Math.PI / 26}  // Limit to 45 degrees to the left
        maxAzimuthAngle={Math.PI / 8} 
        minPolarAngle={0}  // Limit rotation to horizontal plane (no rotation downwards)
        maxPolarAngle={Math.PI/2} 
        position0={[-3,5,10]}
      />
       <group>
       {/* <PositionalAudio url="./catbgaudio.mp3" loop={true}/> */}
       <primitive object={bg.scene} ref={group} scale={[0.8, 0.8, 0.8]} position={[0,-2,-0.12]} rotation={[0, -Math.PI / 2, 0]} />
       <primitive object={gltf.scene} ref={group} scale={[0.8, 0.8, 0.8]} position={[0,-2,-0.16]} rotation={[0, -Math.PI / 2, 0]}/>
       <Html wrapperClass="gltf" position={[0.025,0.51,0]} transform distanceFactor={2.1} rotation={[-0.051,-0.0045,0.0085]} >
         <iframe title="embed" src="./mac/index.html"/>
       </Html>
      <directionalLight position={[1,3,7]} intensity={4.5} color="#9297F3" castShadow shadow-mapSize-width={1024}
       shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 10, -3]} castShadow intensity={75} color="lightblue"/>
       <ambientLight intensity={2}/>
       <ContactShadows rotation-x={Math.PI / 2} position={[0,-2.045, -0.16]} blur={0.8} opacity={0.49} scale={[15,15]} frames={1}/>
       </group>
    </>
}

