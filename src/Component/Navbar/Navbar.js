import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,  faSearch} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ handleSearchChange }) {
      return (
        <div>
       <div className='logol'>
         <img className='logo' src="./royaume.png" alt="Logo" /><br />
           <p className='titre' >الأكاديمية الجهوية للتربية والتكوين <p className='sous-titre'>الرباط سلا القنيطرة</p></p>
           </div>
              <nav> 
              <div className="btn-group">

                <ul className="utt ">
              <Link style={{textDecoration:'none', textDecoration: 'overline'}} to='/Header' ><li   className="dropdown-item1"> الرئيسية</li>   </Link> 
                 
                </ul>
    
                <ul className="utt">
                <Link style={{textDecoration:'none'}} to='/Historique' >  <li className="dropdown-item">  السجلات</li></Link>
                </ul>
                <ul className="utt">
               <Link to="https://www.men.gov.ma/Ar/Pages/academies.aspx"  style={{textDecoration:'none'}}><li className="dropdown-item">    مواقع الاكاديميات</li></Link> 
                </ul>
                <ul className="utt">
                 <Link to="https://www.men.gov.ma/Fr/Pages/Contact.aspx" style={{textDecoration:'none'}}><li className="dropdown-item" style={{paddingRight:"50%"}}>اتصال </li></Link> 
                </ul>
              </div>
              <div className='Ajouter'>
              <div className="d-flex ">
      <Link to="/Formulair" className="mr-2">
        <button className='login-button'>إضافة <FontAwesomeIcon icon={faUser} /></button>
      </Link>
      
      <div style={{ marginRight: '10px' }}></div>
      <Link to="/">
        <button className='des btn btn-light'> <img  className ='dessconet'
        src='./desconectar.png'/>تسجيل الخروج</button>
      </Link>
    </div>
              </div> 
                </nav>
  
            <div className="search" style={{ position: 'relative' }}>
        <input 
          type="search" 
          className="search-input form-control" 
          placeholder="بحث...." 
          aria-label="Search" 
          aria-describedby="search-addon" 
          style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '50%' }}
          onChange={(event) => handleSearchChange(event.target.value)}
        />
        <button type="button" className="recher">بحث <FontAwesomeIcon icon={faSearch} /></button>
      </div>
         
            </div>
          
)}
   
       export default Navbar
       