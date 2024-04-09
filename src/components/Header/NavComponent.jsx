import { Link } from "react-router-dom";

const NavComponent = (props) => {
    return (<>
        <nav>
            <ul>
                <li className='li'><Link to="/" id="li--text1" className={`li--text1 ${props.class1}`}></Link></li>
                <li className='li'><Link to="/about" id="li--text2" className={`li--text2 ${props.class2}`}></Link></li>
            </ul>
        </nav>
    </>)
}

export default NavComponent