import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import MyServices from './Components/MyServices/MyServices';
import MyJourney from './Components/MyJourney/MyJourney';
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      <MyServices/>
      <MyJourney/>
      <Projects/>
     <h1>hello</h1>
    </div>
  );
}

export default App;
