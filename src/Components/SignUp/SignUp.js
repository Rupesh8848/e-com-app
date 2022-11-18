import React from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
export default function SignUpForm(){

    const [formData, setFormData] = React.useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const {name, email, password, confirmPassword} = formData
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
            createAuthUserWithEmailAndPassword(formData.email,formData.password)
        }
        catch(error){
            console.log("Error while creating new user", error)
        }
    }


    console.log(formData)
    return <div>
        <h1>Sign Up with your email and password</h1>
        <form on onSubmit={()=>handleSubmit}>
            <label>Name</label>
            <input required type="text" onChange={handleChange} name="name"  value={formData.name}/>
            <label>Email</label>
            <input required type="email" name="email" onChange={handleChange} value={formData.email}/>
            <label>Password</label>
            <input required type="password" name="password" onChange={handleChange} value={formData.password}/>
            <label>Confirm Password</label>
            <input required type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
            <button>Submit</button>
        </form>
    </div>
}