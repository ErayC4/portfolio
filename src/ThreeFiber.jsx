import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Cube = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

function DesignGlobe() {
  const gltf = useLoader(GLTFLoader, '/models/DesignGlobe.gltf')
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y += delta/3
  })
  return <primitive object={gltf.scene} scale={3} ref={ref} />
}

const ThreeFiber = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={1} />
      <DesignGlobe />
    </Canvas>
  );
};

export default ThreeFiber;
