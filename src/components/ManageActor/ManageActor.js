import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import SelectedActor from '../SelectedActor/SelectedActor';
import './ManageActor.css'

const ManageActor = () => {
    const [actors, setActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);

    // Load all data
    useEffect(() => {
        fetch('./actor.JSON')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])

    // Select new actor
    const onAddNewActor = actor => {
        const newAdded = [...selectedActors, actor]
        setSelectedActors(newAdded)
    }

    // Calculate totall salary
    let total = 0;
    for (const actor of selectedActors) {
        total = total + actor.salary;
    }
    return (
        <div className="manage-actor-container">

            {/* Load all the actors */}
            <div className="actors-container">
                {
                    actors.map(actor => <Actor
                        key={actor.id}
                        actor={actor}
                        onAddNewActor={onAddNewActor}
                    ></Actor>)
                }
            </div>

            {/* Display all selected actors */}
            <div className="added-actor-container">
                <h3><i className="fab fa-monero"></i> Total spent: {total}</h3>
                <h3><i className="fas fa-users"></i> List of added actors</h3>
                <div className="selected-actor-container">
                    {
                        selectedActors.map(selectedActor => <SelectedActor
                            img={selectedActor.img}
                            name={selectedActor.name}
                        ></SelectedActor>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageActor;