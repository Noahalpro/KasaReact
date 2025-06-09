import './Carrousel.scss'
import { useState } from 'react';
import fleche from '../assets/fleched.png';
import flecheP from '../assets/precedent.png';

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flechesuivant = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const flecheprecedent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="carrousel">
      <button
        className="BoutonS"
        onClick={flechesuivant}
        style={{ display: images.length === 1 ? 'none' : null }}
      >
        <img src={fleche} alt="flèche suivante" />
      </button>

      <img src={images[currentIndex]} alt={`photo ${currentIndex + 1}`} />

      <button
        className="BoutonP"
        onClick={flecheprecedent}
        style={{ display: images.length === 1 ? 'none' : null }}
      >
        <img src={flecheP} alt="flèche précédente" />
      </button>
    </div>
  );
}


export default Carrousel;