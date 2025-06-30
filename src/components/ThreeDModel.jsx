import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/model/scene.gltf');

  return <primitive object={gltf.scene} scale={2} />;
};

const ThreeDModel = () => {
  return (
    <Canvas
      camera={{ position: [5, 2, 5], fov: 50 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<div>Loading...</div>}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
