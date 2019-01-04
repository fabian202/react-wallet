const initState = {
    movements: [
        {description: 'Gasolina', amount: 20000, type: 'Outcome', date: '01-01-2019'},
        {description: 'Pago deuda', amount: 350000, type: 'Income', date: '02-01-2019'},
        {description: 'Me encontré dinero', amount: 3000, type: 'Income', date: '01-01-2019'}
    ]
}

const movementReducer = (state = initState, action) => {

    console.log(action);
    
    switch (action.type) {
        case 'ADD_MOVEMENT':
            console.log('added', action.movement);
            break;
        case 'ADD_MOVEMENT_ERROR':
            console.log('errorr', action.err)
            break;
        default:
            break;
    }
    return state;
}

export default movementReducer;
