import Logements from '../../../../logements.json'
import { Link } from "react-router-dom";

const LogementsDiplay = () => {
    const images = []

    Logements.forEach((item, index) => {
        images.push(
            <div key={index} className='ImageElement'>
                <img className='ImageElement--image' id={index} src={item.cover} alt={item.title}></img>
                <div className='BoxShadow'>
                    <p className='BoxShadow--text'>{item.title}</p>
                </div>
                <Link className='ImageElement--link' to='/logement'></Link>
            </div>
        )
    })

    return <div className='containerBox'>{images}</div>
}

export default LogementsDiplay