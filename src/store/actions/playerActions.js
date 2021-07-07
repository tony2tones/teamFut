export const joinGame = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
         const firebase = getFirebase();
         const profile = getState().firebase.profile;
         const userId = getState().firebase.auth.uid;
         console.log('does it even get this far?', profile, userId,'firebase has this ', firebase);
         firestore.collection('users').doc(userId);
         firestore.collection('users').doc(userId).get().then(doc => {
            const newUser = doc.data();
            console.log(newUser);
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
        })
    };
};
firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorId,
    createdAt: new Date()
}).then(()=>{
   dispatch({ type: 'CREATE_PROJECT', project});
}).catch((err) =>{
   dispatch({ type: 'CREATE_PROJECT_ERROR', err});
})
