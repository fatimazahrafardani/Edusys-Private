import React from 'react';
import "./Section.css";
import { Link } from 'react-router-dom';
import Number from '../Number/Number';
function Section() {
  return (
    <div>
      <section>
    <div className='row'>
  <div className='col-3'>
    <div className="card">
      <Link to="/EcolePriviee">
        <img  clasName="imgcol" src="./1606814.png" alt="ecole" />
      </Link>
      <div className="card-body">
        <h4 className="card-title" style={{marginRight:'20%'}}><h3>المدارس الخاصة</h3></h4>
        <p className="card-text">
          <Link to="/EcolePriviee">
            <button className="ARD" style={{marginTop:'11%'}}>عرض الخدمة</button>
          </Link>
        </p>
      </div>
    </div>
  </div>
  <div className='col-3'>
    <div className="card">
      <Link to="/Bts">
        <img   clasName="" src="./BTS.png" alt="bts" />
      </Link>
      <div className="card-body">
        <h4 className="card-title" style={{marginRight:'20%'}}><h3>شهادة تقني عالي</h3></h4>
        <p className="card-text">
          <Link to="/Bts">
            <button className="ARD" style={{marginTop:'11%'}}>عرض الخدمة</button>
          </Link>
        </p></div></div></div>
         <div className='col-3'>
    <div className="card">
      <Link to="/Cpge">
        <img src="./téléchargement.png" alt="cpge" />
      </Link>
      <div className="card-body">
        <h4 className="card-title" style={{marginRight:'20%'}}><h3>الأقسام التحضيرية للمدارس العليا</h3></h4>
        <p className="card-text">
          <Link to="/Cpge">
            <button className="ARD" style={{marginTop:'-1%'}}>عرض الخدمة</button>
          </Link>
        </p>
      </div>
    </div>
  </div>
  <div className='col-3'>
    <div className="card">
      <Link to="/Langues">
        <img  clasName="" src="./les langues centre.png" alt="langues" />
      </Link>
      <div className="card-body">
        <h4 className="card-title" style={{marginRight:'30%'}}><h3>اللغات</h3></h4>
        <p className="card-text">
          <Link to="/Langues">
            <button className="ARD" style={{marginTop:'10%'}}>عرض الخدمة</button>
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
</section><br></br><br></br>
   <Number/>
    </div>
  );
}

export default Section;
