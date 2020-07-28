import { firestore } from "firebase";
import { getFirestore } from "redux-firestore";

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            dispatch( {type: 'LOGIN_SUCCESS'});
        }).catch( (err) => {
            dispatch( {type: 'LOGIN_ERROR', err: err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then( () => {
            dispatch( {type: 'SIGNOUT_SUCCESS' });
        })
    } 
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then( response => {
            return firestore.collection('users').doc(response.user.uid).set({
                alias: newUser.alias
            });
        }).then( () => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
        }).catch( (err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });
    }
}