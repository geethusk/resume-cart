
import React, { useState,useEffect, useContext } from 'react'
import InputField from '../Components/InputField';
import { isValidEmail } from '../utility/validate';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import api from "../services/api"
import { useStoreActions } from 'easy-peasy';
import ErrorHandler from './Component/ErrorHandler';

const Admin = () => {

    const changeFullName = useStoreActions((actions) => actions.changeFullName);
    const changeEmail = useStoreActions((actions) => actions.changeEmail);
    const toggleIsLoggedIn = useStoreActions((actions) => actions.toggleIsLoggedIn);
    const toggleIsAdmin = useStoreActions((actions) => actions.toggleIsAdmin);

    const [errorFormVisibility,setErrorFormVisibility]=useState(false)
    const [error, setError] = useState(null)

    const navigate=useNavigate();
    const[isOtpButton,setOtpButton]=useState(false)
    const [formData,setFormData] = useState({
        email:"",
        otp:"",
    });
    const{email,otp}=formData;
    const onChange = (key,value)=>{
        setFormData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const[formErrorData,setFormErrorData]=useState({
        emailError:"",
        otpError:"",
    })
    const{emailError,otpError}=formErrorData
    const onError = (key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    
    const formValidate = ()=>{
        let isValidForm = true;
        
        if(!email){
            onError("emailError","Cannot be Empty")
            isValidForm = false;
        }
        else{
            if(!isValidEmail(email)){
                onError("emailError","Enter Valid Email")
                isValidForm = false;
            }
            else{
                onError("emailError","")
            }
        }
        return isValidForm
    }
    useEffect(()=>{
        formValidate();
    },[formData])
   

    const [isFormSubmitted,setIsFormSubmitted ]=useState(false)
   
    const getOtp = async ()=>{        
        const response = await api.post('/get-admin-otp',{email})
        // console.log(response);
        try{
            setErrorFormVisibility(true)
            setError(response.data.message)
        }catch{
            setErrorFormVisibility(false)
            setError(response.data.message)
        }
    }
    const loginCall = async (e) =>{
        e.preventDefault();
        try{
            const response = await api.post('/admin-login', {otp})
            localStorage.setItem('token',response.data.token)
            // console.log(response);
            if(response.data.status){
                // console.log(response.data.status);
                setErrorFormVisibility(true)
                setError(response.data.message)
                changeEmail("geethukallada1@gmail.com")
                changeFullName("ADMIN")
                toggleIsAdmin(true)
                toggleIsLoggedIn(false)
                navigate('/')
                
            }
            else{
                navigate("/login")
            }
        }
        catch(error){
            setErrorFormVisibility(true)
            setError(error.response.data.message)

        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-heading">
                   Admin Login
                </div>
                <form onSubmit={loginCall} className='login-form'>
                    <InputField
                        label="Email"
                        value={email}
                        onChange={(value) =>onChange("email",value)}
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <br/>
                    <div onClick={()=>{

                         setOtpButton(true)
                         
                        getOtp()
                     
                       
                    }
                    } 
                    className='login-button'>Get OTP</div>
                    <br/>
                    <InputField
                        label="OTP"
                        value={otp}
                        onChange={(value) =>onChange("otp",value)}
                        error={otpError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <br/>
                    <button
                     type="submit" className='login-button'>Login</button>
                </form>
            </div>
            {errorFormVisibility && <ErrorHandler error={error} setErrorFormVisibility={setErrorFormVisibility} />}

        </div>
    )
}

export default Admin
