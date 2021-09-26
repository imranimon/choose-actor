import React from 'react';
import './SelectedActor.css'

const SelectedActor = (props) => {
    return (
        // Selected actor conatiner
        <div className="selected-actor">
            <img height="45" width="65" src={props.img} alt="" />
            <p>{props.name}</p>
        </div>
    );
};

export default SelectedActor;