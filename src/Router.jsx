import Burgers from "./Burgers";
import Fries from './Fries';
import  Colddrinks from './Colddrinks';
import Homepage from "./Homepage";
import Innerpage from "./Innerpage";
import { Routes, Route } from "react-router-dom";

export default function Router(){
    return(
         <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Restaurant" element={<Innerpage />} />
      <Route path="/Burgers" element={<Burgers />} />
      <Route path="/Fries" element={<Fries/>} />
            <Route path="/Colddrinks" element={<Colddrinks />} />


    </Routes>
    )
}