import React from 'react';
import EssentialTools from './EssentialTools'; 
import Services from './Services'
import About from './About';
import Contact from './Contact'
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <>
 <div className="hero">
      {/* Left Content */}
      <div className="hero-content">
        <h1>Hello I'm <span className="name">Yashu Vardhini Sangam</span></h1>

        <h3>
          a &nbsp;
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            <Typewriter
              words={['frontend developer', 'content creator', 'UI/UX designer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>

        <p>
          "I specialize in crafting modern and responsive web applications <br />
          that deliver seamless user experiences."
        </p>

        <div className="buttons">
          <button className="btn contact">Contact with Me</button>
          <button className="btn resume">Resume</button>
        </div>
      </div>

      {/* Right Image with SVG and Socials */}
      <div className="image-section">
        <div className="social-icon">
          <a href="https://github.com" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>


         <img src="/yasuuu.jpg" alt="Profile" className="profile-pic" />

      </div>
    </div>
      {/* Add Essential Tools section below */}
      <About/>
      <EssentialTools />
      <Services/>
      <Contact/>
    </>
  );
}

export default Hero;
