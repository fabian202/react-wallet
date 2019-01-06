import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SecureLinks = (props) => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movement">Movimiento</NavLink></li>
            <li><a onClick={props.signOut}>Cerrar</a></li>
            <li><NavLink to="/" className="btn btn-floating red ">FM</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SecureLinks);