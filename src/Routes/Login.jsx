import React, { useState,useEffect, useContext } from 'react'
import InputField from '../Components/InputField';
import { isPassword, isValidEmail } from '../utility/validate';
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import postData from '../services/postdata';
import { UserContext } from '../Context/UserContext';
import GetPassword from '../Components/GetPassword';
import { useStoreState,useStoreActions } from 'easy-peasy';
import api from '../services/api';


const Login = () => {
    const navigate=useNavigate();
    // const { userData, setUserData } = useContext(UserContext);
    const userData = useStoreState((state) => state.userData);
    const changeFullName = useStoreActions((actions) => actions.changeFullName);
    const changeEmail = useStoreActions((actions) => actions.changeEmail);
    const toggleIsLoggedIn = useStoreActions((actions) => actions.toggleIsLoggedIn);
    const toggleIsAdmin = useStoreActions((actions) => actions.toggleIsAdmin);

    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });
  
    const{email,password}=formData;
    const onChange = (key,value)=>{
        setFormData(prev=>({
            ...prev,
            [key]:value
        }))
    }
   
    const[formErrorData,setFormErrorData]=useState({
        emailError:"",
        passwordError:"",
    })
    const[forgetPassword,setForgetPassword]=useState(false)
    const{emailError,passwordError}=formErrorData
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
        if(!password){
            onError("passwordError","Cannot be Empty")
            isValidForm = false;
        }
        else{
            if(!isPassword(password)){
                onError("passwordError","Enter Valid Password")
                isValidForm = false;
            }
            else{
                onError("passwordError","")
            }
        }
        return isValidForm
    }
    useEffect(()=>{
        formValidate();
    },[formData])
    const loginCall= async (e)=>{
        e.preventDefault();
        setIsFormSubmitted(true)
        // setUserData({
        //     fullname: "vishnu",
        //     email:"raeez123@gmail.com",
        //     isLoggedIn:true
        // })
        if (formValidate()){
            const response = await api.post('/login',formData)
            
            if(!response.status){
                alert(response.message);
                return
            }
            localStorage.setItem('token',response.token)
            
            changeFullName(response.data.fullname)
            changeEmail(email)
            toggleIsLoggedIn(true)
            
            // setUserData((prev)=>{
            //     return{
            //         ...prev,
            //         fullname: response.fullname,
            //         email,
            //         isLoggedIn:true
            //     }
            // })
            navigate('/dashboard');
        }
    }
    const [isFormSubmitted,setIsFormSubmitted ]=useState(false)
   
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-heading">
                    Login
                </div>
                <form onSubmit={loginCall} className='login-form'>
                    <InputField
                        label="Email"
                        value={email}
                        onChange={(value) =>onChange("email",value)}
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <InputField
                        label="Password"
                        value={password}
                        type="password"
                        onChange={(value) =>onChange("password",value)}
                        error={passwordError}
                        isFormSubmitted={isFormSubmitted}
                    />
                    <div className='login-button-section'>
                        {!forgetPassword && <div 
                            onClick={()=>{
                                setForgetPassword(true)
                        }}
                        
                        className='password-header'>Forget Password?</div>}
                        {forgetPassword && 
                        <GetPassword />}
                        <button type="submit" className='login-button'>Login</button>
                        
                    </div>
                    <div className='sign-up-page-link'>Not a member?<Link className='sign-up-link' to="/sign-up"> SignUp </Link>now</div>
                    <div className='sign-up-page-link'>I am <Link className='sign-up-link' to="/admin">Admin</Link></div>
                </form>
            </div> 
        </div>
    )
}

export default Login
