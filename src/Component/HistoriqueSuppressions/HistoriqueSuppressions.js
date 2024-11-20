 
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import './Historique.css';
 import Navbar from '../Navbar/Navbar';
 
 function HistoriqueSuppressions() {
  const [historique, setHistorique] = useState([]);
  const [modifier, setModifier] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchHistorique();
    fetchModifier();
  }, []);

  const fetchHistorique = async () => {
    try {
      const response = await axios.get('http://localhost/Gérer%20Ecole%20priviée/src/Api/?action=historique');
      setHistorique(response.data);
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération de l\'historique :', error);
    }
  };

  const fetchModifier = async () => {
    try {
      const response = await axios.get('http://localhost/Gérer%20Ecole%20priviée/src/Api/?action=updety');
      setModifier(response.data);
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération de l\'updet :', error);
    }
  };

  const getDateActuelle = () => {
    const dateActuelle = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return dateActuelle.toLocaleDateString('fr-FR', options);
  };

  const filterHistorique = historique.filter(item =>
    item.nometablissement.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cdetab.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterModifier = modifier.filter(item =>
    item.nometablissement.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nomcomp.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.numbere.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#003566", width: '100%', height: "130px" }} >
      <Navbar handleSearchChange={setSearchTerm} />
      <div className="historique">
        <h1 style={{color:'black'}}>سجل حذف المدارس</h1>
        <table>
          <thead>
            <tr>
              <th>اسم المدرسة</th>
              <th>رقم المدرسة</th>
              <th>تاريخ الحذف</th>
            </tr>
          </thead>
          <tbody>
            {filterHistorique.map(item => (
              <tr key={item.id}>
                <td>{item.nometablissement}</td>
                <td>{item.cdetab}</td>
                <td>{getDateActuelle()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modifier">
        <h1 style={{color:'black'}}>سجل معلومات  المدير
 </h1>
        <table>
          <thead>
            <tr>
              <th>اسم المدرسة</th>
              <th>الاسم الكامل للمدير</th>
              <th>البريد الإلكتروني</th>
              <th>هاتف</th>
              <th>تاريخ التعديل</th>
            </tr>
          </thead>
          <tbody>
            {filterModifier.map(item => (
              <tr key={item.id}>
                <td>{item.nometablissement}</td>
                <td>{item.nomcomp}</td>
                <td>{item.email}</td>
                <td>{item.numbere}</td>
                <td>{getDateActuelle()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 export default HistoriqueSuppressions;
 