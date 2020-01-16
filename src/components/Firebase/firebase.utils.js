import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import Config from '../../firebase.config'


firebase.initializeApp(Config)

const auth          = firebase.auth()
// const firestore     = firebase.firestore()
const authProvider  = new firebase.auth.GoogleAuthProvider().setCustomParameters({prompt: 'select_account'})

export const  SignInWithGoogle = auth.signInWithPopup(authProvider)
export default firebase
