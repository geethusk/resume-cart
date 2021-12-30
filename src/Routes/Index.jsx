import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp"
import Login from "./Login"
import View from "./View"
import HowItWorks from "./HowItWorks"
import HomeComponent from './Component/HomeComponent'


const Index = () => {
    return (
            <Routes>
                <Route path="" element={<HomeComponent/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="view" element={<View/>}/>
                    <Route path="How-It-Works" element={<HowItWorks/>}/>
                </Route>
            </Routes>
    )
}

export default Index
