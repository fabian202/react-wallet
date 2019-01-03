import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicLinks = () => {
    return (
    <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Registro</NavLink></li>
        <li><NavLink to="/">Iniciar Sesión</NavLink></li>
    </ul>
    )
}

export default PublicLinks;