import Logements from '../../../../logements.json'
import { Link } from "react-router-dom";
import MainComponent from '../AccommodationMain/MainComponent';

const LogementsDiplay = () => {
    return (
        <div className='containerBox'>
            {Logements.map((Logement, index) => (
                <div key={index} className='ImageElement'>
                    <img className='ImageElement--image' src={Logement.cover} alt={Logement.title}></img>
                    <div className='BoxShadow'>
                        <p className='BoxShadow--text'>{Logement.title}</p>
                    </div>
                    <Link className='ImageElement--link' onClick={() => MainComponent(Logement ? Logement : "Erreur")} to={`/logement/${Logement.id}`}></Link>
                </div>
            ))}
        </div>
    )
}

export default LogementsDiplay