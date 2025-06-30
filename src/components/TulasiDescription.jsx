import React from "react";
import "./PlantDescription.css"; // Import the CSS file

const TulasiDescription = () => {
  return (
    <div className="plant-description">
      {/* Title with Fade-in Effect */}
      <h1 className="plant-title">Tulasi (Holy Basil)</h1>

      {/* Description with Fade-in Effect */}
      <p className="plant-text">
        Tulasi (<i>Ocimum sanctum</i>), also known as Holy Basil, is a sacred plant in India and is widely used in Ayurvedic medicine for its medicinal properties. It is revered for its spiritual significance and health benefits.
      </p>

      <ul className="plant-list">
        {/* Section Header */}
        <li className="plant-section-title">Appearance</li>
        <p className="plant-text">
          <ol>
            <li className="plant-list"><strong>Leaves:</strong> Small, oval-shaped, green or purple leaves with a distinct aromatic fragrance.</li>
            <li className="plant-list"><strong>Flowers:</strong> Produces tiny, purple or white flowers in spikes.</li>
            <li className="plant-list"><strong>Aroma:</strong> Has a strong, spicy, and slightly sweet scent.</li>
          </ol>
        </p>

        <li className="plant-section-title">Origin & Habitat</li>
        <p className="plant-text">
          <ol>
            <li className="plant-list"><strong>Native Range:</strong> Originally from India and Southeast Asia.</li>
            <li className="plant-list"><strong>Cultivation:</strong> Grows in warm, tropical climates and is commonly found in home gardens and temples.</li>
          </ol>
        </p>
      </ul>
    </div>
  );
};

export default TulasiDescription;
