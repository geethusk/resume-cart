import { useContext, useEffect} from 'react'
import './Dashboard.css'
import profilePic from '../Templates/Faslu/images/photo.jpg'
import { UserContext } from '../Context/UserContext'
import { useState } from 'react';
import postData from '../services/postdata';
import {isPassword} from '../utility/validate';
import FileUpload from '../Templates/Faslu/Components/FileUpload'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const[isOtpButton,setOtpButton]=useState(false)
    const[isResetButton,setResetButton]=useState(false)
    const[image,setImage]=useState({
        profileImage:profilePic
    })
    const[password,setPassword] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:"",
        otp:""
        
    })
    const{oldPassword,newPassword,confirmPassword,otp}=password
    const[formErrorData,setFormErrorData]=useState({
        passwordError: "",
        confirmPasswordError: ""
    })
    const{passwordError,confirmPasswordError}=formErrorData
    const [isFormSubmitted,setIsFormSubmitted ]=useState(false)
    const navigate=useNavigate()

    const { userData} = useContext(UserContext)
    useEffect(()=>{
        formValidate()
        !userData.isLoggedIn && navigate("/")
    },[])
    
    const changeImage = (key,value)=>{
        setImage(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const onChange = (key,value)=>{
        setPassword(prev=>({
            ...prev,
            [key]:value
        }))
    }
    console.log(password.otp);
    const onError = (key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }

    const formValidate = ()=>{
        let isValidForm = true;
        console.log(isValidForm)
        if(!isPassword){
            onError("passwordError","Cannot be Empty")
            isValidForm = false;
        }
        else{
            if(!isPassword(newPassword)){
                onError("passwordError","Enter Valid Password")
                isValidForm = false;
            }
            else{
                onError("passwordError","")
            }
        }
        if(!confirmPassword){
            onError("confirmPasswordError","Password Mismatch!!")
            isValidForm = false
        }else{
            if(newPassword !== confirmPassword){
                onError("confirmPasswordError","Password miss Match!")
                isValidForm = false
            }else{
                onError("confirmPasswordError","")
            }
        }
        return isValidForm
    }

   

    const getOtp = async (e)=>{
        e.preventDefault();
        setIsFormSubmitted(true)
        if (formValidate()){
            const response = await postData('/get-otp',{email:userData.email})
            console.log(response);
        } 
    }
    const submitOtp = async ()=>{
        const response = await postData('/change-password',{otp:otp,email:userData.email,oldPassword:oldPassword,newPassword:newPassword})
        console.log(response);
    }
    return (
    <div className='dashboard-container'>
        <div className="dashboard-left-section">
            <FileUpload
                image={image.profileImage}
                onChange={(value)=>{
                    changeImage("profileImage",value)
                }}
            // <img src={profilePic}/>
            />
            <div className='dashboard-name'>{userData.fullname}</div>
            <div className="dashboard-contents">Profile</div>
            <div className="dashboard-contents">{userData.email}</div>
            <div className="dashboard-contents">Password
            <button 
                onClick={()=>{
                    setResetButton(true)
                }
                }
            className='dashboard-reset-button'>RESET</button></div>
        </div>
        <div className="dashboard-right-section">
            {isResetButton &&
            <form onSubmit={getOtp}>
                <div className="dashboard-section">
                 <label for ="dashboard-password">Old Password</label>
                 <div className="dashboard-input">
                     <input type="text" 
                        // value={oldpassword}
                        onChange={
                            (e)=>{onChange("oldPassword",e.target.value)}
                        }  

                     /><br/></div>
                </div>
                
                 <div className="dashboard-section">
                      <label for ="dashboard-password">New Password</label>
                      <div className="dashboard-input">
                        <input type="text"
                            // value={newpassword}
                            onChange={
                                (e)=>{onChange("newPassword",e.target.value)}
                            } 
                        /><br/></div>
                 </div>
                 {isFormSubmitted&&<div className="error-region">
                    {passwordError}
                </div>}

                <div className="dashboard-section">
                 <label for ="dashboard-password">Confirm New Password</label>
                 <div className="dashboard-input">
                     <input type="text"
                        // value={confirmpassword}
                        onChange={
                            (e)=>{onChange("confirmPassword",e.target.value)}
                        } 

                     /><br/></div>
                </div>
                {isFormSubmitted && <div className="error-region">
                    {confirmPasswordError}
                </div>}

                <div className="dashboard-section">
                    <button 
                        type='submit'
                        onClick={()=>{
                        setOtpButton(true)
                        }
                       }
                       className='dashboard-button' >
                           GET OTP
                    </button>
                    {isOtpButton && <div className="dashboard-input">
                    <input type="text"
                            onChange={
                            (e)=>{onChange("otp",e.target.value)}
                            } 
                    />
                    <div className='dashboard-submit-button'
                            onClick={()=>{
                                submitOtp()
                            }} >
                      SUBMIT
                    </div>
                </div>
                }
                </div>
            </form>}
        </div>
    </div>
      
    )
}

export default Dashboard
    