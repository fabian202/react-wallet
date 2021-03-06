import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom'

const ListMovement = ({movements}) => {
    const moves = movements && movements.map((movement, i) => {
        return (
            <li className="collection-item" key={movement.id}>
                <div className="collection-wrapper">
                    <span className='title'>{ movement.description }</span>
                    <p>{ movement.amount }</p>
                    { movement.date }
                    <Link to={'/movement/' + movement.id} className="secondary-content"><i className="material-icons">send</i></Link>
                </div>
            </li>
        )
    });

    return (

            <ul className='collection with-header'>
                <li className="collection-header"><h5>Movimientos</h5></li>
                { moves && moves.length ? moves : <li>No hay movimientos <Link to="/movement" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link></li> }
            </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        movements: state.firestore.ordered.movements,
        uid: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'movements',
            where: ['uid', '==', props.uid]
        }
    ])
)(ListMovement);