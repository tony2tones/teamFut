export const joinGame = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
        //  const profile = getState().firebase.profile;
        //  const userId = getState().firebase.auth.uid;
         console.log('does it even get this far?');
        //  firestore.collection('users').doc(user.uid);
        //  firestore().collection('users').doc(user.uid).get().then(doc => {
        //     const newUser = doc.data()
        //     console.log(newUser)
        //  .add({
        //      ...user,
        //      firstName: user.firstName,
        //      lastName: user.lastName,
        //      status: user.bool,
        //  }).then(()=>{
        //     dispatch({ type: 'PLAYER_ADDED', project});
        //  }).catch((err) =>{
        //     dispatch({ type: 'PLAYER_ADDED_ERROR', err});
        //  })
        // })
    }      
};

