export const createMovement = (movement) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('movements').add({
            ...movement
        }).then(() => {
            dispatch({type: 'ADD_MOVEMENT', movement});
        }).catch(err => {
            dispatch({type: 'ADD_MOVEMENT_ERROR', err});
        });
    }
};

