import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerAshwagandha = (props) => {
  const { scene } = useGLTF('/models/ashwagandha.glb');
  return <primitive object={scene} {...props} />;
};

export default ModelViewerAshwagandha;

useGLTF.preload('/models/ashwagandha.glb');
