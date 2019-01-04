export const createMovement = (movement) => {
    return (dispatch, getState) => {
        dispatch({type: 'ADD_MOVEMENT', movement});
    }
};

