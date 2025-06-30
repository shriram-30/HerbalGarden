import React from "react";
import { useParams, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import ModelViewer from "./ModelViewer";
import ModelViewerTulasi from "./ModelViewerTulasi";
import ModelViewerNeem from "./ModelViewerNeem";
import ModelViewerAshwagandha from "./ModelViewerAshwagandha";
import ModelViewerMarjoram from "./ModelViewerMarjoram";

function ModelPage({ plantModels }) {
  const { modelName } = useParams();
  const modelData = plantModels[modelName];

  if (!modelData) {
    return (
      <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
        <h2>❌ Model Not Found</h2>
        <Link to="/" style={{ color: "lightgreen" }}>🔙 Go Back</Link>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black", color: "white", display: "flex" }}>
      {/* 3D Model Section */}
      <div style={{ flex: 1, position: "relative", textAlign: "center" }}>
        <h3 style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "20px"
        }}>
          3D Model of {modelData.name} - Click to Zoom and Rotate It
        </h3>

        <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
          <pointLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, -5, -5]} intensity={2} />
          <pointLight position={[0, 5, -5]} intensity={2} />
          <OrbitControls enableZoom enableRotate />

          {modelName === "tulasi" ? (
            <ModelViewerTulasi scale={2} />
          ) : modelName === "neem" ? (
            <ModelViewerNeem scale={2} />
          ) : modelName === "ashwagandha" ? (
            <ModelViewerAshwagandha scale={2} />
          ) : modelName === "marjoram" ? (
            <ModelViewerMarjoram scale={2} />
          ) : (
            <ModelViewer scale={2} />
          )}
        </Canvas>
      </div>

      {/* Model Description Section */}
      <div style={{ flex: 1, padding: "20px" }}>
        <p>{modelData.description}</p>
        <br />
        <Link to="/" style={{ color: "lightgreen" }}>🔙 Go Back</Link>
      </div>

      <Loader />
    </div>
  );
}

export default ModelPage;
