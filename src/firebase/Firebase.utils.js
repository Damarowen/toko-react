import firebase from 'firebase/app'

//* database
import 'firebase/firestore'

//* for auth
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJ_c9Z-d902EkNvcecIzZ5QscsuH1wrrw",
  authDomain: "toko-react.firebaseapp.com",
  projectId: "toko-react",
  storageBucket: "toko-react.appspot.com",
  messagingSenderId: "595324966115",
  appId: "1:595324966115:web:e921bab81693177c6fa1d6",
  measurementId: "G-W1LDTG1BQW"
};

export const createUserProfile = async (userAuth, data) => {
  if (!userAuth) return;

  //* create document ref for CRUD
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //*retreveing data and create snapshot
  //* snapshot represent data
  const snapShot = await userRef.get()

//*if exist false
  if (!snapShot.exist) {
    const {
      displayName,
      email
    } = userAuth;

    const createdAt = new Date();

    try {
      //* create user with set
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  console.log(snapShot)

  return userRef
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;