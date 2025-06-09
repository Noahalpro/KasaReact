import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../logements.json';

import Carrousel from '../Composant/Carrousel';
import Collapse from '../Composant/Collapse';
import './FicheLogement.scss'
import staractive from '../assets/Vector.png'
import starinactive from '../assets/star-inactive 1.png'



function FicheLogement() {

  
  const { id } = useParams();
  const bien = logements.find((b) => b.id === id);

  if (!bien) {
    return <Navigate to="/404" replace />;
  }

  return (

    <div className="fiche-logement">

    
    <Carrousel images={bien.pictures} />
    
    

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
            
        <Collapse title="Description" className='dropdown-logement'>
           <p>
            {bien.description}
            </p>
         </Collapse>
         
        <Collapse title="Équipements" className='dropdown-logement'>
           <p>
            {bien.equipments.join(', ')}
           </p>
         </Collapse>
          </div>

    
    </div>
  );
}

export default FicheLogement;
