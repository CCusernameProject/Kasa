import BoxComponent from './BoxComponent';

const description = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services. en laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
]

const AboutDisplay = () => {
    return (
        <div className="MainAbout--AboutDisplay" id='AboutDisplay'>
            <BoxComponent title="Fiabilité" description={description[0]} id="0" />
            <BoxComponent title="Respect" description={description[1]} id="1"/>
            <BoxComponent title="Service" description={description[2]} id="2"/>
            <BoxComponent title="Sécurité" description={description[3]} id="3"/>
        </div>
    )
}

export default AboutDisplay