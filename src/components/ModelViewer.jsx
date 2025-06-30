import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewer = (props) => {
  const { scene } = useGLTF('/models/model.glb');
  return <primitive object={scene} {...props} />;
};

export default ModelViewer;

useGLTF.preload('/models/model.glb');
