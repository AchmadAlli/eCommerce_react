import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const config = 'FIREBASE_CONFIG'

firebase.initializeApp(config)

const auth          = firebase.auth()
const firestore     = firebase.firestore()
const authProvider  = firebase.auth.GoogleAuthProvider().setCustomParameters({prompt: 'select_account'});

export const  SignInWithGoogle = auth.signInWithPopup(authProvider)
export default firebase

