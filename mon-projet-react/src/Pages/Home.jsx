
import biens from '../logements.json';
import './Home.scss';
import ImageAccueil from '../assets/ImageAccueil.png'
import Card from '../Composant/card'

function Home() {
    return (
        <div className='BodyHome'>
            
        <section className="ImageAccueil">
        <img src={ImageAccueil} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
        <p className='hphone'>Chez vous,<br />partout et ailleurs</p>
        </section>
        <div className="GalleryLocation">
        {biens.map((bien) => (
        <Card
          id={bien.id}
          key= {bien.id}
          title={bien.title}
          location={bien.location}
          cover={bien.cover}
        />
      ))}
        </div>

    </div>

)}

export default Home