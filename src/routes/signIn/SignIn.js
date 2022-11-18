import {signInWithGooglePopUp, createUserDocumentFromAuth} from "../../utils/firebase/firebase"
import SignUpForm from "../../Components/SignUp/SignUp";
const signIn = () =>{
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    logGoogleUser()
}

export default function SignIn(){
    return <>
        <h1>THis is a signin Page.</h1>
        <button onClick={signIn}>SignIn w Google</button>

        <SignUpForm/>
    </>
}   