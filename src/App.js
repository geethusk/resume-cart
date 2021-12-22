import {Routes,Route} from "react-router-dom"
import Faslu from './Templates/Faslu';
import Geethu from './Templates/Geethu';
import Raeez from './Templates/Raeez';
import Rajasree from './Templates/Rajasree';
import './App.css';
import Vishnu from "./Templates/Vishnu";


function App() {
  return (
    <Routes>
      <Route path="faslu/*" element={<Faslu/>}/>
      <Route path="geethu/*" element={<Geethu/>}/>
      <Route path="raeez/*" element={<Raeez/>}/>
      <Route path="rajasree/*" element={<Rajasree/>}/>
      <Route path="vishnu/*" element={<Vishnu/>}/>
    </Routes>
  );
}

export default App;
