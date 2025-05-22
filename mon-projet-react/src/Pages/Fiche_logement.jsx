import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import fleche from '../assets/fleched.png'
import flecheP from '../assets/precedent.png'
import Dropdown from '../Composant/menuderoulant';
import './Fiche_logement.scss'
import staractive from '../assets/Vector.png'
import starinactive from '../assets/star-inactive 1.png'



function Logement() {

    
    
const [currentIndex, setCurrentIndex] = useState(0);
const flechesuivant = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < bien.pictures.length - 1 ? prevIndex + 1 : 0
    );
  };
const flecheprecedent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : bien.pictures.length - 1
    );
  };
  const { id } = useParams();
  const bien = logements.find((b) => b.id === id);
  const longueur = bien.pictures.length

  

  if (!bien) return <p>Ce logement n’existe pas.</p>;

  return (

    <div className="fiche-logement">

    <div className="carrousel">
      
        
    <button className='BoutonS' onClick={flechesuivant} style={{ display: bien.pictures.length === 1 ? 'none' : null }}>
        <img src={fleche} alt="" />
    </button>
          <img src={bien.pictures[currentIndex]}  alt={`photo ${currentIndex + 1}`} />
    
    <button className='BoutonP' onClick={flecheprecedent} style={{ display: bien.pictures.length === 1 ? 'none' : null }} >
        <img src={flecheP} alt="" />
    </button>
      </div>
    

    <div className='Descriptionlogement'>
            <div className='Titrelogement'>
            
          <h1>{bien.title}</h1>
            <p>{bien.location}</p>
            <div className='listeTag'>
            {bien.tags.map((tag, index) => (
            <span className="tag" key={index}>
             {tag}
            </span>
            ))}
            </div>

            </div>

            <div className='hostNrating'>
                <div className='PartieHost'>
                    <p>{bien.host.name}</p>
                    <img src={bien.host.picture} alt="photo du host" className='imagehost' />
        
    
                </div>

                <div className='PartieRating'>
                   {bien.rating === "5" && (
                    <>
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    </>
                )}
                {bien.rating === "4" && (
                    <>
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    </>
                )}

                {bien.rating === "3" && (
                    <>
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    </>
                )}

                {bien.rating === "2" && (
                    <>
                    
                    <img src={staractive} alt="" />
                    
                    <img src={staractive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    </>
                )}

                {bien.rating === "1" && (
                    <>
                    
                    <img src={staractive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    
                    <img src={starinactive} alt="" />
                    </>
                )}

                </div>
            </div>

          </div>

          <div className='modules'>
            
        <Dropdown title="Description" className='dropdown-logement'>
           <p>
            {bien.description}
            </p>
         </Dropdown>
         
        <Dropdown title="équipements" className='dropdown-logement'>
           <p>
            {bien.equipments.join(', ')}
           </p>
         </Dropdown>
          </div>

    
    </div>
  );
}

export default Logement;
