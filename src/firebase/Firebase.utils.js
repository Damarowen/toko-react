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

firebase.initializeApp(firebaseConfig);

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
      console.log('error creating user', err.message);
    }
  }
  console.log(snapShot)

  return userRef
}

//* fucnction to save shop collection in firebase
export const addCollectionAndDocs = async (collectionKey, objectToAdd) => {
  //* create collection using collectionKey
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)

  //* take all request to batch
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  })

  return await batch.commit()

}

//* function to get data from firestore. it will return array
export const getDataFromFirestore = koleksi => {
  const query = koleksi.docs.map(doc => {
    const {
      title,
      items
    } = doc.data()

    return {
      // routeName: encodeURI(title.toLowerCase()),
      routeName: title.toLowerCase(),
      id: doc.id,
      title,
      items
    }
  })

  console.log(query)

  //*passing query to store in reducer
  //* reduce array
  return query.reduce((acc, collection) => {
    //*hats equal to hats and return
    acc[collection.title.toLowerCase()] = collection;
    return acc
  }, {})
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;