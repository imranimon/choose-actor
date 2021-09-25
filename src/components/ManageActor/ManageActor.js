import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import './ManageActor.css'

const ManageActor = () => {
    const [actors, setActors] = useState([])
    useEffect(()=>{
        fetch('./actor.JSON')
        .then(res => res.json())
        .then(data => setActors(data))
    },[])
    return (
        <div className="manage-actor-container">
            <div className="actors-container">
                {
                    actors.map(actor=> <Actor key={actor.id} actor={actor}></Actor>)
                }
            </div>
            
            <div className="added-actor-container">
                <h3><i class="fab fa-monero"></i> Total spent: </h3>
                <h3><i class="fas fa-users"></i> List of added actors</h3>
            </div>
        </div>
    );
};

export default ManageActor;