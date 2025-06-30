import React, { useEffect, useRef } from "react";
import "./PlantDescription.css"; // Import the CSS file

const AshwagandhaDescription = () => {
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
      <h1 className="plant-title">Ashwagandha</h1>

      <p className="plant-text">
        Ashwagandha (<i>Withania somnifera</i>) is a small woody shrub known for its medicinal properties. It has been used in Ayurvedic medicine for centuries for its adaptogenic and rejuvenating benefits. Here’s a detailed look at Ashwagandha:
      </p>

      <ul className="plant-list">
        {/* Section Header */}
        <li className="plant-section-title">Appearance</li>
        <ul>
          <li className="plant-list">Leaves: Ashwagandha has small, elliptical, green leaves with a slightly velvety texture.</li>
          <li className="plant-list">Flowers: The plant produces small, greenish-yellow flowers that later develop into red-orange berries.</li>
          <li className="plant-list">Roots: The roots are thick, tuberous, and are the most commonly used part in traditional medicine.</li>
        </ul>

        <li className="plant-section-title">Origin & Habitat</li>
        <ul>
          <li className="plant-list">Native Range: Ashwagandha is native to India, the Middle East, and parts of Africa.</li>
          <li className="plant-list">Cultivation: It thrives in dry regions and is cultivated worldwide for medicinal purposes.</li>
        </ul>

        <li className="plant-section-title">Uses</li>
        <ul>
          <li className="plant-list">Stress Reduction: Ashwagandha is known for its adaptogenic properties, helping the body manage stress.</li>
          <li className="plant-list">Improves Sleep: It is commonly used to promote relaxation and improve sleep quality.</li>
          <li className="plant-list">Boosts Energy & Stamina: Used to enhance physical performance and reduce fatigue.</li>
          <li className="plant-list">Supports Cognitive Function: May improve memory, focus, and mental clarity.</li>
          <li className="plant-list">Enhances Immune System: Helps strengthen the immune response and overall vitality.</li>
        </ul>

        {/* New section on Ashwagandha's uses */}
        <li className="plant-section-title">Further Uses of Ashwagandha</li>
        <ul>
          <li className="plant-list">
            <strong>Supplement Form:</strong> Ashwagandha is commonly found in the form of capsules, powders, and tinctures. Many people use it as a daily supplement for stress management and energy enhancement.
          </li>
          <li className="plant-list">
            <strong>Ayurvedic Medicine:</strong> In Ayurveda, Ashwagandha is considered a "rasayana" herb, which means it is used to promote longevity and rejuvenation. It is often included in formulas for overall wellness.
          </li>
          <li className="plant-list">
            <strong>Sports & Performance:</strong> Athletes use Ashwagandha for its purported benefits in boosting physical performance, muscle strength, and endurance.
          </li>
          <li className="plant-list">
            <strong>Anti-inflammatory & Antioxidant:</strong> Ashwagandha is also valued for its anti-inflammatory and antioxidant properties, which may help with conditions like arthritis or chronic inflammation.
          </li>
          <li className="plant-list">
            <strong>Skin Health:</strong> Some skincare products incorporate Ashwagandha for its potential to improve skin texture and reduce the effects of aging.
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default AshwagandhaDescription;
