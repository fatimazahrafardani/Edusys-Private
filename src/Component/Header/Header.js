import React from "react";
import "./Header.css";
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import Contact from '../Conatcet/Contact';
import Navbar from '../Navbar/Navbar';
  function Header() {
    return (
      <div>
        
     
 <nav><Navbar/></nav>
<section><Section/></section>
<contact><Contact/></contact>
    
    
     <footer><Footer/></footer>
      </div>
    )
  }
  
  export default Header
  