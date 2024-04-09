import LogoKasa from '../../assets/icons/logoIcons'
import NavComponent from './NavComponent'

const HeaderComponent = (props) => {
    return (
        <header className='header'>
            <LogoKasa width="211" height="68" fill="#FF6060"/>
            <NavComponent class1={props.class1} class2={props.class2}/>
        </header>
    );
}

export default HeaderComponent