import React from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div>
      <header>
        <div className="home-header">
          <h1 className="h1-header">Beth Wagmeister</h1>
        </div>
      </header>
      <div className="content-container">
        <div id="image-slider-container" className="container-pics">
          <h2 className="description">Advocacy for the Deaf and Hard of Hearing</h2>
          <ImageSlider />
          <h4 className="about-title">About </h4>
          <p className="about-paragraph">
            Beth Wagmeister provides advocacy services on behalf of the d/Deaf
            Community and serves as an outreach educator with focus on the
            Americans with Disability Act of 1990 (ADA) to ensure that business'
            understand their responsibilities under the ADA; Compliance;
            Accessibility; Inclusion of all people.
            <br/>
            <br/>
            She also provides interactive
            workshops and lunch and learns with Deaf focus about Titles I-V of the
            ADA: Employment; State and Local Government; Public Accommodations
            (entertainment); Telecommunications; Miscellaneous.{" "}
          </p>
        </div>
      </div>
      <Testimonials />
      <footer className="home-footer">
        <h2 className="title-footer">Contact Beth Wagmeister:</h2>
        <p>
          Email: wagmeister.beth@gmail.com
          <br />
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
        <span style={{textAlign: "right"}}>TWG, llc</span>
      </footer>
    </div>
  );
}

export default App;
