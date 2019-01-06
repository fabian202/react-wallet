export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err});
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const register = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                name: user.name,
                lastName: user.lastName,
                initials: user.name[0] + user.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'REGISTER_SUCCESS'});
        }).catch(err => {
            console.log('un errorcini')
            dispatch({ type: 'REGISTER_ERROR', err})
        })
    }
}