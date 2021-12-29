import { Route, Routes } from 'react-router-dom'
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"


const Faslu = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstPage/>}/>
            <Route path="second" element={<SecondPage/>}/>
        </Routes>
    )
}

export default Faslu
