import React, { useState } from 'react'
import "./SignUp.css"
import { isPassword, isValidEmail } from "../utility/validate";
// import InputField from '../../components/InputField';


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
                    <div className="input-area">
                        <input type="text" className='sign-up-input'
                            value={fullName}     
                            onChange={(e)=>{
                                onChange("fullname",e.target.value)
                            }}
                             
                        />
                        <div className='label' >Full Name</div>
                    </div>
                    <div className="input-area">
                        <input type="email" className='sign-up-input'
                            value={email}
                            onChange={(e)=>{
                                onChange("email",e.target.value)
                        }}
                        />
                        <div className='label'>Email</div>
                    </div>
                    <div className="input-area">
                        <input type="password" className='sign-up-input'
                            value={password}     
                            onChange={(e)=>{
                                onChange("password",e.target.value)
                            }}
                        />
                        <div className='label'>Password</div>
                    </div>
                    <div className="input-area">
                        <input type="password" className='sign-up-input'
                         value={confirmPassword}     
                         onChange={(e)=>{
                             onChange("confirmPassword",e.target.value)
                         }}
                        />
                        <div className='label'>Confirm Password</div>
                    </div>
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
