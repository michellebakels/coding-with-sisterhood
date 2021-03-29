import React from 'react';
import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div>
      <header >
        <div className="home-header">
        <h1 className="h1-header">Beth Wagmeister</h1>
        <h2 className="left-header">Advocacy for the Deaf and Hard of Hearing</h2>
        </div>
        <p className="p-header">TWG, llc</p>
      </header>
      <div className="container-pics">
      <ImageSlider />
      </div>
      <footer className="home-footer">
        <h2 className="title-footer">Contact Wag Group:</h2>
        <p>
          Email: wagmeister.beth@gmail.com
          <br/>
          Phone: 561-410-8840
        </p>
        <div className="link-group">
          <a
            href="https://www.linkedin.com/in/bethwagmeister/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="links"
              src="assets/linkedin.png"
              alt="Linkedin Logo"
            />
          </a>
          <a
            href="https://www.instagram.com/bethwagmeister/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="links"
              src="assets/instagram.png"
              alt="Instagram Logo"
            />
          </a>
          <a
            href="https://twitter.com/BethWagmeister"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="links"
              src="assets/twitter.png"
              alt="Twitter Logo"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
