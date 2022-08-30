import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./client/pages/MainPage";
import AboutPage from "./client/pages/AboutPage";

function App() {

  const [isHomeActive, setHomeActive] = React.useState(true);
  
  return (
    <div className="App">
      <div className="SiteHeader">
        <h1 className="logo">To-do List:</h1>
        <div className="SiteHeader-left">
          <Link
            id="homeLink"
            className={isHomeActive ? "active" : ""}
            onClick={() => setHomeActive(true)}
            to="/"
          >
            Home
          </Link>
          <Link
            id="aboutLink"
            className={!isHomeActive ? "active" : ""}
            onClick={() => setHomeActive(false)}
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
      <div className="SiteBody">
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
