import { useNavigate } from 'react-router-dom';

function Card ({id,location,cover,title}) {

  const navigate = useNavigate();

  const Auclick = () => {
    navigate(`/logement/${id}`);
  };
    return (
    <figure className="CardLocation" onClick={Auclick}>
        <img src={cover} alt={title} />
    <div className="titlecard">
      <h2>{location}</h2>

    </div>

    </figure>
)}


export default Card;