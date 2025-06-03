import { Routes, Route } from 'react-router-dom';
import Layout from './Composant/Layout'; 
import Home from './Pages/Home';
import A_propos from './Pages/A_propos';
import Introuvable from './Pages/Introuvable';
import Logement from './Pages/Fiche_logement'; 

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home />} />
        <Route path ="Home" element={<Home />} />
      
        <Route path="logement/:id" element={<Logement />} />
        
        <Route path="about" element={<A_propos />} />

        <Route path="*" element={<Introuvable />} />



      </Route>
    </Routes>
  );
}

export default AppRouter;
