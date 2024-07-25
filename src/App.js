import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import "./App.css"

function App() {
  return (
    <div id="container-global">
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
