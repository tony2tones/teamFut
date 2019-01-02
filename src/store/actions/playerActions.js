export const joinGame = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
         const profile = getState().firebase.profile;
         const userId = getState().firebase.auth.uid;
         
         firestore.collection('users').doc(user.uid);
         firestore().collection('users').doc(user.uid).get().then(doc => {
            const newUser = doc.data()
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

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
         const profile = getState().firebase.profile;
         const authorId = getState().firebase.auth.uid;
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
        
    }
};
