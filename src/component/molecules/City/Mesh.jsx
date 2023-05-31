import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from "react";
import City from ".";
import { TextureLoader } from "three";


function MeshCity() {
    const controlsRef = useRef()
    const gltf = useLoader( GLTFLoader, '/modelo/scene.gltf' )

    return (
        <div>
            <Canvas style={{ width: '100%', height: '100vh', position: 'fixed' }} >
                <PerspectiveCamera makeDefault fov={60} />
                <OrbitControls ref={controlsRef} />
                <pointLight position={[-111100, -12222, 121]} />
                <City />
            </Canvas>
        </div>
    );
}

export default MeshCity;