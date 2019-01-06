import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authActions';
import{ Redirect } from 'react-router-dom';

export class SignUp extends Component {

    state = {
        email: null,
        password: null,
        name: null,
        lastName: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.register(this.state);
    }
  render() {
      const { auth, authError } = this.props;

      if(auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Registro</h5>
            <div className="input-field">
                <input type="email" id="email" onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
                <input type="password" id="password" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-field">
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="name">Nombre</label>
            </div>
            <div className="input-field">
                <input type="text" id="lastName" onChange={this.handleChange} />
                <label htmlFor="lastName">Apellido</label>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Aceptar</button>
                <div className="red-text center">
                    { authError ? <p>{ authError }</p> : null}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(register(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
