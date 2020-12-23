import React from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"
import Skill from "./components/Skill"
import About from "./components/About"
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skill/>

    </div>
  );
}

export default App;
