import React from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div>
        <div className="contact-container">
      <div className="contact-in reveal">
        <h1>معلومات الاتصال</h1>
        <h2><i className="fa fa-phone" aria-hidden="true"> </i><FontAwesomeIcon icon={faPhone}/>  0600-004219</h2>
        <h2><i className="fa fa-envelope" aria-hidden="true"></i> <FontAwesomeIcon icon={faEnvelope}/> edurabatsalekenitra@gmail.com</h2>
        <h2><i className="fa fa-map-marker" aria-hidden="true"></i> <FontAwesomeIcon icon={faMapMarkerAlt} /> شارع كمال زبدي، الرباط 10100</h2>
       
      </div>
    
      <div className="contact-in reveal">
   <iframe    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105972.94152186293!2d-6.82495157049997!3d33.89855293232235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda712d546c2a8cd%3A0x2f135dfcfe119b4b!2z2KfZhNij2YPYp9iv2YrZhdmK2Kkg2KfZhNis2YfZiNmK2Kkg2YTZhNiq2LHYqNmK2Kkg2YjYp9mE2KrZg9mI2YrZhiDZhNis2YfYqSDYp9mE2LHYqNin2Lcg2LPZhNinINin2YTZgtmG2YrYt9ix2Kk!5e0!3m2!1sar!2sma!4v1708468604608!5m2!1sar!2sma" style={{width:"800px",height:"600px",border: 0 ,display:"flex" ,marginRight:"30%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       
        
      </div>
    </div>
    </div>
  )
}

export default Contact
