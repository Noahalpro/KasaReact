import { Routes, Route } from 'react-router-dom';
import Layout from './Composant/Layout'; 
import Home from './pages/Home';
import A_propos from './pages/A_propos';
import Introuvable from './pages/Introuvable';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home />} />
        
        <Route path="about" element={<A_propos />} />

        <Route path="*" element={<Introuvable />} />

      </Route>
    </Routes>
  );
}

export default AppRouter;
