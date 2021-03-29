import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="home-header">
        <h1 className="h1-header">The Wag Group</h1>
      </header>
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
