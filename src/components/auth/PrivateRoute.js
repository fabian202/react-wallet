import React from 'react';
import{ Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest}) => {
  return (
    <Route 
        {...rest}
        render={props => auth.uid ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
        )}
    />
  )
}


const mapStatetoProps = (state) => {
    return {
        auth: state.firebase.auth
    }
} 

export default connect(mapStatetoProps)(PrivateRoute);