import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    const display = currentUser ? (
        <ul className="second-navbar">
            <li><Link className="to-index" to="/photos">Explore</Link></li>
            <li><Link className="to-index" to="/albums">Albums</Link></li>
            {/* <li>People</li> */}
            {/* <li>Groups</li> */}
        </ul>
    ) : (
            <ul className="second-navbar">
                <li><Link className="to-index" to="/photos">Photos</Link></li>
                <li><Link className="to-index" to="/albums">Albums</Link></li>
                {/* <li>People</li> */}
                {/* <li>Groups</li> */}
            </ul>
        );

    return (
        <header className="second-header">
            <nav className="second-header-navbar">

                {display}

            </nav>
        </header>
    );
};