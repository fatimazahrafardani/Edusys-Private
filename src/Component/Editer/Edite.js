import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Edite() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nometablissement: '',
    nomfondateur: '',
    datecreation: '',
    cdetab:'',
    niveau: [],
    nomber: '',
    adress: '',
    nomcomp: '',
    datee: '',
    numbere: '',
    email: '',
 
  
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost/Gérer%20Ecole%20priviée/src/Api/index.php?id=${id}`);
        setFormData(response.data); 
        
       
        response.data.niveau.forEach(niveau => {
          const checkbox = document.querySelector(`input[value="${niveau}"]`);
          if (checkbox) {
            checkbox.checked = true;
          }
        });
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données de l\'école :', error);
      }
    };

    fetchData();
  }, [id]); 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     
      const selectedCheckboxes = document.querySelectorAll('input[name="niveau"]:checked');
     
      const niveauValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

     
      setFormData({
        ...formData,
        niveau: niveauValues, 
      });

     
      await axios.put(`http://localhost/Gérer%20Ecole%20priviée/src/Api/index.php?id=${id}`, formData);
      console.log('L\'école a été mise à jour avec succès !');
    } catch (error) {
      console.error('Une erreur est survenue lors de la mise à jour de l\'école :', error);
    }
  };
  const handleChan = (e) => {
    const { name, value, checked, type } = e.target;
  
    if (type === 'checkbox') {
      if (name === 'niveau' || name === 'milieu') {
        let updatedValue = formData[name];
  
        if (checked) {
     updatedValue += (updatedValue ? ',' : '') + value;
        } else {
          
          updatedValue = updatedValue.split(',').filter(item => item !== value).join(',');
        }
  
        setFormData({
          ...formData,
          [name]: updatedValue
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  
  return (
    <div >

   
      <h1 style={{ color: 'red', textAlign: 'center' }}>تعديل مؤسسة</h1>
      <div className='All' >
        <form className='form1' onSubmit={handleSubmit} method='post'>
        <label>اسم المؤسسة:</label>
          <input type='text' className="input-style" name='nometablissement' value={formData.nometablissement} onChange={handleChange} /><br />
          <label>اسم المؤسس بالكامل:</label>
          <input type='text' className="input-style" name='nomfondateur' value={formData.nomfondateur} onChange={handleChange} /><br />
          <label> تاريخ الإحداث:</label>
          <input type='date' className="input-style" name='datecreation' value={formData.datecreation} onChange={handleChange} />

          <label>رمز المؤسسة:</label>
          <input type='text' className="input-style" name='cdetab'  value={formData.cdetab} onChange={handleChange}  /><br />
          <label>
          الأسلاك التعليمية:
            <label className="checkbox-label">
            أولي <input type="checkbox" name='niveau'   value="أولي" onChange={handleChan}  />
            </label>
            <label className="checkbox-label">
            الابتدائي<input type="checkbox"  name='niveau'  value="لابتدائي" onChange={handleChan}/>
            </label>
            <label className="checkbox-label">
            إعدادي ثانوي <input type="checkbox" name='niveau'   value="إعدادي " onChange={handleChan}/>
             
            </label>             
            <label className="checkbox-label">
            ثانوي  تأهيلي <input type="checkbox" name='niveau'  value="    ثانوي  " onChange={handleChan} />
            </label>
            <label className="checkbox-label">
               BTS <input type="checkbox" name='niveau'  value="BTS" onChange={handleChan} />
            </label>
            <label className="checkbox-label">
            CPGE     <input type="checkbox" name='niveau'   value="CPGE"onChange={handleChan} />
            </label>
            <label className="checkbox-label">
              اللغات <input type="checkbox" name='niveau'   value="اللغات" onChange={handleChan} />
            </label>

            </label>  


            <label>رقم الرخصة :</label>
          <input type='text' className="input-style"     name='nomber'  value={formData.nomber}  onChange={handleChange}  /><br />
      
      
      
          <label>عنوان المؤسسة:</label>
          <input type='text' className="input-style"      name='adress'  value={formData.adress}  onChange={handleChange}   /><br />
          <hr style={{color:"black" }}></hr>
            <h5 style={{color:"black"}}>طلب ترخيص مهمة المدير التربوي</h5>
            <hr style={{color:"black"}}></hr>
          <label> الاسم الكامل للمدير:</label>
          <input type='text' className="input-style"     name='nomcomp'  value={formData.nomcomp}  onChange={handleChange}  /><br></br>
         
                  
          <label>تاريخ الإزدياد :</label>
          <input type='date' className="input-style"     name='datee'  value={formData.datee}  onChange={handleChange}   /><br></br>
          <label>هاتف:</label><br></br>
          <input type='number' className="input-style"      name='numbere'  value={formData.numbere}  onChange={handleChange}  /><br />
          <label>البريد الإلكتروني:</label><br></br>
          <input type='Email' className="input-style"    name='email'  value={formData.email}  onChange={handleChange}  /><br />  

          <button style={{marginRight:"20%"}} className="btn btn-primary" type="submit">تعديل</button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Edite;
