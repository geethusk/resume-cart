import React from 'react'
import {Routes,Route, useNavigate} from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp"
import Login from "./Login"
import View from "./View"
import HowItWorks from "./HowItWorks"
import HomeComponent from './Component/HomeComponent'
import About from './About'
import Feedback from './Feedback'
import LoadingError from './LoadingError'
import Dashboard from './Dashboard'
import Error from './Error'
import Network from './Network'
import { useState } from 'react'
import FavoriteList from './FavoriteList'

import First from "../Routes/Component/1.png"
import Second from "../Routes/Component/2.png"
import Third from "../Routes/Component/3.png"
import Forth from "../Routes/Component/4.png"
import Fifth from "../Routes/Component/5.png"
import Sixth from "../Routes/Component/6.png"

import Faslu from '../Templates/Faslu';
import Geethu from '../Templates/Geethu';
import Raeez from '../Templates/Raeez';
import Rajasree from '../Templates/Rajasree';

import Vishnu from "../Templates/Vishnu";

import { TemplateContext } from '../Context/TemplateList'
import { UserContext } from '../Context/UserContext'
import Admin from './Admin'


import { useEffect } from 'react'
import postData from '../services/postdata'
import Form from './Component/Form'


const totalTemplateList=[
    {
        id:0,
        title:"",
        type:"premium",
        status:"expert",
        image:First,
        url:"/rajasree/second",
        isLiked:false,
    },

    {
        id:1,
        title:"",
        type:"free",
        status:"expert",
        image:Second,
        url:"/geethu",
        isLiked:false,
    },

    {
        id:2,
        title:"",
        type:"free",
        status:"fresher",
        image:Third,
        url:"/geethu/second",
        isLiked:false,
    },

    {
        id:3,
        title:"",
        type:"premium",
        status:"fresher",
        image:Sixth,
        url:"/raeez/second",
        isLiked:false,
    },

    {
        id:4,
        title:"",
        type:"premium",
        status:"expert",
        image:Forth,
        url:"/rajasree",
        isLiked:false,
    },

    {
        id:5,
        title:"",
        type:"premium",
        status:"fresher",
        image:Fifth,
        url:"/raeez",
        isLiked:false,
    },

]


const Index = () => {
    const[template,setTemplate]=useState(totalTemplateList);
    const[userData,setUserData]=useState({
        fullname:"",
        email:"",
        isLoggedIn: false,
        isAdmin: false
    })
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://192.168.1.66:5000/api/v1/user/', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.data.fullname === 'Admin'){
                setUserData(prev =>{
                    return{
                        fullname:data.data.fullname,
                        email:data.data.email,
                        isAdmin:true
                    }
                })
            }else {
            setUserData(prev=>{
                return{
                     fullname:data.data.fullname,
                     email:data.data.email,
                     isLoggedIn: true}
             })}
        })
    },[])


    return (
            <TemplateContext.Provider value={{template,setTemplate}}>
            <UserContext.Provider value={{userData,setUserData}}>
            <Routes>
                <Route path="" element={<HomeComponent/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="view" element={<View/>}/>
                    <Route path="How-It-Works" element={<HowItWorks/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="feedback" element={<Feedback/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="favorite" element={<FavoriteList/>}/>                    
                    <Route path="faslu/*" element={<Faslu/>}/>
                    <Route path="geethu/*" element={<Geethu/>}/>
                    <Route path="raeez/*" element={<Raeez/>}/>
                    <Route path="rajasree/*" element={<Rajasree/>}/>
                    <Route path="vishnu/*" element={<Vishnu/>}/>
                </Route>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="loading" element={<LoadingError/>}/>
                    <Route path="network-error" element={<Network/>}/>
                    <Route path="/*" element={<Error/>}/>
            </Routes>
            </UserContext.Provider>
            </TemplateContext.Provider>
    )
}

export default Index
