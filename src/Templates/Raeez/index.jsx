import React from 'react'
import {Route,Routes} from "react-router-dom"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"


const Raeez = () => {
    return (
        <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="Second" element={<SecondPage/>}/>

        </Routes>

    )
}

export default Raeez
