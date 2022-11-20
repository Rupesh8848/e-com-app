import { getDoc } from "firebase/firestore"
import React from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"


export default function SignUpForm(){

    const [formData, setFormData] = React.useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const {displayName, email, password, confirmPassword} = formData
    function handleChange(event){
        setFormData(oldState=>{
            return {
                ...oldState,
                [event.target.name]: event.target.value
            }
        })
    }
    

    async function handleSubmit(event){
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords donot match!!")
            return;
        }

        try{
            const {user} =await createAuthUserWithEmailAndPassword(email,password)
            
            await createUserDocumentFromAuth(user,{displayName})
            setFormData({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })

        }
        catch(error){
            console.log("Error while creating new user", error)
        }
    }


    return <div>
        <h1>Sign Up with your email and password</h1>
        <form>
            <label>Name</label>
            <input required type="text" onChange={handleChange} name="displayName"  value={displayName}/>
            <label>Email</label>
            <input required type="email" name="email" onChange={handleChange} value={email}/>
            <label>Password</label>
            <input required type="password" name="password" onChange={handleChange} value={password}/>
            <label>Confirm Password</label>
            <input required type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
            <button onClick={(event)=>{
                handleSubmit(event)
            }}>Submit</button>
        </form>
    </div>
}