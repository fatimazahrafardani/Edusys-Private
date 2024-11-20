import React, { useState } from 'react';
import "./Auto.css"; 
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Auto() {
  const [name, setName] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    { username: "nadia@gmail.com", password: "pass1" },
    { username: "fati@gmail.com", password: "pass2" },
    {username: "AREF@gmail.com", password: "123456"}
  
  ];

  const errors = { 
    uname: "هويتك غير صحيحة", 
    upass: "كلمة مرورك غير صحيحة", 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, upass } = event.target.elements;
    setName(uname.value);
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== upass.value) {
        setErrorMessages({ name: "upass", message: errors.upass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div  style={{color:"red"}} className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <body>
    <div className="container">
      <form className="w-50 mx-auto py-5 shadow p-4" onSubmit={handleSubmit}>
        <h4 className="text"> تسجيل الدخول الى الحساب</h4>
        <hr />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" >البريد الإلكتروني   <FontAwesomeIcon icon={faEnvelope} /></label>
          <input  className="form-control" type='Email' name="uname" required  placeholder=' البريد الإلكتروني' />
          {renderErrorMessage("uname")} 
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"      className="form-label">كلمة السر <FontAwesomeIcon icon={faLock} /></label>
          <input  className="form-control" type="password" name="upass" required placeholder=' الرقم السري' />
          {renderErrorMessage("upass")}
        </div>
        <div className="mb-3 d-flex">
          <button className="btn btn-success">   تسجيل الدخول</button>
          
        </div>
      </form>
    </div>
    </body>
  );

  return (
    
    <div className="app">
      {isSubmitted ? <Header /> : renderForm}
    </div>
  );
}

export default Auto;
