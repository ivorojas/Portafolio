import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
