const DescriptionText = (props) => { 
    return (
        <div id={`Description-${props.id}`} className={`${props.class} ${props.class2}`}>
            <p className="animationText">{props.description}</p>
        </div>
    )
}

export default DescriptionText