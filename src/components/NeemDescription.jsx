import React from "react";
import "./PlantDescription.css";

const NeemDescription = () => {
  return (
    <div className="plant-description">
      <h1 className="plant-title">Neem (Azadirachta indica)</h1>

      <p className="plant-text">
        Neem is a fast-growing tree native to the Indian subcontinent. It has been widely used in Ayurveda for its medicinal properties and is also known as the "Indian lilac."
      </p>

      {/* Appearance Section */}
      <ul className="plant-list">
        <li className="plant-section-title">Appearance</li>
      </ul>
      <ol className="plant-description-list">
        <li className="plant-list"><strong>Leaves:</strong> Bright green, serrated, and bitter in taste.</li>
        <li className="plant-list"><strong>Flowers:</strong> Small, white, fragrant flowers blooming in clusters.</li>
        <li className="plant-list"><strong>Fruits:</strong> Olive-shaped green fruits that turn yellow upon ripening.</li>
      </ol>

      {/* Origin & Habitat Section */}
      <ul className="plant-list">
        <li className="plant-section-title">Origin & Habitat</li>
      </ul>
      <ol className="plant-description-list">
        <li className="plant-list"><strong>Native Range:</strong> Indigenous to India, Myanmar, and parts of Southeast Asia.</li>
        <li className="plant-list"><strong>Cultivation:</strong> Grows in tropical and semi-tropical regions worldwide.</li>
      </ol>

      {/* Uses Section */}
      <ul className="plant-list">
        <li className="plant-section-title">Uses</li>
      </ul>
      <ol className="plant-description-list">
        <li className="plant-list"><strong>Medicinal Uses:</strong> Neem is used in traditional medicine for its antibacterial, antifungal, and anti-inflammatory properties. It is used to treat skin conditions, infections, and as a detoxifying agent.</li>
        <li className="plant-list"><strong>Skin Care:</strong> Neem is widely used in skincare products for its antibacterial and anti-inflammatory properties. It is used to treat acne, eczema, and other skin conditions. Neem oil and neem extracts are often included in soaps, creams, and lotions.</li>
        <li className="plant-list"><strong>Oral Health:</strong> Neem twigs are used as traditional toothbrushes to promote oral hygiene. It is also used in toothpaste for its antimicrobial properties, helping to prevent gum disease, cavities, and bad breath.</li>
        <li className="plant-list"><strong>Insect Repellent:</strong> Neem oil is used as a natural insect repellent and pesticide. It is effective in repelling mosquitoes, flies, and other insects and is also used in agriculture to protect crops.</li>
        <li className="plant-list"><strong>Hair Care:</strong> Neem oil is often used in hair care products to treat dandruff, scalp infections, and to promote healthy hair growth. It also helps reduce hair loss and prevents scalp dryness.</li>
        <li className="plant-list"><strong>Detoxification:</strong> Neem is known for its detoxifying properties. It helps cleanse the body of toxins and supports liver health. Neem leaves are often used to make detoxifying teas.</li>
      </ol>
    </div>
  );
};

export default NeemDescription;
