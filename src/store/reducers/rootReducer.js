import authReducer from './authReducer';
import movementReducer from './movementReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    movement: movementReducer,
    firestore: firestoreReducer
});

export default rootReducer;