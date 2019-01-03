import React from 'react';
import { NavLink } from 'react-router-dom';

const SecureLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Movimiento</NavLink></li>
            <li><NavLink to="/">Cerrar</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating red ">FM</NavLink></li>
        </ul>
    )
}

export default SecureLinks;