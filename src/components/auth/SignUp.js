import React, { Component } from 'react'

export class SignUp extends Component {

    state = {
        email: null,
        password: null,
        firstName: null,
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
    }
  render() {
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
                <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
                <input type="text" id="lastName" onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Entrar</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp
