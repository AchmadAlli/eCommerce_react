import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Config from './firebase.config'


firebase.initializeApp(Config)

export const auth          = firebase.auth()
// export const firestore     = firebase.firestore()
const authProvider  = new firebase.auth.GoogleAuthProvider().setCustomParameters({prompt: 'select_account'})

export const  SignInWithGoogle = () => auth.signInWithPopup(authProvider)
export default firebase
