export const joinGame = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
         const profile = getState().firebase.profile;
         const userId = getState().firebase.auth.uid;
         const players = firestore.collection('users').doc(userId);

         console.table(players);
        //  firestore.collection('projects').doc('projectId')
        //  .collection('players')
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
        
    }
};