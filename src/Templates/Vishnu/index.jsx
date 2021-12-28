import React from 'react'
import { Route,Routes} from 'react-router-dom'
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"

const Vishnu = () => {
    return (
        <div>
            <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="second" element={<SecondPage/>}/>

            </Routes>
        </div>
    )
}

export default Vishnu
