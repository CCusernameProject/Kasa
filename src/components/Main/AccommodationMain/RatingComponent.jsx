import StarIcon from '../../../assets/icons/starIcon'

const RatingIcons = [
    { color: "" },
    { color: "" },
    { color: "" },
    { color: "" },
    { color: "" }
]

const RatingComponent = (props) => {
    for(let i = 0; i < RatingIcons.length; i++) {
        if(i < props.element) {
            RatingIcons[i].color = "#FF6060"
        } else {
            RatingIcons[i].color = "#E3E3E3"
        }
    }
    return (
        <div className='Star'>
            {RatingIcons.map((RatingIcon, index) => (
                <div key={index}>
                    <StarIcon width="24.75px" height="24px" color={RatingIcon.color} />
                </div>
            ))}
        </div>
    )
}

export default RatingComponent