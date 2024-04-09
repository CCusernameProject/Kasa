import HeaderComponent from '../Header/HeaderComponent';
import MainHomeComponent from '../Main/HomeMain/MainComponent';
import FooterComponent from '../Footer/FooterComponent'

const Accueil = () => {
    return (
        <>
            <HeaderComponent class1="blackBorder" class2="invisibleBorder" />
            <MainHomeComponent />
            <FooterComponent />
        </>
    )
}

export default Accueil