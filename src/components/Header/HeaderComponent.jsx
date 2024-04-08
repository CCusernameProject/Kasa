import LogoKasa from '../../assets/icons/logoIcons'
import NavComponent from './NavComponent'

const HeaderComponent = () => {
    return (
        <header className='header'>
            <LogoKasa width="211" height="68" fill="#FF6060"/>
            <NavComponent />
        </header>
    );
}

export default HeaderComponent