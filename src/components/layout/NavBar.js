import React from 'react';
import { Link } from 'react-router-dom';
import SecureLinks from './SecureLinks';
import PublicLinks from './PublicLinks';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-4">
                <Link to="/" className="brand-logo">Wallet</Link>
                <SecureLinks />
                <PublicLinks />
            </div>
        </nav>
    )
}

export default NavBar;