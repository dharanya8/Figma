import Homepage from "./Homepage";
import Innerpage from "./Innerpage";
import { Routes, Route } from "react-router-dom";

export default function Router(){
    return(
         <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Restaurant" element={<Innerpage />} />
    </Routes>
    )
}