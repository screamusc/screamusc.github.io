import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './../App.css';

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
    // need to make the images responsive using bootstrap
    // want solid edges, with a slight vertial padding
    <Container>
      <Row className="justify-content-md-center mt-4">
        {galleryImages.map((image, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="my-2">
            <Image src={process.env.PUBLIC_URL + image.src} className="" alt={image.caption} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;