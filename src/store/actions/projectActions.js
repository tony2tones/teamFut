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

export const joinGame = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
         // make async call to database
         const firestore = getFirestore();
         const profile = getState().firebase.profile;
         const authorId = getState().firebase.auth.uid;
         firestore.collection('projects').doc('projectId').add({
             ...user,
             name: user.firstName,
             status: user.bool,
             createdAt: new Date()
         }).then(()=>{
            dispatch({ type: 'PLAYER_ADDED', project});
         }).catch((err) =>{
            dispatch({ type: 'PLAYER_ADDED_ERROR', err});
         })
        
    }
};

var messageRef = db.collection('rooms').doc('roomA')
                .collection('messages').doc('message1');