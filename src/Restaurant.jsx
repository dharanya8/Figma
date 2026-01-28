import star from "./assets/images/star.png";
import Basket from "./assets/images/Basket.png";
import Forward from "./assets/images/Forward.png";
import Line from "./assets/images/Line.png";
import Logo from "./assets/images/LOGO 1.png";
import { HiMenu, HiX } from "react-icons/hi";
import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import Location from "./assets/images/Location.png";
import Image from "react-bootstrap/Image";
import Burger from './assets/images/Burger.png';
import { useNavigate } from "react-router-dom";

export default function Restaurant(){
  const [active, setActive] = useState("Home");
    const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
    return(
        <>
        <div className="px-4 lg:!px-15 font-sans">
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
          <Image src={Basket} onClick={() => navigate("/Menupage")} className="w-8 h-7 ml-5" />

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
      <nav className="w-full py-1 md:py-3 mt-4  border-gray-200">
        <div className="px-1 md:px-4">
          {/* TOP BAR */}
          <div className="flex  justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Image src={Logo} className="w-30" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex ml-7 xl:ml-35  gap-5 lg:!gap-4 xl:!gap-15 text-sm md:text-md font-medium">
              {[
                "Home",
                "Browse Menu",
                "Special Offers",
                "Restaurants",
                "Track Order",
              ].map((item) => (
                <button
                  key={item}
onClick={() => {
      setActive(item);
      if (item === "Home") {
        navigate("/");
      }
    }}                  className={`px-2 py-1 rounded-pill md:!rounded-pill transition min-w-fit
                ${
                  active === item
                    ? "bg-orange-400 text-white"
                    : "text-black hover:text-orange-400"
                }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 group">
              {/* Login */}
              <button
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
              </button>

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
              {/* Menu Items */}
              {[
                "Home",
                "Browse Menu",
                "Special Offers",
                "Restaurants",
                "Track Order",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-pill text-center font-medium
            ${
              active === item ? "bg-orange-400 text-white" : "hover:bg-gray-100"
            }`}
                >
                  {item}
                </button>
              ))}

              {/* Login / Signup (Mobile) */}
              <button
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
              </button>
            </div>
          )}
        </div>
      </nav>
    

  {/* TEXT OVER IMAGE */}
  <div className="mt-6 relative">

  {/* BACKGROUND IMAGE */}
  <img
    src={Burger}
    alt="Burger"
    className="w-full h-95 object-cover opacity-25 rounded-xl"
  />

  {/* TEXT OVER IMAGE */}
  <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">

    {/* LEFT CONTENT */}
    <div className="lg:w-1/2 flex flex-col gap-4">
      <p className="text-sm text-black font-semibold">
        I'm lovin' it!
      </p>

      <h1 className="text-2xl md:text-4xl font-bold text-black">
        McDonald’s East London
      </h1>

      <div className="flex flex-wrap gap-3 mt-2">
        <button className="bg-slate-900 text-white px-4 py-2 rounded-pill text-sm">
          🛒 Minimum Order: 12 GBP
        </button>

        <button className="bg-slate-900 text-white px-4 py-2 rounded-pill text-sm">
          🛵 Delivery in 20–25 Minutes
        </button>
      </div>

      <button className=" w-fit bg-orange-500 text-white px-5 py-2  text-sm font-semibold">
        Open until 3:00 AM
      </button>
    </div>

    {/* RIGHT IMAGE + RATING */}
    <div className="relative mt-6 lg:mt-0 group">
      <img
        src={Burger}
        alt="Burger"
        className="w-64 md:w-120 rounded-xl hidden md:!hidden lg:!flex"
      />

      {/* RATING CARD */}
      <div className="absolute right-107 bottom-8 bg-white rounded-xl shadow-lg p-3 w-28">
        <h3 className="text-xl font-bold">3.4</h3>
        <div className="text-orange-400 text-sm">★★★★☆</div>
        <p className="text-xs text-gray-500">1,360 reviews</p>
      </div>
    </div>

  </div>
</div>
</div>
        </>
    )
}