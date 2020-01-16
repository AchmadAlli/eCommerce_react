import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import CONFIG from '../../firebase.config'


firebase.initializeApp(CONFIG)

const auth          = firebase.auth()
const firestore     = firebase.firestore()
const authProvider  = firebase.auth.GoogleAuthProvider().setCustomParameters({prompt: 'select_account'});

export const  SignInWithGoogle = auth.signInWithPopup(authProvider)
export default firebase

