import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Mainpage from "./components/Mainpage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
