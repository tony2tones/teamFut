export const joinGame = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
         const profile = getState().firebase.profile;
         const authorId = getState().firebase.auth.uid;
         firestore.collection('projects').doc('projectId')
         .collection('players')
         .add({
             ...user,
             firstName: user.firstName,
             lastName: user.lastName,
             status: user.bool,
         }).then(()=>{
            dispatch({ type: 'PLAYER_ADDED', project});
         }).catch((err) =>{
            dispatch({ type: 'PLAYER_ADDED_ERROR', err});
         })
        
    }
};

var messageRef = db.collection('rooms').doc('roomA')
                .collection('messages').doc('message1');