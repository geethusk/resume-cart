import React, { useState } from 'react'
import "./SignUp.css"
import { isPassword, isValidEmail } from "../utility/validate";
import InputField from '../Components/InputField';


const SignUp = () => {

    const[formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [formDataError,setFormErrorData] = useState({
        fullNameError:"",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    });


    const[isFormSubmitted, setIsFormSubmitted] = useState(false);


    const{fullName,email,password,confirmPassword}=formData
    const{fullNameError,emailError,passwordError,confirmPasswordError}=formDataError



    const   onChange=(key,value)=>{
        setFormData({...formData,
           [key]:value
       })
    }

    const onError =(key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))

    }


    const formValidate = ()=>{
        console.log(isValidEmail(email));
        let isValidForm = true;
        if(!isValidEmail(email)){
            onError("emailError","Enter valid email")
        }else{
            onError("emailError","")
        }
        // console.log(isPassword(password));
        if(!isPassword(password)){
            onError("passwordError","Enter valid password")
        }else{
            onError("passwordError","")
        }

        if(!confirmPassword){
            onError("confirmPasswordError","Confirm your Password")
        }else{
            if(password !== confirmPassword){
                onError("confirmPasswordError","Password miss Match!")
            }else{
                onError("confirmPasswordError","")
            }
        }
         return isValidForm;
    }
    


    return (
        <div className='sign-up-container'>
            <div className="card-container">
                <div className="signup">
                    Sign Up
                </div>
                <form onSubmit="submit" className='sign-up-form'>
                    <InputField
                        value={fullName}
                        onChange={(value)=>onChange("fullName",value)}
                        label="Full Name"
                        error={fullNameError}
                    />
                    <InputField
                        type='email'
                        value={email}
                        onChange={(value)=>onChange("email",value)}
                        label="Email"
                        error={emailError}
                    
                    />
                    <InputField
                        type='password'
                        value={password}
                        onChange={(value)=>onChange("password",value)}
                        label="Password"
                        error={passwordError}
                    
                    />
                    <InputField
                        type='password'
                        value={confirmPassword}
                        onChange={(value)=>onChange("confirmPassword",value)}
                        label="Confirm Password"
                        error={confirmPasswordError}
                    
                    />
                    <button className='sign-up-button' type="submit">Submit</button>
                    <div className="excisting-user">
                        Already have account? Login
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
