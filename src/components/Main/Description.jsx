import { useState, useEffect } from "react";

const Arrow = document.getElementById('ArrowDown');
const DescriptionText = (props) => {

    return (
        <div id={`Description-${props.id}`} className={`BoxComponent--description`}>
            {props.description}
        </div>
    )
}

export default DescriptionText