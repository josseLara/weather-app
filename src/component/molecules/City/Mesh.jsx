import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import City from ".";


function MeshCity() {
    const controlsRef = useRef()

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