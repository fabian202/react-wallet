import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import{ Redirect } from 'react-router-dom';

export class SignIn extends Component {

    state = {
        email: null,
        password: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
  render() {
    const { authError, auth } = this.props;
    let { from } = this.props.location.state || { from: { pathname: "/" } };
      
    if(auth.uid) return <Redirect to={from} />
      
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Iniciar Sesión</h5>
            <div className="input-field">
                <input type="email" id="email" onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
                <input type="password" id="password" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Entrar</button>
                <div className="red-text center">
                    { authError ? <p>{ authError }</p> : null}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
