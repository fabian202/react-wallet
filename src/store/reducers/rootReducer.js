import authReducer from './authReducer';
import movementReducer from './movementReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    movement: movementReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;