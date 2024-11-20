import React from 'react';
import './Number.css';
import { FaUniversity } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
import { BiBuilding } from 'react-icons/bi';



function Number() {
  return (
    <div>
      <div className='row'>
        <div className='col-12' style={{ backgroundColor: '#efebeb', width: '100%', height: '300px' }}>
          <div>
            <strong style={{ color: 'black', paddingRight: '44%' }}>الوزارة في أرقام</strong><br></br>
            <div className="line"></div> <br></br> 
            <p className='para'>
              وزارة التربية الوطنية والتكوين المهني في المغرب تتولى مسؤولية تطوير وتنفيذ السياسات التعليمية في البلاد. تعمل الوزارة على تحسين نظام التعليم وتطوير جودته وتوفير الفرص التعليمية للجميع.
            </p>
          </div>
        
          <div className='row' style={{ backgroundColor: ' #ffbc2b', marginRight: '10%', marginTop: '3%', marginLeft: '90%', width: '80%' }}>
            <div className='col-3'>
              <p className='mots' >  <FaUniversity size={50}  color='white' />الأكاديميات </p>
              <h6  className='numero'>12</h6>
            </div>
            <div className='col-3'>
              <p className='mots' >   <FaCity size={50}  color='white' />المديريات الاقليمية</p>
              <h6 className='numero'>75</h6>
            </div>
            <div className='col-3'>
              <p className='mots' >  <FaSchool size={50} color='white' />المدارس الخاصة</p>
              <h6 className='numero'>6900</h6>
            </div>
            <div className='col-3'>
              <p className='mots' >المدارس العمومية  <BiBuilding size={50} color='white' /></p>
              <h6 className='numero'>11.472</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number;
