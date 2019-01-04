import authReducer from './authReducer';
import movementReducer from './movementReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    movement: movementReducer
});

export default rootReducer;