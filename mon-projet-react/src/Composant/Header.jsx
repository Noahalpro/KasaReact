import logokasa from '../assets/logokasa.png';

import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
    return (
        <>
        <section className='Headerr'>
            <img src={logokasa} alt="logo kasa" />
        <nav>
      <ul className='navbar'>
        
      <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="About/">À propos</Link>
        </li>
      </ul>
    </nav>
    
    </section>
        </>
    )
}

export default Header;