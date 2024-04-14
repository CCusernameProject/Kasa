const DescriptionText = (props) => {
    if (Array.isArray(props.description)) {
        return (
            <div id={`Description-${props.id}`} className={`${props.class} ${props.class2}`}>
                {props.description.map((des, index) => (
                    <p key={index}>{des}</p>
                ))}
            </div>
        )
    } else {
        return (
            <div id={`Description-${props.id}`} className={`${props.class} ${props.class2}`}>
                {props.description}
            </div>
        )
    }
}

export default DescriptionText