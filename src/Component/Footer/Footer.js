import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };
    return (
        <div className="pg-footer reveal">
        <footer className="footer">
            <div className="fou">
                <div className="quick">
                    <h3>الروابط</h3>
                    <Link to="/Header" onClick={scrollToTop}>الصفحة الرئيسية</Link>
                    <Link to="#packages">المدارس الخاصة</Link>
                    <Link to="#book" >شهادة تقني عالي</Link>
                    <Link to="#gallery">الأقسام التحضيرية للمدارس العليا</Link>
                    <Link to="#contact">اللغات</Link>
                </div>
                    <div className="quick">
                        <h3>المواقع</h3>
                        <Link to="https://dp-kenitra.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية للقنيطرة</Link>
                        <Link to="https://dp-sidikacem.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية لسيدي قاسم</Link>
                        <Link to="https://dp-sidislimane.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية لسيدي سليمان</Link>
                        <Link to="https://dp-sale.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية لسلا</Link>
                        <Link to="https://dp-rabat.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية للرباط</Link>
                        <Link to="https://dp-skhirat-temara.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية لصخيرات-تمارة</Link>
                        <Link to="https://dp-khemisset.men.gov.ma/ar/Pages/Accueil.aspx">المديرية الجهوية لخميسات</Link>
                    </div>
                    <div className="quick">
                        <h3>اتصل بنا </h3>
                        <a href=""><i className="fas fa-phone"></i> <FontAwesomeIcon icon={faPhone} /><i></i>   0600-004219</a>
                        
                        <a href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9+%D8%A7%D9%84%D8%AC%D9%87%D9%88%D9%8A%D8%A9+%D9%84%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%AA%D9%83%D9%88%D9%8A%D9%86+%D9%84%D8%AC%D9%87%D8%A9+%D8%A7%D9%84%D8%B1%D8%A8%D8%A7%D8%B7+%D8%B3%D9%84%D8%A7+%D8%A7%D9%84%D9%82%D9%86%D9%8A%D8%B7%D8%B1%D8%A9%E2%80%AD/@33.9601805,-6.7266467,12z/data=!4m10!1m2!2m1!1sacademy+education+rabat!3m6!1s0xda712d546c2a8cd:0x2f135dfcfe119b4b!8m2!3d33.9601805!4d-6.879082!15sChdhY2FkZW15IGVkdWNhdGlvbiByYWJhdJIBCmdvdmVybm1lbnTgAQA!16s%2Fg%2F1hdzzh_x3?entry=ttu"><i className="fas fa-map"> <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>  </i>الرباط</a>
                    </div>
                    <div className="quick">
                        <h3>تابعنا</h3>
                        <a href="https://web.facebook.com/MENPSGOV/#%21/pages/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9/217195898394205"><i className="fab fa-facebook-f"></i><FontAwesomeIcon icon={faFacebook} /> فيسبوك</a>
                        <a href="https://twitter.com/MarocEducation"><i className="fab fa-twitter"></i>      <FontAwesomeIcon icon={faTwitter} /> تويتر</a>
                        <a href="https://www.youtube.com/user/EducationMa"><i className="fab fa-instagram"></i>  <FontAwesomeIcon icon={faYoutube} /> يوتيوب </a>
                    </div>
                </div>
                <hr></hr>
                <h5 className="footer-bottom">
                <span className="copyright">Created by <strong>fardani & laabidi Developer</strong> | &copy; Copyright 2024 - All rights reserved</span>
</h5>    </footer>
        </div>
    );
}export default Footer;
