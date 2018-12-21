const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
        console.log('login failed');
        return {
            ...state,
            authError: 'Login faileds'
        }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                state
            }
    }
    return state
}

export default authReducer;