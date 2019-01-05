import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const DetailMovement = (props) => {
  const { movement } = props;

  if (movement) { 
    const mov = movement[props.match.params.id];
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">{ mov.description }</span>
              <p>{ mov.amount }</p>
              <p>{ mov.type }</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
              <div>{ mov.date }</div>
          </div>
        </div>
      </div>) 
  } else  {
    return (<div>cargando</div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  
  return {
      movement: state.firestore.data.movements
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: 'movements', doc: props.match.params.id }
  ]),
  connect(mapStateToProps)
)(DetailMovement);
