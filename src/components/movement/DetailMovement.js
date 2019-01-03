import React from 'react'

const DetailMovement = (props) => {
    const id = props.match.params.id;
    console.log(id);

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Nombre movimiento</span>
            <p>$ 50000</p>
            <p>Ingreso</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>2 de Enero de 2019</div>
        </div>
      </div>
    </div>
  )
}

export default DetailMovement
