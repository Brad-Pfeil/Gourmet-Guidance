import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
          <header className="top-banner">
            <nav className="nav-left">
              <button className="nav-button">Home</button>
              <button className="nav-button">Upload Recipe</button>
              <button className="nav-button">Rate Recipe</button>
              <button className="nav-button">Generate Recipe</button>
            </nav>
            <nav className="nav-right">
              <button className="nav-button">Sign-Up / Log-In</button>
            </nav>
          </header>

          <div className="neumorphic">
              <h1>Welcome to Gourmet Guidance</h1>
              <p>Share and discover great recipes!</p>
              <button>Explore Recipes</button>
          </div>

          <footer className="footer">
              <p>Works of Brad Pfeil</p>
          </footer>
    </div>
  );
}

export default App;
