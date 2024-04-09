import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function DesignGlobe() {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y += delta/2
  })

  const loader = new GLTFLoader();
  loader.load('/models/DesignGlobe1.gltf', (gltf) => {
    ref.current.add(gltf.scene);
  });

  return <group ref={ref} scale={[3, 3, 3]} />
}

const ThreeFiber = () => {
  return (
    <Canvas camera={{rotation: [0, 0, -25 * Math.PI / 180] }}>
      <ambientLight position={[0, 0, 2]} intensity={5} />
      <DesignGlobe />

    </Canvas>
  );
};

export default ThreeFiber;
