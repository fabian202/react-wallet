export const createMovement = (movement) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({type: 'ADD_MOVEMENT', movement});
    }
};

