import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Config from './firebase.config'


firebase.initializeApp(Config)

export const auth           = firebase.auth()
export const firestore      = firebase.firestore()
const authProvider          = new firebase.auth.GoogleAuthProvider().setCustomParameters({prompt: 'select_account'})

export const initProfile = async (auth) => {
  if(!auth) return;

  const userRef       = firestore.doc(`users/${auth.uid}`)
  const snapShotData  = await userRef.get()

  if(!snapShotData.exists){
    createNewUser(auth)
  }
  
  return userRef
}

async function createNewUser(auth) {
  const userRef               = firestore.doc(`users/${auth.uid}`)
  const {email, displayName}  = auth;
  const createdAt             = new Date()

  const user  = {
    displayName, 
    email,
    createdAt
  }

  try {
    await userRef.set(user)
  } catch (error) {
    console.log(`error on create user ${error.message}`) 
  }
}

export const  SignInWithGoogle = () => auth.signInWithPopup(authProvider)
export default firebase
