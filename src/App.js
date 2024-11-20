import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auto from './Component/Auto/Auto';
import Formulair from './Component/Formulair/Formulair';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import EcolePriviee from './Component/Ecolpriviee/EcolePriviee';
import Bts from './Component/Bts/Bts';
import Cpge from './Component/CPGE/Cpge';
import Langues from './Component/Les langues/Langues';
import Navbar from './Component/Navbar/Navbar';

import Edite from './Component/Editer/Edite';
import HistoriqueSuppressions from './Component/HistoriqueSuppressions/HistoriqueSuppressions';
import EcoleDetails from './Component/EcoleDetyailes/EcoleDetails';
import Footer from './Component/Footer/Footer';




function App() {
  return (
    
      <div >
         
        <Routes>
          <Route path="/" element={<Auto />} />
          <Route path="/Formulair" element={<Formulair />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/EcolePriviee" element={<EcolePriviee />} />
          <Route path="/Bts" element={<Bts />} />
          <Route path="/Cpge" element={<Cpge />} />
          <Route path="/Langues" element={<Langues />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/EcolePriviee/Edite/:id" element={<Edite />} />
          <Route path='/Historique' element={<HistoriqueSuppressions/>}/>
          <Route  path='/Footer' element={<Footer/>} />
        
        </Routes>
       
      </div>
   
  );
}

export default App;
