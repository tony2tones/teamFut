export const signIn = (credentials) => {
    return(dispatch, getState, { getFirebase }) =>{
        const firebase = getFirebase();

        firebase.auth().SignInWithEmailAndPassword(
            credentials.email,
            credentialscredentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(() =>{
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}