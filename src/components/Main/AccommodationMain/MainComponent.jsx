import { useParams } from "react-router-dom";
import Logements from '../../../../logements.json';
import CarouselComponent from './CarouselComponent';
import ContentComponent from './ContentComponent';

const MainComponent = () => {
    const { id } = useParams();
    const ActualLogement = Logements.find((logement) => logement.id === id);
    if(!ActualLogement){
        window.location.href = '/error'
    }
    return(
        <main className="MainAccomodation">
            <CarouselComponent element={ActualLogement} />
            <ContentComponent element={ActualLogement} />
        </main>
    )
}

export default MainComponent