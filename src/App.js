import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import NavbarP from './Components/Navbar/Navbar';
import Switch_ben from './Components/Switch/Switch';
import Footer from './Components/Footer/Footer';





function App() {
  return (
    <div className="App">
      <Router>
        <NavbarP />
        <Switch_ben />
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
