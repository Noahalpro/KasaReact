import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../Pages/Home.scss';

function Layout() {
  return (
    <>
        
      <main>
        <Header />
        <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default Layout;
