import {OrbitControls,useGLTF,Html} from "@react-three/drei"
import {useLoader} from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRef } from "react"



export default function Object(){
    useGLTF.preload('./scene.gltf')

    const fullscene=useLoader(GLTFLoader,'./scene.gltf')
    const group = useRef()
    return<>
        <OrbitControls
        enableZoom={false}

        minDistance={4}
        maxDistance={13}
        minAzimuthAngle={-Math.PI / 26}  // Limit to 45 degrees to the left
        maxAzimuthAngle={Math.PI / 8} 
        minPolarAngle={0}  // Limit rotation to horizontal plane (no rotation downwards)
        maxPolarAngle={Math.PI/2} 
        position0={[-3,5,10]}
      />
       <group>
       {/* <primitive object={bg.scene} ref={group} scale={[0.8, 0.8, 0.8]} position={[0,-2,-0.12]} rotation={[0, -Math.PI / 2, 0]} /> */}
       <primitive object={fullscene.scene} ref={group} scale={[0.8, 0.8, 0.8]} position={[0,-2,-0.16]} rotation={[0, -Math.PI / 2, 0]}/>
       <Html wrapperClass="gltf" position={[0.024,0.51,-0]} transform distanceFactor={2.1} rotation={[-0.0098,-0.0001,-0.009]} >
         <iframe title="embed" src="./mac/index.html"/>
       </Html>
      {/* <directionalLight position={[1,3,7]} intensity={6.5} color="#9297F3" castShadow shadow-mapSize-width={1024}
       shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 10, -10]} castShadow intensity={75} color="lightpink"/>
       <ambientLight intensity={2.5}/>
       <ContactShadows rotation-x={Math.PI / 2} position={[0,-2.045, -0.16]} blur={0.8} opacity={0.49} scale={[15,15]} frames={1}/> */}
       </group>
    </>
}

