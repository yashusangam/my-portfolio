import React from 'react';

const EssentialTools = () => {
  return (
    <div className="tools-section">
      <h2>Essential Tools I use</h2>
      <p>
        Discover the powerful tools and technologies I use to create
        exceptional, high-performing websites & applications.
      </p>

      {/* Top row: 3 tools */}
      <div className="tools-row">

        <div className="tool-card">
          <img src="/icons/html.png" alt="HTML" />
          <div>
            <h4>HTML</h4>
            <span>User Interface</span>
          </div>
        </div>

        <div className="tool-card">
          <img src="/icons/css.png" alt="CSS" />
          <div>
            <h4>CSS</h4>
            <span>User Interface</span>
          </div>
        </div>

        <div className="tool-card">
          <img src="/icons/js.png" alt="JavaScript" />
          <div>
            <h4>JavaScript</h4>
            <span>Interaction</span>
          </div>
        </div>

      </div>

      {/* Bottom row: 2 tools */}
      <div className="tools-row center-row">
        <div className="tool-card">
          <img src="/icons/react.png" alt="React" />
          <div>
            <h4>React</h4>
            <span>Framework</span>
          </div>
        </div>
        <div className="tool-card">
          <img src="/icons/tailwindcss.png" alt="TailwindCSS" />
          <div>
            <h4>TailwindCSS</h4>
            <span>User Interface</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialTools;
