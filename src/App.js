import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./Services";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<h1>Welcome to Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

