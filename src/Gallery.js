import React from 'react';
import './App.css';

const Gallery = () => {
  const galleryImages = [
    { src: "/gallery_images/group_x2.png", caption: "Trip to Six Flags Magic Mountain" },
    { src: "/gallery_images/design_competition.png", caption: "Roller Coaster Design Competition" },
    { src: "/gallery_images/group_scream.png", caption: "Scream @ Six Flags Magic Mountain" },
    { src: "/gallery_images/x2.png", caption: "X2 @ Six Flags Magic Mountain" },
    { src: "/gallery_images/group_knotts.png", caption: "Trip to Knott's Berry Farm" },
    { src: "/gallery_images/supreme_scream.png", caption: "Supreme Scream @ Knott's Berry Farm" },
    { src: "/gallery_images/swings.png", caption: "Swings @ Six Flags Magic Mountain" },
    { src: "/gallery_images/silver_bullet.png", caption: "Silver Bullet @ Knott's Berry Farm" },

  ];

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
              <img src={process.env.PUBLIC_URL + image.src} className="gallery-img" alt={image.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;