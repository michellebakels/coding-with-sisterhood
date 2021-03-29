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
      <div id="image-slider-container" className="container-pics">
      <ImageSlider />
      </div>
      <section>
        <div id="testimony-card" className="card">
          <div id="card-container" className="card-container">
            <q>Beth was instrumental in guiding, and leading, the planning and execution of our franchise's first-ever Deaf Awareness Night. Her attention to detail, and incredible knowledge of ASL and the Deaf Community, resulted in a successful event that we are excited to continue as an annual highlight of our team's season.</q>
            <br/><br/><em>-Brad Seymour</em>
            <br/><em>President, Windy City Bulls, Chicago Bulls NBA G League Franchise</em>
          </div>
        </div>
        <div id="testimony-card" className="card">
          <div id="card-container" className="card-container">
            <br/><br/><em>-Todd Albert</em>
            <br/><em>Founder and Lead Instructor, Boca Code</em>
          </div>
        </div>
        <div id="testimony-card" className="card">
          <div id="card-container" className="card-container">
            <q>Due to this connection [with the City of Boynton, facilitated by Beth], I have been able to secure an On The Job Training for a very deserving woman. She has begun this OJT with great success and support by the City and this would not have been possible without the connection that I made with Beth. Beth went out of her way to assist me and she saw it through to make sure we had everything we needed to make this employment match for her a success.</q>
            <br/><br/><em>-Jenni Paine</em>
            <br/><em>Career Resource Specialist, Work Opportunities Unlimited</em>
          </div>
        </div>
      </section>
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
