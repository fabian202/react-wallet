import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const ListMovement = ({movements}) => {
    const moves = movements && movements.map((movement, i) => {
        return (
            <tr key={i}>
                <td>{ movement.description }</td>
                <td>{ movement.amount }</td>
                <td>{ movement.date }</td>
            </tr>
        )
    });
    return (
        <div>
            <h3 className="header">Movimientos</h3>
            <table className="highlight"> 
                <tbody>
                    { moves }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        movements: state.firestore.ordered.movements
    }
}

// export default firestoreConnect()(ListMovement);

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'movements'}
    ])
)(ListMovement);