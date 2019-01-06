const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Email y/o password no válido'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout');
            
            return state;
        default:
            break;
    }
    return state;
}

export default authReducer;
