import { useState } from 'react'
import ArrowDown from '../../../assets/icons/arrowDownIcon'
import DescriptionText from '../Description'

const BoxComponent = (props) => {
    const [DescriptionVisible, setDescriptionVisible] = useState(false);
    return (
        <div id='BoxComponent' className="BoxComponent">
            <div className="BoxComponent--text-Icon">
                <span className="text">{props.title}</span>
                <div onClick={() => setDescriptionVisible(!DescriptionVisible)}>
                    <ArrowDown fill="white" width="20px" height="20px" class={DescriptionVisible ? 'ArrowDown ArrowUp' : 'ArrowDown ArrowDownBack'}/>
                </div>
            </div>
            {DescriptionVisible && <DescriptionText id={props.id} description={props.description} /> }
        </div>
    )
}

export default BoxComponent