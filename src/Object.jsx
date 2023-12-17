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
        minDistance={6}
        maxDistance={15}
        minAzimuthAngle={-Math.PI / 4}  // Limit to 45 degrees to the left
        maxAzimuthAngle={Math.PI / 4} 
        minPolarAngle={0}  // Limit rotation to horizontal plane (no rotation downwards)
        maxPolarAngle={Math.PI/2} 
      />
       <group>
       {/* <primitive object={bg.scene} ref={group} scale={[0.8, 0.8, 0.8]} position={[0,-2,-0.12]} rotation={[0, -Math.PI / 2, 0]} /> */}
       <primitive object={fullscene.scene} ref={group} position={[0,-2,-0.16]} rotation={[0,-Math.PI/4.09,0]}/>
       <Html wrapperClass="gltf" position={[0.21,1.13,0.001]} transform distanceFactor={2.5} rotation={[-0.013,Math.PI/4,0]} >
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

