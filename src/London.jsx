import { IoSearchOutline } from "react-icons/io5";
import Icegcream from './assets/images/Icecream.png';
import Firstorder from './assets/images/Firstorder.png';
import vegan from './assets/images/vegan.png';
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

export default function London(){
  const navigate = useNavigate();
  
    return(
        <>
        <div className="flex flex-col md:!flex-row justify-between px-15">
            <h3 className="text-black !font-bold py-10"> All Offers from McDonald’s East London</h3>
           <div className="mt-1 md:!mt-5">
            <div className="flex items-center border-1 border-gray-800 rounded-full overflow-hidden  w-full max-w-[350px] bg-white mt-2">
              
              <input
                type="text"
                placeholder="search for menu"
                className="flex-1 pl-5  py-2 text-xs  sm:text-sm outline-none placeholder-gray-800"
              />
            </div>
            </div>
        </div>
        <div className=" grid mt-4 md:!mt-1 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-10 
 bg-gray-200 px-15 py-3 gap-10">
          <button className="bg-black text-white font-bold   py-1 rounded-pill">Offers</button>
          <button onClick={()=>{navigate("/Burgers")}}className="text-black font-bold">Burgers</button>
          <button onClick={()=>{navigate("/Fries")}}className="text-black font-bold">Fries</button>
          <button onClick={()=>{navigate("/Colddrinks")}}className="text-black font-bold">Cold drinks</button>
          <button className="text-black font-bold">Salads</button>
          <button className="text-black font-bold">Happy Meal</button>
          <button className="text-black font-bold">Desserts</button>
          <button className="text-black font-bold">Hot drinks</button>
          <button className="text-black font-bold">Sauces</button>
          <button className="text-black font-bold">Orbit</button>
            </div>
            <div className="px-4 md:!px-15
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-3 
  mt-4 py-15
">
  <Image
    src={Firstorder}
    className="w-full h-auto object-cover rounded-xl"
  />

  <Image
    src={vegan}
    className="w-full h-auto object-cover rounded-xl"
  />

  <Image
    src={Icegcream}
    className="w-full h-auto object-cover rounded-xl"
  />
</div>
        </>
    )
}