import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModelPage from "./components/ModelPage";
import TulasiDescription from "./components/TulasiDescription";
import Description from "./components/Description";
import NeemDescription from "./components/NeemDescription";
import AshwagandhaDescription from "./components/AshwagandhaDescription.jsx";
import MarjoramDescription from "./components/MarjoramDescription";

// Image imports for Vite (should be inside 'src/assets' ideally)
import TulasiImage from "./assets/tulasi.jpg";
import AloeveraImage from "./assets/aloevera.jpg";
import NeemImage from "./assets/neem.jpeg";
import AshwagandhaImage from "./assets/ashwagandha.jpg";
import MarjoramImage from "./assets/marjoram.jpg";
import HerbalGarden from "./assets/HerbalGarden1.jpg";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const welcomeText = "Welcome to the Virtual Herbal Garden";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(welcomeText.substring(0, index + 1));
      index++;
      if (index === welcomeText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const plantModels = {
    tulasi: { name: "Tulasi", description: <TulasiDescription />, image: TulasiImage },
    aloevera: { name: "Aloevera", description: <Description />, image: AloeveraImage },
    neem: { name: "Neem", description: <NeemDescription />, image: NeemImage },
    ashwagandha: { name: "Ashwagandha", description: <AshwagandhaDescription />, image: AshwagandhaImage },
    marjoram: { name: "Marjoram", description: <MarjoramDescription />, image: MarjoramImage },
  };

  const handleSearch = () => {
    const lowerCaseSearch = searchTerm.toLowerCase().trim();
    const matchedModels = Object.keys(plantModels).filter((key) => key.includes(lowerCaseSearch));
    setFilteredModels(matchedModels);
    setErrorMessage(matchedModels.length > 0 ? "" : "❌ No matching plant found.");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${HerbalGarden})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                padding: "20px",
                backdropFilter: "blur(5px)",
                position: "relative",
              }}
            >
              {/* Background Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.6)",
                  zIndex: -1,
                }}
              ></div>

              {/* Animated Heading */}
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  textShadow: "0px 0px 15px rgba(0,255,0,0.8)",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  animation: "glow 1.5s infinite alternate, bounce 2s infinite alternate",
                }}
              >
                {displayedText}
              </h1>

              {/* Search Bar */}
              <div style={{ margin: "20px 0" }}>
                <input
                  type="text"
                  placeholder="Search for a plant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    border: "1px solid white",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "black",
                  }}
                />
                <button
                  onClick={handleSearch}
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "lightgreen",
                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "0px 0px 10px rgba(0,255,0,0.8)",
                    transition: "0.3s",
                  }}
                >
                  Search
                </button>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p style={{ color: "red", fontSize: "18px", fontWeight: "bold", padding: "5px", borderRadius: "5px" }}>
                  {errorMessage}
                </p>
              )}

              {/* Plant Models Grid */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                {(filteredModels.length > 0 ? filteredModels : Object.keys(plantModels)).map((model) => (
                  <div key={model} style={{ textAlign: "center" }}>
                    <Link to={`/model/${model}`} style={{ textDecoration: "none", color: "white" }}>
                      <img
                        src={plantModels[model].image}
                        alt={plantModels[model].name}
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                          boxShadow: "0px 0px 10px rgba(255,255,255,0.5)",
                          animation: "float 2s infinite alternate",
                        }}
                      />
                      <p
                        style={{
                          color: "lightgreen",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          textShadow: "0px 0px 15px rgba(0,255,0,0.8)",
                          marginTop: "10px",
                        }}
                      >
                        {plantModels[model].name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Route path="/model/:modelName" element={<ModelPage plantModels={plantModels} />} />
      </Routes>
    </Router>
  );
}

export default App;
