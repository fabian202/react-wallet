import React from 'react';
import { Link } from 'react-router-dom';
import SecureLinks from './SecureLinks';
import PublicLinks from './PublicLinks';
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SecureLinks /> : <PublicLinks />;
    return (
        <nav>
            <div className="nav-wrapper blue darken-4">
                <Link to="/" className="brand-logo">Wallet</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStatetoProps = (state) => {
    return {
        auth: state.firebase.auth
    }
} 

export default connect(mapStatetoProps)(NavBar);