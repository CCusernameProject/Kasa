import RatingComponent from "./RatingComponent"
import GetElementComponent from "./getElementComponent"
import ArrowDown from "../../../assets/icons/arrowDownIcon"
import BoxComponent from "../AboutMain/BoxComponent"

const ContentComponent = (props) => {
    return (
        <div className="MainAccomodation--Component MainAccomodation--Component--About">
            <div className="TitleOrLocation">
                <p className="TitleOrLocation--Title">{props.element.title}</p>
                <p className="TitleOrLocation--Location">{props.element.location}</p>
            </div>
            <div className="NameOrPicture">
                <p className="NameOrPicture--Name">{props.element.host.name}</p>
                <img className="NameOrPicture--Picture" src={props.element.host.picture} alt="" />
            </div>
            <GetElementComponent class="tags" class2="text" element={props.element.tags}/>
            <RatingComponent element={props.element.rating}/>
            <div className="About3">
                <div className="About3--Button">
                    <div className="title">
                        <BoxComponent title="Description" description={props.element.description}/>
                    </div>
                </div>
                <div className="About3--Button">
                    <div className="title">
                        <BoxComponent title="Equipements" description={props.element.equipments} valeur={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentComponent