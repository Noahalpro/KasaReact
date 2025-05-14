import biens from '../logements.json';
import './Home.scss';
import ImageAccueil from '../assets/ImageAccueil.png'

function Card ({location,cover,title}) {
    return (
    <figure className="CardLocation">
        <img src={cover} alt={title} />
    <div className="titlecard">
      <h2>{location}</h2>

    </div>

    </figure>
)}

function Home() {
    console.log('Home rendu ✅');
    return (
        <div className='BodyHome'>
            
        <section className="ImageAccueil">
        <img src={ImageAccueil} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
        </section>
        <div className="GalleryLocation">
        {biens.map((bien) => (
        <Card
          key={bien.id}
          title={bien.title}
          location={bien.location}
          cover={bien.cover}
        />
      ))}
        </div>

    </div>

)}

export default Home