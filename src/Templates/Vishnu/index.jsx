import {Navigate,Route,Routes} from 'react-router-dom'
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"

const Vishnu = () => {
    return (
        <div>
            <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="second" element={<SecondPage/>}/>
                    <Route path="*" element={<Navigate to={"/error"} />}/>


            </Routes>
        </div>
    )
}

export default Vishnu
