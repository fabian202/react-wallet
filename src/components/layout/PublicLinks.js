import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PublicLinks extends Component {
    componentDidMount() {
        console.log('did mount');
        const elem = document.querySelector(".sidenav");
        const instance = window.M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });

        console.log(instance)
    }

    render() {
        return (
            <div>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/register">Registro</NavLink></li>
                    <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>

                <ul className="sidenav" id="slide-out">
                <li>
                        <div className="divider" />
                    </li>
                    <li><NavLink to="/register">Registro</NavLink></li>
                    <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default PublicLinks;