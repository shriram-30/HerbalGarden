import React, { useEffect, useRef } from "react";
import "./PlantDescription.css"; // Import the CSS file

const AloeVeraDescription = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, []);

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="plant-description" ref={containerRef} style={{ maxHeight: "500px", overflowY: "auto" }}>
      {/* Glowing & Animated Title */}
      <h1 className="plant-title">Aloe Vera</h1>

      <p className="plant-text">
        Aloe Vera is a succulent plant species of the genus Aloe. It is known for its thick, fleshy leaves that contain a clear gel. Here’s a detailed look at Aloe Vera:
      </p>

      <ul className="plant-list">
        {/* Section Header */}
        <li className="plant-section-title">Appearance</li>
        <p className="plant-text">
          <ol>
            <li className="plant-list"><strong>Leaves:</strong> Thick, fleshy, green to grey-green in color, with some varieties having white flecks on their upper and lower leaf surfaces.</li>
            <li className="plant-list"><strong>Shape:</strong> Each leaf is serrated with small, white teeth along the edges.</li>
            <li className="plant-list"><strong>Flowers:</strong> Aloe Vera can produce a flower spike with tubular yellow flowers.</li>
          </ol>
        </p>

        <li className="plant-section-title">Origin & Habitat</li>
        <p className="plant-text">
          <ol>
            <li className="plant-list"><strong>Native Range:</strong> It is native to the Arabian Peninsula.</li>
            <li className="plant-list"><strong>Cultivation:</strong> It is cultivated worldwide, primarily in tropical, semi-tropical, and arid climates. Aloe Vera is often found in gardens as an ornamental plant.</li>
          </ol>
        </p>
      </ul>
      
    </div>
  );
};

export default AloeVeraDescription;
