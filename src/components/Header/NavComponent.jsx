import { Link } from "react-router-dom";
import '../../styles/css/styles.css'

const NavComponent = () => {
    return (<>
        <nav>
            <ul>
                <li className='li'><Link to="/" className='li--text1'></Link></li>
                <li className='li'><Link to="/about" className='li--text2'></Link></li>
            </ul>
        </nav>
    </>)
}

export default NavComponent