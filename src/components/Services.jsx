import React, { useState } from "react";
 
const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const moreContent = {
    Developer: "I build full-stack web applications using modern technologies and industry best practices. My expertise spans front-end development with HTML, CSS, JavaScript, and React, as well as back-end services using Node.js and Express. I design scalable architectures, integrate secure APIs, and ensure smooth data handling across platforms. With a focus on performance and maintainability, I deliver clean, efficient, and production-ready code.",
    Design: "I design engaging user interfaces with attention to detail, balance, and visual harmony. My workflow includes tools like Figma, Sketch, and Adobe XD to create high-fidelity mockups and prototypes. I prioritize consistency in typography, color schemes, and layout to reflect brand identity. Each design is crafted to enhance user experience while maintaining aesthetic appeal across devices.",
    "UI/UX": "I focus on user-centered designs that prioritize clarity, accessibility, and intuitive navigation. By understanding user behavior and journey flows, I create interfaces that feel natural and easy to use. I emphasize seamless interactions, responsive layouts, and mobile-first design principles. My goal is to ensure every user touchpoint is both functional and delightful.",
  };

  const handleLearnMore = (title) => {
    setActiveCard(title);
  };

  const closeModal = () => {
    setActiveCard(null);
  };

  return (
    <div className="services-section">
      <h1 className="title">
        My Awesome <span className="highlight">services</span>
      </h1>
      <p className="subtitle">
        "Crafting modern, responsive web applications that deliver seamless user experiences."
      </p>
      <button className="cv-button">Download CV</button>

      <div className="cards-wrapper">
        {[
          { title: "Developer", emoji: "😎", desc: "Html, Css, JavaScript, React, NodeJs, Express" },
          { title: "Design", emoji: "🤔", desc: "Crafting visually appealing designs with Figma, Sketch, and Adobe XD." },
          { title: "UI/UX", emoji: "😇", desc: "Building intuitive interfaces focused on usability and responsiveness." }
        ].map((card) => (
          <div key={card.title} className="card">
            <div className="emoji">{card.emoji}</div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
            <button className="learn-btn" onClick={() => handleLearnMore(card.title)}>
              LEARN MORE
            </button>
          </div>
        ))}
      </div>

      {activeCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeCard}</h2>
            <p>{moreContent[activeCard]}</p>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
