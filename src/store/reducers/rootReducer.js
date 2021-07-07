import authReducer from './authReducer';
import projectReducer from './projectReducer';
import playerReducer from './playerReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    playerActions: playerReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer    
})

export default rootReducer;