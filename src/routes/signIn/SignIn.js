import {signInWithGooglePopUp, createUserDocumentFromAuth, signInUserWithEmailAndPassword} from "../../utils/firebase/firebase"
import SignUpForm from "../../Components/SignUp/SignUp";
import React from "react";



export default function SignIn(){
    const signIn = () =>{
        const logGoogleUser = async() => {
            const {user} = await signInWithGooglePopUp();
            const userDocRef = await createUserDocumentFromAuth(user)
        }
        logGoogleUser()
    }
    const [formData, setFormData] = React.useState({
        email:'',
        password:'',
    })
    const {email, password} = formData

    function handleChange(event){
        setFormData(oldState=>({
            ...oldState,
            [event.target.name]:event.target.value,
        }))
    }

    async function handleClick(event){
        event.preventDefault()

        try {
            const {user} = await signInUserWithEmailAndPassword(email, password)
            
        } catch (error) {
            console.log("Error",error)
        }
    }

    return <>
    <div style={{margin:"20px"}}>

        <div>
            <form>
        <input type="text" name="email" value={email} placeholder="Email" onChange={handleChange}/>
        <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange}/>
        
        <button onClick={handleClick}>Sign In</button>
        <button onClick={signIn} type="button">SignIn w Google</button>

            </form>
        </div>

        <div>
        <SignUpForm/>

        </div>
    </div>
    </>
}   