import { Navigate, Route, Routes } from 'react-router-dom'
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"


const Faslu = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstPage/>}/>
            <Route path="second" element={<SecondPage/>}/>
            <Route path="*" element={<Navigate to={"/error"} />}/>
        </Routes>
    )
}

export default Faslu
