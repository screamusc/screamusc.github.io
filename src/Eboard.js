import React from 'react';
import './App.css';

const Eboard = () => {
  const boardMembers = [
    { image: "/eboard_images/Jeremy.png", role: "President", name: "Jeremy Pogue" },
    { image: "/eboard_images/Olivia.png", role: "Secretary", name: "Olivia Owyang" },
    { image: "/eboard_images/Gabriela.png", role: "Director of Marketing", name: "Gabriela Gutzmer" },
    { image: "/eboard_images/Jennifer.png", role: "Director of Events", name: "Jennifer Hong" },
    { image: "/eboard_images/Jehimi.png", role: "Director of Finance", name: "Jehimi Zuñiga-Umaña" },
    { image: "/eboard_images/Varun.png", role: "Director of Outreach", name: "Varun Punater" }
  ];

  return (
    <div className="eboard">
      <div className="eboard-grid">
        {boardMembers.map((member, index) => (
          <div key={index} className="eboard-member">
            <img src={process.env.PUBLIC_URL + member.image} className="eboard-img" alt={member.name} />
            <br/>
            <h5><strong>{member.name}</strong></h5>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eboard;