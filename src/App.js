import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import MyServices from './Components/MyServices/MyServices';
import MyJourney from './Components/MyJourney/MyJourney';
import Projects from './Components/Projects/Projects';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      <MyServices/>
      <MyJourney/>
      <Projects/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
