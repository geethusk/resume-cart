import React, { useEffect,useState } from 'react'
import "./SignUp.css"
import { isPassword, isValidEmail } from "../utility/validate";
import InputField from '../Components/InputField';
import { Link } from 'react-router-dom';

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
    
    useEffect(()=>{console.log(formData);
        formValidate()},[formData])


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
            isValidForm = false
        }else{
            onError("emailError","")
        }
        // console.log(isPassword(password));
        if(!isPassword(password)){
            onError("passwordError","Enter valid password")
            isValidForm = false
        }else{
            onError("passwordError","")
        }

        if(!confirmPassword){
            onError("confirmPasswordError","Confirm your Password")
            isValidForm = false
        }else{
            if(password !== confirmPassword){
                onError("confirmPasswordError","Password miss Match!")
                isValidForm = false
            }else{
                onError("confirmPasswordError","")
            }
        }
         return isValidForm;
    }
    

    const signUpCall = (e)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
        if(formValidate()){
            console.log("signup success")
        }

    }


    return (
        <div className='sign-up-container'>
            <div className="card-container">
                <div className="signup">
                    Sign Up
                </div>
                <form onSubmit={signUpCall} className='sign-up-form'>
                    <InputField
                        value={fullName}
                        onChange={(value)=>onChange("fullName",value)}
                        label="Full Name"
                        error={fullNameError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <InputField
                        type='email'
                        value={email}
                        onChange={(value)=>onChange("email",value)}
                        label="Email"
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
                    
                    />
                    <InputField
                        type='password'
                        value={password}
                        onChange={(value)=>onChange("password",value)}
                        label="Password"
                        error={passwordError}
                        isFormSubmitted={isFormSubmitted}
                    
                    />
                    <InputField
                        type='password'
                        value={confirmPassword}
                        onChange={(value)=>onChange("confirmPassword",value)}
                        label="Confirm Password"
                        error={confirmPasswordError}
                        isFormSubmitted={isFormSubmitted}
                    
                    />
                    <div className="signup-button"><button className='sign-up-button' type="submit">Submit</button></div>
                    <div className="excisting-user">
                        Already have account? <Link className="link-to-login"to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
