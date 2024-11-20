
import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import './Ecol.css';
import Navbar from '../Navbar/Navbar';


import { Link } from 'react-router-dom';





function EcolePrivee() {

  const directorates = [
    {
      name: 'المديرية الإقليمية للقنيطرة',
      communes: [
        { cd: 2810101, name: 'القنيطرة (البلدية)', milieu: 'حضري' },
        { cd: 2810105, name: 'مهدية (البلدية)', milieu: 'حضري' },
        { cd: 2810111, name: 'سوق الاربعاء (البلدية)', milieu: 'حضري' },
        { cd: 2810301, name: 'عامر السفلية', milieu: 'قروي' },
        { cd: 2810305, name: 'حدادة', milieu: 'قروي' },
        { cd: 2810311, name: 'أولاد سلامة', milieu: 'قروي' },
        { cd: 2810313, name: 'سيدي الطيبي', milieu: 'قروي' },
        { cd: 2810503, name: 'بنمنصور', milieu: 'قروي' },
        { cd: 2810507, name: 'مناصرة', milieu: 'قروي' },
        { cd: 2810509, name: 'مكرن', milieu: 'قروي' },
        { cd: 2810511, name: 'سيدي محمد بنمنصور', milieu: 'قروي' },
        { cd: 2810701, name: 'عرباوة', milieu: 'قروي' },
        { cd: 2810703, name: 'بني مالك', milieu: 'قروي' },
        { cd: 2810705, name: 'قرية بن عودة', milieu: 'قروي' },
        { cd: 2810707, name: 'وادي المخازن', milieu: 'قروي' },
        { cd: 2810901, name: 'بحارة أولاد عياد', milieu: 'قروي' },
        { cd: 2810909, name: 'سيدي علال التازي', milieu: 'قروي' },
        { cd: 2810913, name: 'سيدي محمد لحمر', milieu: 'قروي' },
        { cd: 2810915, name: 'سوق ثلاثاء الغرب', milieu: 'قروي' },
        { cd: 2811103, name: 'شوافع', milieu: 'قروي' },
        { cd: 2811105, name: 'للا ميمونة', milieu: 'قروي' },
        { cd: 2811107, name: 'مولاي بوسلهام', milieu: 'قروي' },
        { cd: 2811111, name: 'سيدي بوبكر الحاج', milieu: 'قروي' }
      ]
    }
 ,
    {
      name: 'المديرية الإقليمية لسيدي قاسم',
      communes: [
        { cd: '4810101', name: 'دار الكداري (البلدية)', milieu: 'حضري' },
        { cd: '4810103', name: 'احد كورت (البلدية)', milieu: 'حضري' },
        { cd: '4810105', name: 'جرف الملحة (البلدية)', milieu: 'حضري' },
        { cd: '4810107', name: 'مشرع بلقصيري (البلدية)', milieu: 'حضري' },
        { cd: '4810111', name: 'سيدي قاسم (البلدية)', milieu: 'حضري' },
        { cd: '4810301', name: 'عين الدفالي', milieu: 'قروي' },
        { cd: '4810303', name: 'بني وال', milieu: 'قروي' },
        { cd: '4810309', name: 'مولاي عبد القادر', milieu: 'قروي' },
        { cd: '4810313', name: 'سيدي احمد بنعيسى', milieu: 'قروي' },
        { cd: '4810315', name: 'سيدي اعمر الحاضي', milieu: 'قروي' },
        { cd: '4810317', name: 'سيدي عزوز', milieu: 'قروي' },
        { cd: '4810501', name: 'الحوافات', milieu: 'قروي' },
        { cd: '4810507', name: 'انويرات', milieu: 'قروي' },
        { cd: '4810509', name: 'صفصاف', milieu: 'قروي' },
        { cd: '4810705', name: 'الخنيشات', milieu: 'قروي' },
        { cd: '4810707', name: 'لمرابيح', milieu: 'قروي' },
        { cd: '4810711', name: 'اولاد نوال', milieu: 'قروي' },
        { cd: '4810719', name: 'سيدي امحمد الشلح', milieu: 'قروي' },
        { cd: '4810721', name: 'توغيلت', milieu: 'قروي' },
        { cd: '4810901', name: 'باب تيوكا', milieu: 'قروي' },
        { cd: '4810903', name: 'بير الطالب', milieu: 'قروي' },
        { cd: '4810905', name: 'اشبانات', milieu: 'قروي' },
        { cd: '4810907', name: 'سلفات', milieu: 'قروي' },
        { cd: '4810909', name: 'ثكنة', milieu: 'قروي' },
        { cd: '4810911', name: 'زكوطة', milieu: 'قروي' },
        { cd: '4810913', name: 'زيرارة', milieu: 'قروي' },
        { cd: '4811103', name: 'دار العسلوجي', milieu: 'قروي' },
        { cd: '4811105', name: 'ارميلات', milieu: 'قروي' },
        { cd: '4811111', name: 'سيدي الكامل', milieu: 'قروي' },
      ]
    }
    ,
    {
      name: 'المديرية الإقليمية لسيدي سليمان',
      communes: [
        { cd: '4910107', name: 'سيدي سليمان (البلدية)', milieu: 'حضري' },
        { cd: '4910109', name: 'سيدي يحيى الغرب (البلدية)', milieu: 'حضري' },
        { cd: '4910307', name: 'قصيبية', milieu: 'قروي' },
        { cd: '4910315', name: 'الصفافعة', milieu: 'قروي' },
        { cd: '4910317', name: 'عامر الشمالية', milieu: 'قروي' },
        { cd: '4910501', name: 'ازغار', milieu: 'قروي' },
        { cd: '4910503', name: 'بومعيز', milieu: 'قروي' },
        { cd: '4910505', name: 'دار بلعامري', milieu: 'قروي' },
        { cd: '4910509', name: 'مساعدة', milieu: 'قروي' },
        { cd: '4910511', name: 'أولاد بن حمادي', milieu: 'قروي' },
        { cd: '4910513', name: 'أولاد حسين', milieu: 'قروي' },
      ]
    },
    {
      name: 'المديرية الإقليمية سلا',
      communes: [
        { cd: '4410103', name: 'باب المريسة (المقاطعة)', milieu: 'حضري' },
        { cd: '4410105', name: 'بطانة (المقاطعة)', milieu: 'حضري' },
        { cd: '4410106', name: 'حصين (المقاطعة)', milieu: 'حضري' },
        { cd: '4410107', name: 'العيايدة (المقاطعة)', milieu: 'حضري' },
        { cd: '4410108', name: 'سيدي بوقنادل (البلدية)', milieu: 'حضري' },
        { cd: '4410109', name: 'تابريكت (المقاطعة)', milieu: 'حضري' },
        { cd: '4410301', name: 'السهول', milieu: 'قروي' },
        { cd: '4410305', name: 'عامر', milieu: 'قروي' },
        ]
    },
  
  
    {
      name: 'المديرية الإقليمية للرباط',
      communes: [
        { cd: '4210101', name: 'أكدال الرياض (المقاطعة)', milieu: 'حضري' },
        { cd: '4210103', name: 'اليوسفية (المقاطعة)', milieu: 'حضري' },
        { cd: '4210105', name: 'حسان (المقاطعة)', milieu: 'حضري' },
        { cd: '4210106', name: 'السويسي (المقاطعة)', milieu: 'حضري' },
        { cd: '4210107', name: 'التواركة (البلدية)', milieu: 'حضري' },
        { cd: '4210109', name: 'يعقوب المنصور (المقاطعة)', milieu: 'حضري' },
      ]
    }
    ,
    {
      name: "  المديرية الإقليمية الصخيرات تمارة ",
      communes: [
        { cd: '5010101', name: 'عين العودة (البلدية)', milieu: 'حضري' },
        { cd: '5010103', name: 'الهرهورة (البلدية)', milieu: 'حضري' },
        { cd: '5010105', name: 'الصخيرات (البلدية)', milieu: 'حضري' },
        { cd: '5010107', name: 'تمارة (البلدية)', milieu: 'حضري' },
        { cd: '5010109', name: 'عين عتيق (البلدية)', milieu: 'حضري' },
        { cd: '5010301', name: 'المنزه', milieu: 'قروي' },
        { cd: '5010303', name: 'أم عزة', milieu: 'قروي' },
        { cd: '5010311', name: 'سيدي يحيى زعير', milieu: 'قروي' },
        { cd: '5010503', name: 'مرس الخير', milieu: 'قروي' },
        { cd: '5010505', name: 'صباح', milieu: 'قروي' },
      ]
    }
  ,
    
   
        {
          name: 'المديرية الإقليمية للخميسات',
          communes: [


            { cd: '2910101', name: 'الخميسات (البلدية)', milieu: 'حضري' },
            { cd: '2910103', name: 'الرماني (البلدية)', milieu: 'حضري' },
            { cd: '2910105', name: 'تيفلت (البلدية)', milieu: 'حضري' },
            { cd: '2910117', name: 'سيدي علال البحراوي (البلدية)', milieu: 'حضري' },
            { cd: '2910301', name: 'أيت ميمون', milieu: 'قروي' },
            { cd: '2910303', name: 'أيت اوريبل', milieu: 'قروي' },
            { cd: '2910305', name: 'أيت سيبرن', milieu: 'قروي' },
            { cd: '2910307', name: 'أيت يدين', milieu: 'قروي' },
            { cd: '2910309', name: 'الكنزرة', milieu: 'قروي' },
            { cd: '2910311', name: 'مجمع الطلبة', milieu: 'قروي' },
            { cd: '2910313', name: 'الصفاصيف', milieu: 'قروي' },
            { cd: '2910315', name: 'سيدي علال المصدر', milieu: 'قروي' },
            { cd: '2910317', name: 'سيدي الغندور', milieu: 'قروي' },
            { cd: '2910501', name: 'أيت ايشو', milieu: 'قروي' },
            { cd: '2910503', name: 'أيت إيكو', milieu: 'قروي' },
            { cd: '2910505', name: 'بوقشمير', milieu: 'قروي' },
            { cd: '2910507', name: 'حودران', milieu: 'قروي' },
            { cd: '2910509', name: 'معازيز', milieu: 'قروي' },
            { cd: '2910511', name: 'أولماس', milieu: 'قروي' },
            { cd: '2910513', name: 'تيداس', milieu: 'قروي' },
            { cd: '2910701', name: 'عين السبيت', milieu: 'قروي' },
            { cd: '2910705', name: 'براشوة', milieu: 'قروي' },
            { cd: '2910707', name: 'ازحيليكة', milieu: 'قروي' },
            { cd: '2910709', name: 'جمعة مول البلاد', milieu: 'قروي' },
            { cd: '2910711', name: 'الغوالم', milieu: 'قروي' },
            { cd: '2910713', name: 'مرشوش', milieu: 'قروي' },
            { cd: '2910715', name: 'مولاي إدريس أغبال', milieu: 'قروي' },
            { cd: '2910902', name: 'عين جوهرة-سيدي بوخلخال', milieu: 'قروي' },
            { cd: '2910903', name: 'أيت بلقاسم', milieu: 'قروي' },
            { cd: '2910905', name: 'أيت بويحيى الحجامة', milieu: 'قروي' },
            { cd: '2910907', name: 'أيت مالك', milieu: 'قروي' },
            { cd: '2910909', name: 'خميس سيدي يحيى', milieu: 'قروي' },
            { cd: '2910911', name: 'مقام الطلبة', milieu: 'قروي' },
            { cd: '2910913', name: 'سيدي عبد الرزاق', milieu: 'قروي' },
            { cd: '2910919', name: 'آيت علي او لحسن', milieu: 'قروي' }
          ],

        
        }

      ]
  const [ecoles, setEcoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEcoleDetails, setSelectedEcoleDetails] = useState(null);
  const [niveauFilter, setNiveauFilter] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');



  const hideEcoleDetails = () => {
    setSelectedEcoleDetails(null);
  };
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
  const detailsRef = useRef(null);

  const handlePrintAll = () => {
  
    const tableToHide = document.querySelector('.ecol table');
    tableToHide.style.display = 'none';
  
    let printContents = '';
  
    ecoles.forEach(ecole => {
  
      if ((ecole.niveau.toLowerCase().includes('ثانوي') ||
            ecole.niveau.toLowerCase().includes('إعدادي') ||
            ecole.niveau.toLowerCase().includes('الابتدائي') ||
            ecole.niveau.toLowerCase().includes('أولي'))) {
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
            body { font-family: Arial, sans-serif; direction: rtl; }
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
  
  
    tableToHide.style.display = '';
};

  const handleAll = () => {
    
    const printableElements = document.querySelectorAll('.header');
    printableElements.forEach(element => {
      element.style.display = 'block';
    });
  
  
    window.print();
  };
  return (
    <div>
      <div style={{ backgroundColor: "#003566", width: '100%', height: "130px" }}>
        <div className="header">
          <Navbar handleSearchChange={setSearchTerm} />
          <div className="button-container">
            <button className="imprimer btn btn-warning" onClick={handlePrintAll}>
              <img src="./download.png" alt="download-icon" />طباعة
            </button>
          </div>
        </div>
        <select style={{ marginTop: '1%' }} value={niveauFilter} onChange={(e) => setNiveauFilter(e.target.value)}>
          <option value="">الأسلاك التعليمية</option>
          <option value="ثانوي">ثانوي</option>
          <option value="إعدادي">إعدادي</option>
          <option value="الابتدائي">الابتدائي</option>
          <option value="أولي">أولي</option>
        </select>
       
        <select  style={{ marginTop: '1%' }} id="communes" value={selectedCommune} onChange={(e) => setSelectedCommune(e.target.value)}>
            <option value="">الجماعة</option>
            {directorates.map((directorate) => (
              directorate.communes.map((commune) => (
                <option key={commune.cd} value={commune.name}>{commune.name}</option>
              ))
            ))}
          </select> 
          <div className='ecol'>
          {ecoles
  .filter(ecole =>
    ((niveauFilter === 'ثانوي' && ecole.niveau.toLowerCase().includes('ثانوي')) ||
     (niveauFilter === 'إعدادي' && ecole.niveau.toLowerCase().includes('إعدادي')) ||
     (niveauFilter === 'الابتدائي' && ecole.niveau.toLowerCase().includes('الابتدائي')) ||
     (niveauFilter === 'أولي' && ecole.niveau.toLowerCase().includes('أولي'))) &&
    ecole.nometablissement.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCommune === '' || ecole.selectedCommune.toLowerCase() === selectedCommune.toLowerCase())
  )
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
                          <button className=' Ta3dil btn btn-info'>  <img className='pen' src="./edit.png" alt="edit-icon" />   تعديل  </button>
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

            <button style={{marginRight:'45%'}} className="imprimer btn btn-warning" onClick={handleAll}>
        <img src="./download.png" />طباعة
      </button>
       </div>   
        )}



        </div>
      </div>
    </div>
  );
}

export default EcolePrivee;
