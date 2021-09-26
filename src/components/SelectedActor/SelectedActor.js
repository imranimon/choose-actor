import React from 'react';
import './SelectedActor.css'

const SelectedActor = (props) => {
    return (
        // Selected actor conatiner
        <div className="selected-actor">
            <div className="selected-actor-info">
                <img height="45" width="65" src={props.img} alt="" />
                <p>{props.name}</p>
            </div>
            <button onClick={()=>props.onRemoveAddedActor(props.id)}>X</button>
        </div>
    );
};

export default SelectedActor;