import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerNeem = (props) => {
  const { scene } = useGLTF('/models/neemmodel.glb');
  return <primitive object={scene} {...props} />;
};

export default ModelViewerNeem;

useGLTF.preload('/models/neemmodel.glb');
