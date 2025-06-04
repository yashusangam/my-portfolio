import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <div className="content">
            <h3>Degree Name</h3>
            <p>University/College - Year</p>
            <p>Relevant coursework or achievements...</p>
          </div>
        );
      case 'Experience':
        return (
          <div className="content">
            <h3>Job Title</h3>
            <p>Company Name - Duration</p>
            <p>Responsibilities and achievements..</p>
          </div>
        );
      case 'Skills':
        return (
          <div className="content">
            <h3>UI/UX</h3>
            <p>Designing Web/App interfaces</p>
            <h3>Web Development</h3>
            <p>Building web applications</p>
            <h3>App Development</h3>
            <p>Developing Android/iOS apps</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container" id='about'>
      <div className="left">
        <img src="/yasu.jpeg" alt="Profile" className="profile-image" />
      </div>
      <div className="right">
        <h1>About Me</h1>
        <p>
I’m a passionate frontend developer skilled in HTML, CSS, JavaScript, and React, currently working at Lomaa IT Solution Company. I create responsive, user-friendly applications while continuously learning new tools to stay ahead. Beyond coding, I enjoy exploring tech trends and sharing my insights through content creation. </p>
        <div className="tabs">
          <button className={activeTab === 'Education' ? 'active' : ''} onClick={() => setActiveTab('Education')}>Education</button>
          <button className={activeTab === 'Experience' ? 'active' : ''} onClick={() => setActiveTab('Experience')}>Experience</button>
          <button className={activeTab === 'Skills' ? 'active' : ''} onClick={() => setActiveTab('Skills')}>Skills</button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default About;