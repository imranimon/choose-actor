import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <a href="/">Choose Actor</a>
            </div>
            <div className="header-bellow">
                <h3>Let's Make A New Bengali Drama</h3>
                <p>Chosse your favourite actor and actress and we will cast them on our next project</p>
                <p>Budget: 1000000 <span className="bdt">৳</span></p>
            </div>
        </div>


    );
};

export default Header;