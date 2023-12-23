import React from 'react';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <img src={process.env.PUBLIC_URL + "background.png"} alt="Home img" className="home-img"/>
      <div className="home-section">
        {/* <img src={process.env.PUBLIC_URL + "background.png"} alt="Home img" className="home-logo"/> */}
        {/* <img src={process.env.PUBLIC_URL + "logo.png"} className="home-logo" alt="Home"/> */}
        <div className="home-info">
          <h1> Welcome! </h1>
          <br/>
          <h5> Scream USC is a community for roller coaster enthusiasts with a focus on amusement parks. </h5>
        </div>
      </div>
      <div className="home-section">
        <div className="home-info">
            <h5> Our events include: </h5>
            <ul>
              <li> Park trips!! (Six Flags, Knott’s, etc.) </li>
              <li> Trivia night </li>
              <li> YouTube watch party </li>
              <li> Roller Coasters for Dummies </li>
              <li> Roller coaster design competition </li>
              <li> Guest speakers </li>
              <li> …and more! </li>
            </ul>
          </div>
          <img src={process.env.PUBLIC_URL + "home_images/youtube.png"} className="home-event-img" alt="YouTube"/>
          <img src={process.env.PUBLIC_URL + "home_images/design.png"} className="home-event-img" alt="Design Competition"/>
          <img src={process.env.PUBLIC_URL + "home_images/trip.png"} className="home-event-img" alt="Park Trip"/>
      </div>
    </div>
  );
};

export default Home;