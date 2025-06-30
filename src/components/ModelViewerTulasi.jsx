import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerTulasi = (props) => {
  const { scene } = useGLTF('/models/tulasi.glb');
  return <primitive object={scene} {...props} />;
};

export default ModelViewerTulasi;

useGLTF.preload('/models/tulasi.glb');
