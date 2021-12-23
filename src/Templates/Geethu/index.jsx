import {Route,Routes} from 'react-router-dom'
import FirstPage from"./FirstPage"
import SecondPage from './SecondPage'


const Geethu = () => {
    return(
        <Routes>
            <Route path="/" element={<FirstPage/>}/>
            <Route path="/second" element={<SecondPage/>}/>
        </Routes>
    )
    
}

export default Geethu