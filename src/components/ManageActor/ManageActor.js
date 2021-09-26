import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SelectedActor from '../SelectedActor/SelectedActor';
import './ManageActor.css'

const ManageActor = () => {
    const [actors, setActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [doesExist, setDoesExist] = useState(false)

    // Load all data
    useEffect(() => {
        fetch('./actor.JSON')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])

    // Add new actor if doesn't exist in the list
    const onAddNewActor = actor => {
        const exist = selectedActors.find(selectedActor => selectedActor.id === actor.id)
        if (!exist) {
            setDoesExist(false);
            setSelectedActors([...selectedActors, actor])
        } else {
            setDoesExist(true);
        }
    }

    //Remove added actor
    const onRemoveAddedActor = actorID => {
        setDoesExist(false);
        const afterRemove = selectedActors.filter(selectedActor => selectedActor.id !== actorID);
        setSelectedActors(afterRemove);
    }

    // Update totall spent
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

            {/* Display all selected actors and totall spent amount*/}
            <div className="added-actor-container">
                <h3>
                    <i className="fab fa-monero"></i> Total spent: {total} <span className="bdt">৳</span>
                </h3>
                <h3><i className="fas fa-users"></i> List of added actors</h3>
                <ErrorMessage doesExist={doesExist}></ErrorMessage>
                <div className="selected-actor-container">
                    {
                        selectedActors.map(selectedActor => <SelectedActor
                            key={selectedActor.id}
                            id={selectedActor.id}
                            img={selectedActor.img}
                            name={selectedActor.name}
                            onRemoveAddedActor={onRemoveAddedActor}
                        ></SelectedActor>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageActor;