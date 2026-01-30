import Burgers from "./Burgers";
import Fries from "./Fries";
import Colddrinks from "./Colddrinks";
import Homepage from "./Homepage";
import Innerpage from "./Innerpage";
import Menupage from "./Menupage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/restaurant" element={<Innerpage />} />
      <Route path="/menu" element={<Menupage />} />
      <Route path="/Burgers" element={<Burgers />} />
      <Route path="/Fries" element={<Fries />} />
      <Route path="/Colddrinks" element={<Colddrinks />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
