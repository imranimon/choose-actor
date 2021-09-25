import React from 'react';
import './Actor.css'

const Actor = (props) => {
    console.log(props.actor)
    const { name, age, img, salary, role, gender } = props.actor;
    return (
        <div className="actor-container">
            <div className="actor-img">
                <img width="300" height="250" src={img} alt="" />
            </div>
            <div className="actor-info">
                <p><span>Name: </span>{name}</p>
                <p><span>Role: </span>{role}</p>
                <p><span>Salary: </span>{salary} <span className="bdt">৳</span></p>
                <p><span>Age: </span>{age}</p>
                <p><span>Gender: </span>{gender}</p>
            </div>
            <button><i class="fas fa-user-plus"></i> Add To List</button>
        </div>
    );
};

export default Actor;