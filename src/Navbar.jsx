import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import star from "./assets/images/star.png";
import Basket from "./assets/images/Basket.png";
import Forward from "./assets/images/Forward.png";
import Line from "./assets/images/Line.png";
import Location from "./assets/images/Location.png";
import { HiMenu, HiX } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import Logo from "./assets/images/LOGO 1.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Browse Menu", path: "/menu" },
    { name: "Special Offers", path: "/offers" },
    { name: "Restaurants", path: "/restaurant" },
    { name: "Track Order", path: "/track" },
  ];

  return (
    <div>
      <div className="bg-gray-100 flex flex-col lg:flex-row items-center justify-center md:!justify-center lg:!justify-between border-2 border-gray-200 h-50  lg:!h-12 rounded-b-xl ">
        <div className="flex items-center  gap-2  md:!ml-10 ">
          <Image src={star} alt="Star" className="w-5 h-5" />
          <p className=" text-xs md:!text-md font-semibold mt-3">
            Get 5% off your first order,{" "}
            <span className="underline text-orange-400 font-semibold text-xs md:!text-md">
              Promo: ORDER5
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <Image src={Location} className="ml-2 md:!ml-20 lg:!ml-40"></Image>
          <p className="text-xs md:!text-md font-semibold mt-3 text-black-500 ">
            Regent Street, A4, A4201, London
          </p>
          <button className="text-orange-400 underline !text-xs md:!text-md font-semibold">
            Change Location
          </button>
        </div>
        <div className="bg-green-700 flex items-center h-12 w-68 lg:w-70 rounded-b-xl border-green-700 md:ml-21">
          <Image
            src={Basket}
            onClick={() => navigate("/menu")}
            className="w-8 h-7 ml-5"
          />

          <Image src={Line} className="h-12 ml-3" />

          <p className="text-white font-semibold text-xs md:text-sm lg:text-xs m-0">
            23 Items
          </p>

          <Image src={Line} className="h-12 ml-3" />

          <p className="text-white font-semibold text-xs md:text-sm m-0">
            GBP 79.89
          </p>

          <Image src={Line} className="h-12 ml-3" />

          <Image src={Forward} className="w-7 h-7 ml-2" />
        </div>
      </div>
      <nav className="w-full py-1 md:py-3 mt-4 border-gray-200">
        <div className="px-1 md:px-4">
          {/* TOP BAR */}
          <div className="flex  justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Image src={Logo} className="w-30" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex ml-7 xl:ml-35 gap-5 font-medium">
  {menuItems.map((item) => (
    <button
      key={item.name}
      onClick={() => navigate(item.path)}
      className={`px-3 py-1 rounded-pill transition
        ${
          location.pathname === item.path
            ? "bg-orange-400 text-white"
            : "text-black hover:text-orange-400 hover:bg-gray-200"
        }`}
    >
      {item.name}
    </button>
  ))}
</div>


            {/* Right Side */}
            <div className="flex items-center gap-3 group">
              {/* Login */}
              <Link to="/login"
                className="hidden lg:flex bg-slate-900 text-white px-4 py-2 rounded-pill 
          flex items-center gap-2 text-sm font-semibold"
              >
                <span
                  className="bg-orange-400 w-5 h-5 rounded-pill 
            flex items-center justify-center"
                >
                  <MdPerson className="text-black text-md" />
                </span>
                Login / Signup
              </Link>

              {/* Hamburger - Mobile only */}
              <button
                className="lg:hidden text-3xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* MOBILE TOGGLE MENU */}
          {/* MOBILE TOGGLE MENU */}
          
          {open && (
  <div className="lg:hidden mt-4 bg-white rounded-xl shadow-md p-4 space-y-3">
    {menuItems.map((item) => (
      <button
        key={item.name}
        onClick={() => {
          navigate(item.path);
          setOpen(false);
        }}
        className={`block w-full px-4 py-2 rounded-pill font-medium
          ${
            location.pathname === item.path
              ? "bg-orange-400 text-white"
              : "hover:bg-gray-100"
          }`}
      >
        {item.name}
      </button>
    ))}

    {/* Login / Signup (Mobile) */}
    <Link to="/login"
      onClick={() => setOpen(false)}
      className="w-full bg-slate-900 text-white px-4 py-2 rounded-pill
      flex items-center justify-center gap-2 text-sm font-semibold"
    >
      <span
        className="bg-orange-400 w-5 h-5 rounded-full
        flex items-center justify-center"
      >
        <MdPerson className="text-black text-md" />
      </span>
      Login / Signup
    </Link>
  </div>
)}
        </div>
      </nav>
    </div>
  );
}
