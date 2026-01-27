import BannerSection from "./Bannersection";
import Innerpage from "./Innerpage";
import { Routes, Route } from "react-router-dom";

export default function Router(){
    return(
         <Routes>
      <Route path="/" element={<BannerSection />} />
      <Route path="/Restaurant" element={<Innerpage />} />
    </Routes>
    )
}