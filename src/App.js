import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from './pages/MainPage';
import AllPage from './pages/AllPage';
import CompletedPage from './pages/CompletedPage';
import LeftPage from './pages/LeftPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="all" element={<AllPage />} />
          <Route path="completed" element={<CompletedPage />} />
          <Route path="left" element={<LeftPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
