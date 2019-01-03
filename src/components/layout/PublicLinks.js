import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicLinks = () => {
    return (
    <ul className="right hide-on-med-and-down">
        <li><NavLink to="/register">Registro</NavLink></li>
        <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
    </ul>
    )
}

export default PublicLinks;