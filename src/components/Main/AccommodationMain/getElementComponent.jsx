const getElementComponent = (props) => {
    const tables = props.element
    return (
        <div className={props.class}>
            {tables.map((table, index) => (
                <span className={props.class2} key={index}>{table}</span>
            ))}
        </div>
    )
}

export default getElementComponent