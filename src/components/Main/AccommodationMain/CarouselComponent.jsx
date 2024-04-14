import { useState } from 'react'
import Arrow from '../../../assets/icons/arrowDownIcon'

const CarouselComponent = (props) => {
    const [actualImage, setactualImage] = useState(0)
    const pictures = props.element.pictures

    const ClickedArrow = (side) => {
        const image = document.getElementById('ImageCarousel')
        const Number = document.getElementById('Number')
        if(side === "Right"){
            setactualImage(actualImage + 1)
            if(actualImage >= pictures.length - 1){
                setactualImage(0)
            }
            image.src = pictures[actualImage]
        } else if(side !== "Right") {
            setactualImage(actualImage - 1)
            if(actualImage === 0){
                setactualImage(pictures.length - 1)
            }
            image.src = pictures[actualImage]
        }
    }
    
    if(pictures.length !== 1) {
        return (
            <div className='MainAccomodation--Component'>
                <div className="MainAccomodation--Component--Carousel">
                    <img id='ImageCarousel' className='img' src={pictures[actualImage]}></img>
                </div>
                <div id='ArrowAndNumber' className='MainAccomodation--Component--Arrow' >
                    <div onClick={() => ClickedArrow("Left")}>
                        <Arrow id="Arrow" class="Arrow Arrow--Left" fill="white" height="100px" width="100px" />
                    </div>
                    <div onClick={() => ClickedArrow("Right")}>
                        <Arrow id="Arrow" class="Arrow Arrow--Right" fill="white" height="100px" width="100px" />
                    </div>
                </div>
                <div className='MainAccomodation--Component--Number'>
                    <span id='Number' className='text'>{`${actualImage + 1} / ${pictures.length}`}</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className='MainAccomodation--Component'>
                <div className="MainAccomodation--Component--Carousel">
                    <img id='ImageCarousel' className='img' src={pictures[actualImage]}></img>
                </div>
            </div>
        )
    }
}

export default CarouselComponent