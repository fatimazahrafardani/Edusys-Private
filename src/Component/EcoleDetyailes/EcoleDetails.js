// EcoleDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EcoleDetails() {
  const [ecoleDetails, setEcoleDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost/Gérer%20Ecole%20priviée/src/Api/${id}`);
        console.log(response.data); // Vérifiez la structure des données renvoyées par l'API
        setEcoleDetails(response.data);
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des détails de l\'école :', error);
      }
    };

    fetchData();
  }, [id]);

  if (!ecoleDetails) {
    return <div>Chargement des détails de l'école...</div>;
  }

  return (
    <div>
      <h2>Détails de l'école :</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>رت</th>
            <th>اسم الجماعة</th>
            <th>رمز الجماعة</th>
            <th>الوسط</th>
            <th>اسم المؤسسة</th>
            <th>رمز المؤسسة</th>
            <th>عنوان المؤسسة</th>
            <th>الأسلاك التعليمية</th>
            <th>رقم الرخصة</th>
            <th>تاريخ الإحداث</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ecoleDetails.id}</td>
            <td>{ecoleDetails.nometablissement}</td>
            <td>{ecoleDetails.nomfondateur}</td>
            <td>{ecoleDetails.nometablissement}</td>
            <td>{ecoleDetails.nomfondateur}</td>
            <td>{ecoleDetails.nometablissement}</td>
            <td>{ecoleDetails.nomfondateur}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EcoleDetails;
