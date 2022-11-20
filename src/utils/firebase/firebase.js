import {initializeApp} from "firebase/app"
import {getAuth, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {getFirestore, getDoc, setDoc, doc, writeBatch, collection, WriteBatch, query, getDocs} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBlsle037JaJlOlww4hNosQTOFK1gqhedo",
    authDomain: "ecom-db-fc435.firebaseapp.com",
    projectId: "ecom-db-fc435",
    storageBucket: "ecom-db-fc435.appspot.com",
    messagingSenderId: "133134576379",
    appId: "1:133134576379:web:a1234f8b9c8b7c997c5e5e"
  }; //from firebase site itself
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  }) //protocols

  export const auth = getAuth()
  export function signInWithGooglePopUp(){
     return signInWithPopup(auth, provider)
  } //brings up pop up window

  export async function addCollectionAndDocuments(collectionName,documentsToAdd){
    const collectionRef = collection(db,collectionName);
    const batch = writeBatch(db)

    documentsToAdd.forEach(document=>{
      const docRef = doc(collectionRef,document.title.toLowerCase())
      batch.set(docRef, document)


    })

    await batch.commit();
    console.log("Done")
  }


  export async function getCategoriesAndDocuments(){
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
      const {title, items} = docSnapshot.data()
      acc[title.toLowerCase()] = items
      return acc;
    },{})
    console.log(categoryMap)
    return categoryMap;

  }


  export const db = getFirestore() // for fire database usage

  export async function createUserDocumentFromAuth(userAuth, additionalInformation){
    const userDocRef = await doc(db,'users',userAuth.uid) //get the information of user if exists from database
    
    const userSnapshot = await getDoc(userDocRef) //get the data of user
    
    if(!userSnapshot.exists()){ //checks if user doesn't exists
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc(userDocRef, {//creates the instance of user in db if user doesn't exists
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        }catch(error){ //catches error if any occurs during creating user data  
            console.log("error creating user",error.message)
        }
    }
    return userDocRef
  }


  export async function createAuthUserWithEmailAndPassword(email, password){
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)

  }


  export async function signInUserWithEmailAndPassword(email, password){
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }


  export async function signOutUser() {
    await signOut(auth)
  }


  export function onAuthStateChangeListener(callback){
    return onAuthStateChanged(auth,callback)
  }