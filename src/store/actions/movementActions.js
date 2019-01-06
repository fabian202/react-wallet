export const createMovement = (movement) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(getState)
        const { amount } = getState().firebase.profile;
        const { uid } = getState().firebase.auth;
        firestore.collection('movements').add({
            ...movement
        }).then(() => {
            var newAmount = movement.type === 'Income' ? amount + parseInt(movement.amount) : amount - parseInt(movement.amount);
            return firestore.collection('users').doc(uid).update({
                amount: newAmount
            });
        }).then(() => {
            dispatch({type: 'ADD_MOVEMENT', movement});
        }).catch(err => {
            dispatch({type: 'ADD_MOVEMENT_ERROR', err});
        });
    }
};

