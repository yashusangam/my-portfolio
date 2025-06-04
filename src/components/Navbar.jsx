import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Yashu</div>

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        &#9776; {/* hamburger icon */}
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>

      <button className="connect-button">Connect</button>
    </nav>
  );
}
