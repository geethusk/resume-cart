import { useContext, useEffect} from 'react'
import './Dashboard.css'
import profilePic from '../Templates/Faslu/images/icon-profile.png'
// import { UserContext } from '../Context/UserContext'
import { useState } from 'react';
// import postData from '../services/postdata';
import {isPassword} from '../utility/validate';
import FileUpload from '../Templates/Faslu/Components/FileUpload'
import { useNavigate } from 'react-router-dom';
import api from '../services/api'
import { useStoreState,useStoreActions } from 'easy-peasy';
import axios from 'axios';


const Dashboard = () => {
    const[image,setImage]=useState({
        profileImage:profilePic
    })
    const[isOtpButton,setOtpButton]=useState(false)
    const[isChangeButton,setChangeButton]=useState(false)
    const[isResetButton,setResetButton]=useState(false)
    
    const[password,setPassword] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:"",
        otp:"",
        newEmail:"",
        password:""
        
    })
    const{oldPassword,newPassword,confirmPassword,otp}=password
    const[formErrorData,setFormErrorData]=useState({
        passwordError: "",
        confirmPasswordError: ""
    })
    const{passwordError,confirmPasswordError}=formErrorData
    const [isFormSubmitted,setIsFormSubmitted ]=useState(false)
    const navigate=useNavigate()


    // const { userData} = useContext(UserContext)
    const userData = useStoreState((state) => state.userData);
    //   const changeFullName = useStoreActions((actions) => actions.changeFullName);
   
    useEffect(()=>{
        formValidate()
        !userData.isLoggedIn && navigate("/")
    },[userData.isLoggedIn])

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

    const onError = (key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }

    const formValidate = ()=>{
        let isValidForm = true;
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
            try{
                const response = await api.post('/get-otp',{email:userData.email})
                console.log(response);
            }
            catch(error){
                console.log(error);
            }
        } 
    }

    const changePassword = async()=>{
        // e.preventDefault();
        try{
            const response = await api.post('/change-password',{otp:otp,email:userData.email,oldPassword:oldPassword,newPassword:newPassword})
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }

    const uploadProfile = async(imageData)=>{
        const data= new FormData();
        data.append('file',imageData)
        try{
            const response = await axios.post('http://192.168.1.66:5000/api/v1/upload-profile-image',data,{
                headers:{
                    'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
                },
                
            })
            console.log(response)
        }
        catch(error){
            console.log(error.response)
        }
    }
    
    

    const updateEmail = async()=>{
        try{
            const response = await api.post('/change-email',{email:userData.email,newemail:password.newEmail,password:password.password})
            console.log(response)
        }
        catch(error){
            console.log(error)
        }  
    }

    return (
    <div className='dashboard-container'>
        <div className="dashboard-left-section">
            <FileUpload
                image={userData.profilePic}

                onChange={(value)=>{
                    changeImage("profileImage",value)
                }}

                uploadProfile={uploadProfile}
                dashboard={true}
            />
            <div className='dashboard-name'>{userData.fullname}</div>
            <div className="dashboard-contents">{userData.email}
            <button 
                onClick={()=>{
                    setChangeButton(prev=>!prev)
                }}className='dashboard-reset-button'>CHANGE</button>
            </div>
            <div className="dashboard-contents">Password
            <button 
                onClick={()=>{
                    setResetButton(prev=>!prev)
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
                     <input type="password" 
                        // value={oldpassword}
                        onChange={
                            (e)=>{onChange("oldPassword",e.target.value)}
                        }  

                     /><br/></div>
                </div>
                
                 <div className="dashboard-section">
                      <label for ="dashboard-password">New Password</label>
                      <div className="dashboard-input">
                        <input type="password"
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
                     <input type="password"
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
                                changePassword()
                            }} >
                      SUBMIT
                    </div>
                </div>
                }
                </div>
            </form>}

            {isChangeButton &&
            <div>
                <div className="dashboard-section">
                    <label>New Email</label>
                    <div className="dashboard-input"> 
                        <input type="email"
                            onChange={(e)=>{
                                onChange("newEmail",e.target.value)
                            }}
                        />
                    </div>
                </div>

                <div className="dashboard-section">
                    <label>Password</label>
                    <div className="dashboard-input">
                        <input type="password"
                            onChange={(e)=>{
                                onChange("password",e.target.value)
                            }}
                        />
                    </div>
                </div>

                <div className="dashboard-section">
                    <button 
                    onClick={()=>{
                        updateEmail()
                    }}
                    className='dashboard-button'>SUBMIT</button>
                </div>
            </div>}
        </div>
    </div>
      
    )
}

export default Dashboard
    