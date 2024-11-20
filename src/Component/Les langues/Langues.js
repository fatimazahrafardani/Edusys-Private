

  
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


function Langues() {
  const [ecoles, setEcoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEcoleDetails, setSelectedEcoleDetails] = useState(null);
  const detailsRef = useRef(null);
  const [niveauFilter, setNiveauFilter] = useState('');

  useEffect(() => {
    axios.get("http://localhost/Gérer%20Ecole%20priviée/src/Api/")
      .then((res) => {
        setEcoles(res.data);
        console.log(res)
      })
      .catch((error) => {
        console.error('Une erreur est survenue lors de la récupération des données :', error);
      });
  }, []);

  const deleteEcole = (id) => {
    axios.delete(`http://localhost/Gérer%20Ecole%20priviée/src/Api/index.php?id=${id}`)
      .then(() => {
        setEcoles(ecoles.filter(ecole => ecole.id !== id));
        console.log('Ecole supprimée avec succès');
      })
      .catch((error) => {
        console.error('Une erreur est survenue lors de la suppression de l\'école :', error);
      });
  };

  const showEcoleDetails = (selectedEcole) => {
    setSelectedEcoleDetails(selectedEcole);
  };

  const hideEcoleDetails = () => {
    setSelectedEcoleDetails(null);
  };

  
  const handlePrintAll = () => {
    // Hide the table displayed on the page
    const tableToHide = document.querySelector('.ecol table');
    tableToHide.style.display = 'none';
  
    let printContents = '';
  
    ecoles.forEach(ecole => {
      // Exclude schools of specific levels from being printed
      if ((
            ecole.niveau.toLowerCase().includes('اللغات'))) {
        printContents += `
          <table class='table'>
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
                <td>${ecole.id}</td>
                <td>${ecole.selectedCommune}</td>
                <th>${ecole.selectedCommuneCd}</th>
                <td>${ecole.selectedCommuneMilieu}</td>
                <td>${ecole.nometablissement}</td>
                <td>${ecole.cdetab}</td>
                <td>${ecole.adress}</td>
                <td>${ecole.niveau}</td>
                <td>${ecole.nomber}</td>
                <td>${ecole.datecreation}</td>
              </tr>
            </tbody>
          </table>
        `;
      }
    });
  
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            /* Add your print-specific styles here */
            body { font-family: Arial, sans-serif; 
            
              direction: rtl;}
            .table { border-collapse: collapse; width: 100%; }
            .table th, .table td { border: 1px solid #dddddd; text-align: left; padding: 8px; }
            .table th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  
    // Restore the visibility of the table displayed on the page
    tableToHide.style.display = '';
};

  
  
  const handleAll = () => {
    
    const printableElements = document.querySelectorAll('.header');
    printableElements.forEach(element => {
      element.style.display = 'block';
    });
  
  
    window.print();
  };
  const handleUpdateClick = (id) => {
 
    console.log('Update clicked for school with id:', id);
  };

  return (
    <div>
     <div style={{ backgroundColor: "#003566", width: '100%', height: "130px" }}>
  <div className="header">
    <Navbar handleSearchChange={setSearchTerm} />
    <div className="button-container">
      <button className="imprimer btn btn-warning" onClick={handlePrintAll}>
        <img src="./download.png" />طباعة
      </button>
     
    </div>
  </div>
 
</div>
<div className='ecol'>
{ecoles
 .filter(ecole => {
  
  return ecole.niveau.toLowerCase().includes('اللغات') &&
         ecole.nometablissement.toLowerCase().includes(searchTerm.toLowerCase());
})
    .map(ecole => (
      <div key={ecole.id}>
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
              <th>اجراءات</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                    <td>{ecole.id}</td>
                    <td>{ecole.selectedCommune}</td>
                    <th>{ecole.selectedCommuneCd}</th>
                    <td>{ecole.selectedCommuneMilieu}</td>
                    <td>{ecole.nometablissement}</td>
                    <td>{ecole.cdetab}</td>
                    <td>{ecole.adress}</td>
                    <td>{ecole.niveau}</td>
                    <td>{ecole.nomber}</td>
                    <td>{ecole.datecreation}</td>
                    <td>
                <button onClick={() => deleteEcole(ecole.id)} className='btn btn-danger'>
                  حذف
                  <img src='trash3.svg' alt="trash-icon" />
                </button>
                <Link to={`/EcolePriviee/Edite/${ecole.id}`}>
        
                  
                  <button className=' Ta3dil btn btn-info' onClick={() => handleUpdateClick(ecole.id)}>  <img className='pen' src="./edit.png" />   تعديل  </button>
                </Link>
                <button onClick={() => showEcoleDetails(ecole)} className='Tafasil btn btn-primary'>
                  تفاصيل
                  <img src='three-dots.svg' alt="dots-icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ))}

        <div ref={detailsRef}></div>
        {selectedEcoleDetails && (
          <div>
            <div className='header'>
              <button className='SUPP'><img onClick={hideEcoleDetails} src='./supprimer (3).png' /></button>
            </div>
            <table className='more'>
              <tbody>
                <tr>
                
                  <th>رت</th>
                  <td>{selectedEcoleDetails.id}</td>
                </tr>
                <tr>
                  <th>المديريةالإقليمية</th>
                  <td>{selectedEcoleDetails.selectedDirectorate}</td>


                </tr>
                <tr>
                  <th>اسم الجماعة</th>
                  <td>{selectedEcoleDetails.selectedCommune}</td>
                </tr>
                <tr>
                  <th>رمز الجماعة</th>
                  <td>{selectedEcoleDetails.selectedCommuneCd}</td>
                </tr>
                <tr>
                  <th>الوسط</th>
                  <td>{selectedEcoleDetails.selectedCommuneMilieu}</td>
                </tr>
                <tr>
                  <th>اسم المؤسسة</th>
                  <td>{selectedEcoleDetails.nometablissement}</td>
                </tr>
                <tr>
                  <th>رمز المؤسسة</th>
                  <td>{selectedEcoleDetails.cdetab}</td>
                </tr>
                <tr>
                  <th>عنوان المؤسسة</th>
                  <td>{selectedEcoleDetails.adress}</td>
                </tr>
                <tr>
                  <th>الأسلاك التعليمية</th>
                  <td>{selectedEcoleDetails.niveau}</td>
                </tr>
                <tr>
                  <th>رقم الرخصة </th>
                  <td>{selectedEcoleDetails.nomber}</td>
                </tr>
                <tr>
                  <th>تاريخ الإحداث</th>
                  <td>{selectedEcoleDetails.datecreation}</td>
                </tr>

<tr><th>  <h5 style={{color:"black"}}>طلب ترخيص مهمة المدير التربوي</h5></th></tr>
 
                <tr>

               
      <th>الاسم الكامل للمدير</th>
       <td>{selectedEcoleDetails.nomcomp}</td>

    </tr>
    <tr>
      <th>تاريخ الإزدياد</th>
       <td>{selectedEcoleDetails.datee}</td>
    </tr>
    <tr>
      <th>الهاتف</th> 
      <td>{selectedEcoleDetails.numbere}</td>
    </tr>
    <tr>
      <th>البريد الإلكتروني</th> 
      <td>{selectedEcoleDetails.email}</td>
    </tr>
    <tr>
       <th>طلب الترخيص بالقيام بمهمة المدير (ة) التربوي (ة) يحرره المعنى (ة) المتصرف</th> 
       <td>{selectedEcoleDetails.talablmodir}</td>

      
    </tr>
    <tr>
      <th>نسخة مصادق عليها من بطاقة التعريف الوطنية</th>
      <td>{selectedEcoleDetails.cartecin}</td>
    </tr>
    <tr>
      <th>نسخة مصادق عليها من شهادة الإجازة أو ما يعادلها</th>
      <td>{selectedEcoleDetails.noskhaijaza}</td>
    </tr>
    <tr>
    <th > بالنسبة للتعليم الأولى بيان الخدمات يثبت ممارسة التدريس سنتان (02) مرفق بشهادة شواهد عمل</th>
    <td>{selectedEcoleDetails.momarasattadirs}</td>
    </tr>
    <tr>
   <th>بالنسبة للتعليم المدرسي الخصوصي: (أولى ابتدائي + ثانوى اعدادی ثانوی تاهیلی) بیان</th>
   <td>{selectedEcoleDetails.cart1}</td>
    </tr>
    <tr>
      <th>  بالنسبة لمركز اللغات بيان الخدمات يثبت ممارسة التدريس (03) سنوات على الأقل في التعليم العمومي أو الخصوصي مرفق شهادة / شواهد عمل؛ مع التوفر على إجازة في إحدى اللغات المطلوبة</th>
      <td>{selectedEcoleDetails.cart2}</td>
    </tr>
    <tr>
      <th>   نسخة من عقد العمل المبرم بين صاحب (ة) المؤسسة والمدير (ة) التربوي (ة) مصادق عليه ويحترم الحد الأدنى من الأجور</th>
      <td>{selectedEcoleDetails.cart3}</td>
    </tr>
    <tr>
      <th>  نسخة من السجل العدلي أو بطاقة السوابق</th>
      <td>{selectedEcoleDetails.cart4}</td>
    </tr>
    <tr>
      <th>  ا لتزام مصادق عليه بالتفرغ لتسيير المؤسسة وبالبقاء في العمل إلى نهاية السنة الدراسية وبتعويض أي مدرس  تخلى  عن العمل خلال السنة الدراسية وباحترام القوانين الجاري بها العمل بالتعليم الخصوصي    </th>
      <td>{selectedEcoleDetails.cart5}</td>
    </tr>
    <tr>
      <th>  ثلاث صور فوتوغرافية حديثة العهد</th>
      <td>{selectedEcoleDetails.cart6}</td>
    </tr>
    <tr>
      <th>   شهادة طبية تثبت سلامة المعني(ة) بالأمر</th>
      <td>{selectedEcoleDetails.cart7}</td>
    </tr>
    <tr>
      <th>  شهادة استقالة أو إقالة المدير (ة) السابق (ة) أو المدير (ة) المرشح (ة) من المنصب السابق مصادق عليها </th>
      <td>{selectedEcoleDetails.cart8}</td>
    </tr>
    <tr>
      <th>    نموذج التوقيع</th>
      <td>{selectedEcoleDetails.cart9}</td>
    </tr>
    <tr>
      <th> نسخة من رخصة فتح المؤسسة المعنية</th>
      <td>{selectedEcoleDetails.cart10}</td>

    </tr>
    <tr>
      <th
      ><h5 style={{color:"black"}}>  لائحة الوثائق الواجب الإدلاء بها من أجل الحصول على ترخيص بفتح أو توسيع مؤسسة للتعليم المدرسي الخصوصي</h5></th></tr>
    <tr>
      <th>  طلب يحرره المؤسس(ة) أو المتصرف(ة)</th>
      <td>{selectedEcoleDetails.doc1}</td>
      
    </tr>
    <tr>
      <th>نسخة مطابقة للأصل من بطاقة التعريف الوطنية أو بطاقة الإقامة بالنسبة للأجانب</th>
      <td>{selectedEcoleDetails.doc2}</td>
    </tr>
    <tr>
      <th>    نسخة من عقد الازدياد </th>
      <td>{selectedEcoleDetails.doc3}</td>

    </tr>

    <tr>
      <th> نسخة من السجل العدلي أو من السوابق العدلية   </th>
      <td>{selectedEcoleDetails.doc4}</td>

    </tr>
    <tr>
      <th >ثلاث صور فوتوغرافية حديثة العهد بالنسبة للشخص الذاتي   </th>
      <td>{selectedEcoleDetails.doc5}</td>

    </tr>
    <tr>
      <th >  جذاذة معلومات حول المؤسس/ المتصرف  </th>
      <td>{selectedEcoleDetails.doc6}</td>

    </tr>
    <tr>
      <th>نسخة من القانون الأساسي إذا كان المؤسس شخصا معنويا إضافة إلى البيانات الخاصة بجميع المساهمين وحصصهم وفق النموذج المقدم إلى الإدارة المعنية عند تأسيس شركة </th>
      <td>{selectedEcoleDetails.doc7}</td>

    </tr>
    <tr>
      <th >سخة مصادق عليها من دفتر التحملات  </th>
      <td>{selectedEcoleDetails.doc8}</td>

    </tr>
    <tr>
      <th >استمارة التوقيع  </th>
      <td>{selectedEcoleDetails.doc9}</td>

    </tr>
    <tr>
    <th>تصميم لبناية المؤسسة يبين استعمالها كمؤسسة للتعليم المدرسي الخصوص </th>
      <td>{selectedEcoleDetails.doc10}</td>

    </tr>
    <tr>
    <th>رخصة البناء + شهادة المطابقة</th>
      <td>{selectedEcoleDetails.doc11}</td>

    </tr>

    <tr>
    <th>نسخة من شهادة الملكية وعقد كرائها يبين استعمالها كمؤسسة تعليمية</th>
      <td>{selectedEcoleDetails.doc12}</td>

    </tr>
    <tr>
    <th> الشهادة السلبية المتعلقة بتسمية المؤسسة مع مراعاة مدة صلاحية الوثيقة  </th>
      <td>{selectedEcoleDetails.doc13}</td>

    </tr>
   
<tr>
  <th>    شهادة إدارية تثبت صلاحية البناية المراد استعمالها وتوفرها على الشروط الصحية مسلمة من طرف السلطات المختصة  </th>


  <td>{selectedEcoleDetails.doc14}</td>
</tr>
   
    <tr>
  <th >خبرة تقنية تثبت سلامة البناية  </th>


  <td>{selectedEcoleDetails.doc15}</td>
</tr>
    <tr>
   








      <th>البطاقة التقنية لمشروع احداث مؤسسة تعليمية خصوصية موقعة من طرف المهندس</th>
      <td>{selectedEcoleDetails.doc16}</td>
    </tr>
    <tr>
      <th>بیان مفصل لمختلف مرافق المؤسسة يحدد عدد الحجرات والفصول الدراسية</th>
      <td>{selectedEcoleDetails.doc17}</td>
    </tr>
    <tr>
      <th>صور فوتوغرافية لمختلف مرافق المؤسسة</th>
      <td>{selectedEcoleDetails.doc18}</td>
    </tr>
    <tr>
      <th>لائحة التجهيزات والوسائل الديداكتيكية اللازمة+ نسخة من المعدات المخبرية</th>
      <td>{selectedEcoleDetails.doc19}</td>
    </tr>
    <tr>
      <th>عقدة شراكة لاستغلال الملاعب الرياضية</th>
      <td>{selectedEcoleDetails.doc20}</td>
    </tr>
    <tr>
      <th>النظام الداخلي للمؤسسة</th>
      <td>{selectedEcoleDetails.doc21}</td>
    </tr>
    <tr>
      <th>برنامج الدراسة والحصص والكتب</th>
      <td>{selectedEcoleDetails.doc22}</td>
    </tr>
    <tr>
      <th>عقد مع طبيب</th>
      <td>{selectedEcoleDetails.doc23}</td>
    </tr>
    <tr>
      <th>التزام باستمرار المؤسسة في العمل إلى نهاية السنة الدراسية</th>
      <td>{selectedEcoleDetails.doc24}</td>
    </tr>
          
              </tbody>
            </table>
            
            <button className="imprimer btn btn-warning" onClick={handleAll}>
        <img src="./download.png" />طباعة
      </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Langues;
