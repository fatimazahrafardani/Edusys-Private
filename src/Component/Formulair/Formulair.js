
import React, { useState } from 'react';
import './Formulair.css';
import Navbar from '../Navbar/Navbar';
function Formulair(){
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
    



const [formData, setFormData] = useState({
  nometablissement: '',
 nomfondateur: '',
 datecreation:'',
 cdetab:'',
niveau:[],
 nomber:'',
 selectedDirectorate: '',
 selectedCommune: '',
 selectedCommuneCd: '',
 selectedCommuneMilieu: '',
adress:'',
nomcomp:'',
datee:'',
numbere:'',
email:'',
talablmodir:null,
cartecin:null,
noskhaijaza:null,
momarasattadris:null,

cart1:null,
cart2:null,
cart3:null,
cart4:null,
cart5:null,
cart6:null,
cart7:null,
cart8:null,
cart9:null,
cart10:null,

doc1:null,
doc2:null,
doc3:null,
doc4:null,
doc5:null,
doc6:null,
doc7:null,
doc8:null,
doc9:null,
doc10:null,
doc11:null,
doc12:null,
doc13:null,
doc14:null,
doc15:null,
doc16:null,
doc17:null,
doc18:null,
doc19:null,
doc20:null,
doc21:null,
doc22:null,
doc23:null,
doc24:null,



 });  

 const handleSelectChange = (e) => {
  const selectedDirectorate = e.target.value;
  setFormData({
    ...formData,
    selectedDirectorate,
    selectedCommune: '',
    selectedCommuneCd: '',
    selectedCommuneMilieu: '',
  });
};

const handleCommuneChange = (e) => {
  const selectedCommune = e.target.value;
  const selectedCommuneCd = e.target.options[e.target.selectedIndex].dataset.cd;
  const selectedCommuneMilieu = e.target.options[e.target.selectedIndex].dataset.milieu;

  setFormData({
    ...formData,
    selectedCommune,
    selectedCommuneCd,
    selectedCommuneMilieu,
  });
};
const handleCommuneCdChange = (e) => {
  const selectedCommuneCd = e.target.value;
  setFormData({
    ...formData,
    selectedCommuneCd,
  });
};
const handleCommuneMilieuChange = (e) => {
  const selectedCommuneMilieu = e.target.value;
  setFormData({
    ...formData,
    selectedCommuneMilieu,
  });
};
 
 const handleChange = (e) => {
  const { name, value, checked, type } = e.target;

  if (type === 'checkbox') {
      const updatedNiveau = checked
        ? [...formData.niveau, value]
        : formData.niveau.filter((item) => item !== value);

      setFormData({
        ...formData,
        niveau: updatedNiveau,
      });
    } 
  
  else {
    // Handle other input types
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 };

  

const handleFileChange = (event, inputName) => {
  const file = event.target.files[0];

  if (file) {
    setFormData({
      ...formData,
      [inputName]: file,
    });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!formData.nometablissement || !formData.nomfondateur || !formData.datecreation || !formData.cdetab || !formData.niveau.length || !formData.nomber || !formData.adress || !formData.nomcomp || !formData.datee || !formData.numbere || !formData.email || !formData.selectedDirectorate || !formData.selectedCommune) {
    //   alert('الرجاء ملء جميع الحقول المطلوبة');
    //   return;
    // }
    const formDataToSend = new FormData();

   
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataToSend.append(key, formData[key]);
      }
    }

   
  
    try {
      const response = await fetch('http://localhost/G%C3%A9rer%20Ecole%20privi%C3%A9e/src/php/Phptest.php', {
        method: 'POST',
       
        body: formDataToSend
       
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
   
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    console.log(formData)
  };
  
 
        return (


    <div style={{ backgroundColor: "#003566", width: '100%', height: "130px" }} >
       <div className="header">
      <Navbar  />


       </div> 
        <div className='All'>
            <form className='form1' onSubmit={handleSubmit} method='post' encType='multipart/form-data' >
            <h1 style={{ color: 'black', paddingRight: "  40%"  }}>إضافة مؤسسة</h1>
    <label>اسم المؤسسة:</label>
    <input type='text' className="input-style" name='nometablissement'  value={formData.nometablissement} onChange={handleChange}/><br />
    <label>اسم المؤسس بالكامل:</label>
    <input type='text' className="input-style" name='nomfondateur'  value={formData.nomfondateur} onChange={handleChange} /><br />
    
    <label> تاريخ الإحداث:</label>
    <input type='date' className="input-style" name='datecreation'  value={formData.datecreation} onChange={handleChange} /><br />
    <label>رمز المؤسسة:</label>
    <input type='text' className="input-style" name='cdetab'  value={formData.cdetab} onChange={handleChange}  /><br />
          
    <label>
    الأسلاك التعليمية:
      <label className="checkbox-label">
      أولي <input type="checkbox" name='iveau'   value="أولي" onChange={handleChange}  />
      </label>
      <label className="checkbox-label">
      الابتدائي<input type="checkbox"  name='niveau'  value="الابتدائي" onChange={handleChange}/>
      </label>
      <label className="checkbox-label">
      إعدادي ثانوي <input type="checkbox" name='niveau'   value="إعدادي" onChange={handleChange}/>
       
      </label>             
      <label className="checkbox-label">
      ثانوي  تأهيلي <input type="checkbox" name='niveau'  value=" ثانوي  " onChange={handleChange} />
      </label>
      <label className="checkbox-label">
         BTS <input type="checkbox" name='niveau'  value="BTS" onChange={handleChange} />
      </label>
      <label className="checkbox-label">
      CPGE     <input type="checkbox" name='niveau'   value="CPGE" onChange={handleChange} />
      </label>
      <label className="checkbox-label">
        اللغات <input type="checkbox" name='niveau'   value="اللغات" onChange={handleChange} />
      </label>
    </label><br /><br></br>
    <label>رقم الرخصة :</label>
    <input type='text' className="input-style"     name='nomber'  value={formData.nomber}  onChange={handleChange}  /><br />



    <label htmlFor="selecte">المديرية الإقليمية:</label><br />
              <select className='selecte' id="selecte" name='selecte' value={formData.selectedDirectorate} onChange={handleSelectChange}>
                <option value="">المديرية الإقليمية</option>
                {directorates.map((directorate, index) => (
                  <option key={index} value={directorate.name}>{directorate.name}</option>
                ))}
              </select><br /><br />
              <label htmlFor="communes"> الجماعة:</label><br />
              <select className='selecty' id="communes" value={formData.selectedCommune} onChange={handleCommuneChange}>
                <option value="">الجماعة</option>
                {directorates.map((directorate, index) => (
                  formData.selectedDirectorate === directorate.name &&
                  directorate.communes.map((commune, index) => (
                    <option key={index} value={commune.name} data-cd={commune.cd} data-milieu={commune.milieu}>{commune.name}</option>
                  ))
                ))}
              </select><br />
              <label>رمز الجماعة: </label>
        <input type='number' value={formData.selectedCommuneCd} name='selectedCommuneCd' onChange={handleCommuneCdChange} /><br />

        <label> الوسط: </label>
        <label className="checkbox-label">
          حضري <input type="checkbox" name='selectedCommuneMilieu' value="حضري" checked={formData.selectedCommuneMilieu === 'حضري'} onChange={handleCommuneMilieuChange} />
        </label>
        <label className="checkbox-label">
          قروي <input type="checkbox" name='selectedCommuneMilieu' value="قروي" checked={formData.selectedCommuneMilieu === 'قروي'} onChange={handleCommuneMilieuChange} />
        </label><br></br>
    <label>عنوان المؤسسة:</label>
    <input type='text' className="input-style"      name='adress'  value={formData.adress}  onChange={handleChange}   /><br />
{/* ma3lomat lmodir */}
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

 

     <label >طلب الترخيص بالقيام بمهمة المدير (ة) التربوي (ة) يحرره المعنى (ة) المتصرف:</label>
    <input 
      type="file"
      id="talablmodir"
      name="talalbmodir"
      onChange={(e) => handleFileChange(e, 'talablmodir')}
     
    /><br></br>
     <label >  نسخة مصادق عليها من بطاقة التعريف الوطنية :</label>
    <input 
      type="file"
      id="cartecin"
      name="cartecin"
      onChange={(e) => handleFileChange(e, 'cartecin')}
    /><br></br>
       <label >   
نسخة مصادق عليها من شهادة الإجازة أو ما يعادلها أو يقوم مقامها بالنسبة للتعليم المدرسي الخصوصي نسخة مصادق عليها من شهادة الباكالوريا أو ما يعادلها أو يقوم مقامها بالنسبة للتعليم الأولى :</label>
    <input 
      type="file"
      id="noskhaijaza"
      name="noskhaijaza"
      onChange={(e) => handleFileChange(e, 'noskhaijaza')}
    /><br></br>
        <label > بالنسبة للتعليم الأولى بيان الخدمات يثبت ممارسة التدريس سنتان (02) مرفق بشهادة شواهد عمل
:</label>
    <input 
      type="file"
      id="momarasattadris"
      name="momarasattadris"
      onChange={(e) => handleFileChange(e, 'momarasattadris')}
    /><br></br>
     <label > بالنسبة للتعليم المدرسي الخصوصي: (أولى ابتدائي + ثانوى اعدادی ثانوی تاهیلی) بیان:</label>
    <input 
      type="file"
      id="cart1"
      name="cart1"
      onChange={(e) => handleFileChange(e, 'cart1')}
    /><br></br>
     


           
<label >  بالنسبة لمركز اللغات بيان الخدمات يثبت ممارسة التدريس (03) سنوات على الأقل في التعليم العمومي أو الخصوصي مرفق شهادة / شواهد عمل؛ مع التوفر على إجازة في إحدى اللغات المطلوبة
  :</label>
    <input 
      type="file"
      id="cart2"
      name="cart2"
      onChange={(e) => handleFileChange(e, 'cart2')}
    /><br></br>
      <label >  نسخة من عقد العمل المبرم بين صاحب (ة) المؤسسة والمدير (ة) التربوي (ة) مصادق عليه ويحترم الحد الأدنى من الأجور:</label>
    <input 
      type="file"
      id="cart3"
      name="cart3"
      onChange={(e) => handleFileChange(e, 'cart3')}
    /><br></br>

 <label >  نسخة من السجل العدلي أو بطاقة السوابق:</label>
    <input 
      type="file"
      id="cart4"
      name="cart4"
      onChange={(e) => handleFileChange(e, 'cart4')}
    /><br></br>

<label >    ا لتزام مصادق عليه بالتفرغ لتسيير المؤسسة وبالبقاء في العمل إلى نهاية السنة الدراسية وبتعويض أي مدرس  تخلى  عن العمل خلال السنة الدراسية وباحترام القوانين الجاري بها العمل بالتعليم الخصوصي    :</label>
    <input 
      type="file"
      id="cart5"
      name="cart5"
      onChange={(e) => handleFileChange(e, 'cart5')}
    /><br></br>
     <label >  ثلاث صور فوتوغرافية حديثة العهد:</label><br></br>
    <input 
      type="file"
      id="cart6"
      name="cart6"
      onChange={(e) => handleFileChange(e, 'cart6')}
    /><br></br>
     <label >  شهادة طبية تثبت سلامة المعني(ة) بالأمر
:</label>
    <input 
      type="file"
      id="cart7"
      name="cart7"
      onChange={(e) => handleFileChange(e, 'cart7')}
    /><br></br>

<label >  شهادة استقالة أو إقالة المدير (ة) السابق (ة) أو المدير (ة) المرشح (ة) من المنصب السابق مصادق عليها :</label>
    <input 
      type="file"
      id="cart8"
      name="cart8"
      onChange={(e) => handleFileChange(e, 'cart8')}
    /><br></br>
         <label >  نموذج التوقيع:</label><br></br>
    <input 
      type="file"
      id="cart9"
      name="cart9"
      onChange={(e) => handleFileChange(e, 'cart9')}d
    /><br></br>
         <label >  نسخة من رخصة فتح المؤسسة المعنية:</label><br></br>
    <input 
      type="file"
      id="cart10"
      name="cart10"
      onChange={(e) => handleFileChange(e, 'cart10')}
    /><br></br>
       

       <p style={{color:"red"}}>ملاحظات :

يجب تقديم الملف في نسختين.
إذا كان المدير هو أيضًا المؤسس ، فإن الوثائق الوحيدة المطلوبة هي 12 و 11 و 10 و 8 و 5 و 4 و 1.
بالنسبة للمدراء في وضع الإيداع الإداري ، يلزم تقديم وثائق داعمة.
يجب على الأجانب تقديم تصريح بالعمل صادر عن السلطات الحكومية المختصة.</p>

{/* MO3LOMAT D'ECOLE */}
<hr style={{color:"black"}}></hr>
      <h5 style={{color:"black"}}>  لائحة الوثائق الواجب الإدلاء بها من أجل الحصول على ترخيص بفتح أو توسيع مؤسسة للتعليم المدرسي الخصوصي</h5>
      <hr style={{color:"black"}}></hr>

   
    <label > طلب يحرره المؤسس(ة) أو المتصرف(ة)؛
      </label><input type="file" 
       id="doc1"
      name="doc1" 
      onChange={(e) => handleFileChange(e, 'doc1')} />
    <br></br>
    <label htmlFor="doc2">نسخة مطابقة للأصل من بطاقة التعريف الوطنية أو بطاقة الإقامة بالنسبة للأجانب</label>
     <input type="file"
      id="doc2" 
      name="doc2"
      onChange={(e) => handleFileChange(e, 'doc2')}
       />
    <label> نسخة من عقد الازدياد :</label><br></br>
    <input 
      type="file"
      id="doc3"
      name="doc3"
      onChange={(e) => handleFileChange(e, 'doc3')}
    /><br></br>
    <label >  نسخة من السجل العدلي أو من السوابق العدلية    :</label>
    <input 
      type="file"
      id="doc4"
      name="doc4"
      onChange={(e) => handleFileChange(e, 'doc4')}
    /><br></br>
    <label >ثلاث صور فوتوغرافية حديثة العهد بالنسبة للشخص الذاتي :</label>
    <input 
      type="file"
      id="doc5"
      name="doc5"
      onChange={(e) => handleFileChange(e, 'doc5')}
    /><br></br>
    <label >  جذاذة معلومات حول المؤسس/ المتصرف  :</label><br></br>
    <input 
      type="file"
      id="doc6"
      name="doc6"
      onChange={(e) => handleFileChange(e, 'doc6')}
    /><br></br>
    <label >نسخة من القانون الأساسي إذا كان المؤسس شخصا معنويا (شركة) إضافة إلى البيانات الخاصة بجميع المساهمين وحصصهم وفق النموذج المقدم إلى الإدارة المعنية عند تأسيس الشرك:</label>
    <input 
      type="file"
      id="doc7"
      name="doc7"
      onChange={(e) => handleFileChange(e, 'doc7')}
    /><br></br>
    <label>سخة مصادق عليها من دفتر التحملات  :</label>
    <input 
      type="file"
      id="doc8"
      name="doc8"
      onChange={(e) => handleFileChange(e, 'doc8')}
    /><br></br>
    <label >استمارة التوقيع :</label><br></br>
    <input 
      type="file"
      id="doc9"
      name="doc9"
      onChange={(e) => handleFileChange(e, 'doc9')}
    /><br></br>
    <label >تصميم لبناية المؤسسة يبين استعمالها كمؤسسة للتعليم المدرسي الخصوصي:</label>
    <input 
      type="file"
      id="doc10"
      name="doc10"
      onChange={(e) => handleFileChange(e, 'doc10')}
    /><br></br>

<label >رخصة البناء + شهادة المطابقة:</label><br></br>
    <input 
      type="file"
      id="doc11"
      name="doc11"
      onChange={(e) => handleFileChange(e, 'doc11')}
     
    /><br></br>

<label htmlFor="acteNaissance">نسخة من شهادة الملكية وعقد كرائها يبين استعمالها كمؤسسة تعليمية:</label><br></br>
    <input
      type="file"
      id="doc12"
      name="doc12"
      onChange={(e) => handleFileChange(e, 'doc12')}
    /><br></br>
    <label htmlFor="acteNaissance"> الشهادة السلبية المتعلقة بتسمية المؤسسة مع مراعاة مدة صلاحية الوثيقة :</label><br></br>
    <input
      type="file"
      id="doc13"
      name="doc13"
      onChange={(e) => handleFileChange(e, 'doc13')}
    /><br></br>
    <label htmlFor="acteNaissance"> شهادة إدارية تثبت صلاحية البناية المراد استعمالها وتوفرها على الشروط الصحية مسلمة من طرف السلطات المختصة   :</label><br></br>
    <input
      type="file"
      id="doc14"
      name="doc14"
      onChange={(e) => handleFileChange(e, 'doc14')}
    /><br></br>
    <label htmlFor="acteNaissance">خبرة تقنية تثبت سلامة البناية:</label><br></br>
    <input
      type="file"
      id="doc15"
      name="doc15"
      onChange={(e) => handleFileChange(e, 'doc15')}
    /><br></br>
    <label htmlFor="acteNaissance">البطاقة التقنية لمشروع احداث مؤسسة تعليمية خصوصية موقعة من طرف المهندس المشرف على المشروع</label><br></br>
    <input
      type="file"
      id="doc16"
      name="doc16"
      onChange={(e) => handleFileChange(e, 'doc16')}
    /><br></br>
    <label htmlFor="acteNaissance">بیان مفصل لمختلف مرافق المؤسسة يحدد عدد الحجرات والفصول الدراسية:</label>
    <input
      type="file"
      id="doc17"
      name="doc17"
      onChange={(e) => handleFileChange(e, 'doc17')}
    /><br></br>

    <label htmlFor="acteNaissance">صور فوتوغرافية لمختلف مرافق المؤسسة:</label><br></br>
    <input
      type="file"
      id="doc18"
      name="doc18"
      onChange={(e) => handleFileChange(e, 'doc18')}
    /><br></br>
    <label htmlFor="acteNaissance">  لائحة التجهيزات والوسائل الديداكتيكية اللازمة + نسخة من المعدات المخبرية :</label><br></br>
    <input
      type="file"
      id="doc19"
      name="doc19"
      onChange={(e) => handleFileChange(e, 'doc19')}
    /><br></br>
    <label htmlFor="acteNaissance">عقدة شراكة لاستغلال الملاعب الرياضية في حالة عدم توفرها بالنسبة لمؤسسات التعليم الثانوي بسلكيه:</label><br></br>
    <input
      type="file"
      id="doc20"
      name="doc20"
      onChange={(e) => handleFileChange(e, 'doc20')}
    /><br></br>

     
<label htmlFor="acteNaissance"> النظام الداخلي للمؤسسة :</label><br></br>
    <input
      type="file"
      id="doc21"
      name="doc21"
      onChange={(e) => handleFileChange(e, 'doc21')}
    /><br></br>
    <label htmlFor="acteNaissance">برنامج الدراسة والحصص والكتب الأخرى المستعملة إلى جانب الكتب المعمول بها في التعليم العمومي:</label>
    <input
      type="file"
      id="doc22"
      name="doc22"
      onChange={(e) => handleFileChange(e, 'doc22')}
    /><br></br>
    <label htmlFor="acteNaissance">عقد مع طبيب:</label><br></br>
    <input
      type="file"
      id="doc23"
      name="doc23"
      onChange={(e) => handleFileChange(e, 'doc23')}
    /><br></br>

    <label htmlFor="acteNaissance">التزام باستمرار المؤسسة في العمل إلى نهاية السنة الدراسية:</label>
    <input
      type="file"
      id="doc24"
      name="doc24"
      onChange={(e) => handleFileChange(e, 'doc24')}
    /><br></br>
    
    <p style={{color:"red"}}>ملاحظة: من المستحسن تقديم الوثائق في ثلاث نسخ ، ويجب أن تكون أي نسخة من وثيقة رسمية مصدقة وفقًا للأصل.</p>
    
    
     <button className='btn btn-primary' type="submit" style={{marginRight:"50%" , width:"  20%"}}>إرسال</button>
     <br></br>
     <br></br>
  </form>
  
   
  <br></br>
</div>
</div>
  );
}
  
export default Formulair;
