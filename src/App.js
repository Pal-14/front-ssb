import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Switch_ben from './Components/Switch/Switch';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch_ben />
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
