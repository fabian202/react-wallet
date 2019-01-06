import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

class SecureLinks extends Component {
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
        const { profile, signOut } = this.props;

        return (
            <div>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movement">Movimiento</NavLink></li>
                    <li><a onClick={signOut}>Cerrar</a></li>
                    <li><NavLink to="/" className="btn btn-floating red ">{ profile.initials }</NavLink></li>
                </ul>
    
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
    
                <ul className="sidenav" id="slide-out">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movement">Movimiento</NavLink></li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li><a onClick={signOut}>Cerrar</a></li>
                    <li><NavLink to="/" className="btn btn-floating red ">{ profile.initials }</NavLink></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecureLinks);