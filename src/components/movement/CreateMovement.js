import React, { Component } from 'react'

export class CreateMovement extends Component {

    state = {
        description: null,
        amount: null,
        type: 'Income',
        date: new Date().toISOString().substr(0,10)
    };

    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    const date = new Date().toISOString().substr(0,10);
    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Registro</h5>
            <div className="input-field">
                <input type="text" id="description" name="description" onChange={this.handleChange} />
                <label htmlFor="description">Descripción</label>
            </div>
            <div className="input-field">
                <input type="number" id="amount" name="amount" onChange={this.handleChange} />
                <label htmlFor="amount">Cantidad</label>
            </div>
            <div className="input-field">
                <p>
                <label>
                    <input name="type" type="radio" checked={this.state.type === 'Income'} onChange={this.handleChange} value="Income" />
                    <span>Ingreso</span>
                </label>
                <label>
                    <input name="type" type="radio" checked={this.state.type === 'Outcome'} onChange={this.handleChange} value="Outcome" />
                    <span>Egreso</span>
                </label>

                </p>
            </div>
            <div className="input-field">
                <input type="date" id="date" name="date" onChange={this.handleChange} defaultValue={date} />
                <label htmlFor="date">Fecha</label>
            </div>
            <div className="input-field">
                <button className="btn red lighten-1 z-depth-0">Aceptar</button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateMovement
