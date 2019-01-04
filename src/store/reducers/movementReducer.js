const initState = {
    movements: [
        {description: 'Gasolina', amount: 20000, type: 'Outcome', date: '01-01-2019'},
        {description: 'Pago deuda', amount: 350000, type: 'Income', date: '02-01-2019'},
        {description: 'Me encontré dinero', amount: 3000, type: 'Income', date: '01-01-2019'}
    ]
}

const movementReducer = (state = initState, action) => {
    return state;
}

export default movementReducer;
