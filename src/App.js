import React from 'react';
import './App.css';
import Navbar  from "./MyComponent/Navbar";
import Home from "./MyComponent/Home"
import Menu from "./MyComponent/menu";
import Footer from "./MyComponent/footer";
import About from './MyComponent/About';
import Contact from './MyComponent/Contact';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
 
} from "react-router-dom";


function App() {
  return (
    <>
    <div className="App">
    
    <Router>
    <Navbar/>
    
    
    
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/pizza-website" element={<Home/>}/>

        <Route exact path="/aboutus" element={<About/>}/>

        <Route exact path="/contact" element={<Contact/>}/>

        

      </Routes>
      
      
    
    
    </Router>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
