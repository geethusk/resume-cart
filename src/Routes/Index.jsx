import React from 'react'
import {Routes,Route} from "react-router-dom"
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


const Index = () => {
    return (
            <Routes>
                <Route path="" element={<HomeComponent/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="view" element={<View/>}/>
                    <Route path="How-It-Works" element={<HowItWorks/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="feedback" element={<Feedback/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="*" element={<LoadingError/>}/>
                </Route>
            </Routes>
    )
}

export default Index
