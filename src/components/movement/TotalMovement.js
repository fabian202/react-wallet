import React from 'react';
import { connect } from 'react-redux'

const TotalMovement = ({ profile }) => {
    return (
        <div className="card grey lighten-2 hoverable">
            <div className="card-content">
                <span className="card-title center-align">{ profile.amount } $</span>
            </div>
        </div>
    );
}

const mapsStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapsStateToProps)(TotalMovement);