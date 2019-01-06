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
            return state;
        case 'REGISTER_SUCCES':
            return {
                ...state,
                authError: null
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        default:
            break;
    }
    return state;
}

export default authReducer;
