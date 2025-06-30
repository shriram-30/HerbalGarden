import React from "react";
import "./PlantDescription.css"; // Import the CSS file

const MarjoramDescription = () => {
  return (
    <div className="plant-description">
      {/* Title with Fade-in Effect */}
      <h1 className="plant-title">Marjoram</h1>

      {/* Description with Fade-in Effect */}
      <p className="plant-text">
        Marjoram (<i>Origanum majorana</i>) is a perennial herb in the mint family, known for its aromatic leaves and medicinal properties. It is commonly used in culinary dishes and herbal remedies. Here’s a detailed look at Marjoram:
      </p>

      <ul className="plant-list">
        {/* Section Header */}
        <li className="plant-section-title">Appearance</li>
      </ul>
      <ol className="plant-description-list">
        <li className="plant-list"><strong>Leaves:</strong> Small, oval-shaped, green leaves with a slightly fuzzy texture.</li>
        <li className="plant-list"><strong>Flowers:</strong> Produces tiny, white to pink flowers in clusters.</li>
        <li className="plant-list"><strong>Aroma:</strong> Has a sweet, citrusy, and slightly spicy scent.</li>
      </ol>

      <ul className="plant-list">
        <li className="plant-section-title">Origin & Habitat</li>
      </ul>
      <ol className="plant-description-list">
        <li className="plant-list"><strong>Native Range:</strong> Originally from the Mediterranean and Western Asia.</li>
        <li className="plant-list"><strong>Cultivation:</strong> Grows well in warm climates, commonly cultivated in herb gardens worldwide.</li>
      </ol>

      {/* New section on Marjoram Uses */}
      <ul className="plant-list">
        <li className="plant-section-title">Uses</li>
      </ul>
      <ol className="plant-description-list">
        <li className="plant-list"><strong>Culinary Uses:</strong> Marjoram is commonly used in Mediterranean cuisine. It pairs well with meats, stews, salads, and vegetables. It is often added to soups, pasta dishes, and sauces for its mild, sweet, and slightly peppery flavor.</li>
        <li className="plant-list"><strong>Herbal Remedies:</strong> Marjoram has been used in traditional medicine for its anti-inflammatory, antimicrobial, and antioxidant properties. It is sometimes used as a remedy for digestive issues, coughs, and headaches.</li>
        <li className="plant-list"><strong>Essential Oil:</strong> Marjoram essential oil is popular in aromatherapy for its calming and soothing effects. It is often used to relieve stress, anxiety, and muscle pain when applied topically or diffused in the air.</li>
        <li className="plant-list"><strong>Digestive Aid:</strong> It is often used to help with indigestion, bloating, and gas. Marjoram tea, made from its leaves, can be consumed to ease stomach discomfort.</li>
        <li className="plant-list"><strong>Skin Care:</strong> Marjoram oil has been used for its anti-inflammatory and antibacterial properties, helping with acne, eczema, and other skin conditions. It can be diluted and applied to affected areas to reduce irritation.</li>
      </ol>
    </div>
  );
};

export default MarjoramDescription;
