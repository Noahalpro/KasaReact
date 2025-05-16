import { useState } from 'react';
import './menuderoulant.scss';
import arrow from '../assets/arrowbro.svg';

function Dropdown({ title, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className= {`dropdown ${className}`}>
      <button
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        
        <img src={arrow} className={`arrow ${isOpen ? 'open' : ''}`} alt="Flèche déroulante" />
      </button>

      <div className={`dropdown-content ${isOpen ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
