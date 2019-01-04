import React from 'react';

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

export default ListMovement;