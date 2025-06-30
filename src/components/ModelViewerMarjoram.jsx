import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerMarjoram = (props) => {
  const { scene } = useGLTF('/models/marjoram.glb');
  return <primitive object={scene} {...props} />;
};

export default ModelViewerMarjoram;

useGLTF.preload('/models/marjoram.glb');
