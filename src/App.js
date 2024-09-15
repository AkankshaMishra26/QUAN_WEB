import React from 'react';
import './App.css'; // Importing the styles

function App() {
  return (
    <div className="app">
      <header>
        {/* Navigation section */}
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        
        {/* Logo section */}
        <div className="logo">
          <div className="logo-inner">
            <img src="./QUANTUMMLOGO.jpg" alt="SRM Quantum Computing Club Logo" />
          </div>
        </div>
      </header>

      <section className="about">
        <h1>SRMIST QUANTUM COMPUTING CLUB</h1>

        {/* About Us Section */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac hendrerit justo. 
            In vestibulum leo id lectus consequat, vitae tempor enim volutpat. Vestibulum 
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Vivamus quis ornare lacus, nec feugiat odio. Nulla facilisi. Quisque gravida, 
            libero in vehicula fermentum, felis felis bibendum leo, ac dictum odio mi sit 
            amet enim. Integer nec lectus vel lorem fermentum fermentum.
          </p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="hex vision">
          <h2>VISION</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="hex mission">
          <h2>MISSION</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
