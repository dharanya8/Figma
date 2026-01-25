import star from "./assets/images/star.png";
import Basket from "./assets/images/Basket.png";
import Forward from "./assets/images/Forward.png";
import Line from "./assets/images/Line.png";
import Logo from "./assets/images/LOGO 1.png";
import girl from "./assets/images/girl.png";
import girl2 from "./assets/images/girl2.png";
import image from "./assets/images/image.png";
import Location from "./assets/images/Location.png";
import tracking from "./assets/images/Tracking.png";
import tick from "./assets/images/TickBox.png";
import one from "./assets/images/one.png";
import two from "./assets/images/two.png";
import three from "./assets/images/three.png";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { HiMenu, HiX } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import { PiBasketBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";

function BannerSection() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <div className="px-2 lg:!px-15 font-sans">
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
        <div className="bg-green-700 flex items-center h-12 w-76 lg:w-70 rounded-b-xl border-green-700 md:ml-21">
          <Image src={Basket} className="w-8 h-7 ml-5" />

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
                  onClick={() => setActive(item)}
                  className={`px-2 py-1 rounded-pill md:!rounded-pill transition min-w-fit
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

      <div className="bg-gray-50 border-1 border-gray-100 mt-4 rounded-xl flex flex-row items-center justify-between overflow-hidden">
        <div className="flex flex-col py-13 md:!py-28 pl-2 md:!pl-2 lg:!pl-10 xl:!pl-15">
          <p className="text-sm md:!text-md lg:!text-md">
            order Restaurant food,takeaway any groceries
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="lg:text-5xl">Feast Your Senses,</span> <br />
            <span className="text-orange-500 lg:text-5xl">Fast and Fresh</span>
          </h1>
          <p className="mt-3 text-sm md:!text-md">
            Enter a pincode to see what we deliver
          </p>
          <div className="mt-6">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden  w-full max-w-[350px] bg-white">
              <input
                type="text"
                placeholder="e.g. 638000"
                className="flex-1 pl-2 py-2 text-xs sm:text-sm outline-none"
              />
              <button className="bg-orange-500 text-white px-2  sm:px-10  py-2 sm:py-3 whitespace-nowrap text-sm font-semibold rounded-pill hover:bg-orange-600">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex relative md:group">
          <Image
            src={image}
            className="md:flex position-relative h-110 mt-10 hidden md:group"
          ></Image>
          <Image
            src={girl2}
            className="position-absolute h-95 w-70 mt-25 right-55 md:right-34 lg:!right-55"
          ></Image>
          <Image
            src={girl}
            alt="Banner"
            className="xl:!flex w-full h-105 rounded-xl object-cover position-absolute mt-15 right-92 hidden lg:group"
          />

          <div className="absolute top-6 right-4 space-y-3 w-70 hidden md:block">
            <div className="bg-white px-3 rounded-lg shadow-md text-sm pt-1 -translate-x-18 mt-13">
              <div className="flex ">
                <Image src={Logo} className="w-15 mt-1"></Image>
                <span className="ml-40 text-gray-400">now</span>
              </div>
              <h6 className="font-semibold text-xs mt-1">
                We've received your order!
              </h6>
              <p className="relative text-xs text-gray-900 -top-2">
                Awaiting restaurant acceptance
                <img
                  src={tracking}
                  alt=""
                  className="absolute -top-0 left-37 w-4 h-4"
                />
              </p>
            </div>
            <div className="bg-white pl-4 pt-1 rounded-lg shadow-md text-sm mt-18 ml-4">
              <div className="flex ">
                <Image src={Logo} className="w-15 mt-1"></Image>
                <span className="ml-36 text-gray-400">now</span>
              </div>
              <h6 className="font-semibold text-sm mt-1 flex">
                {" "}
                Order Accepted!
                <Image src={tick} className="w-5  ml-6 h-5"></Image>
              </h6>
              <p className="relative text-xs text-gray-900 -top-2 ">
                Your order will be delivered shortly
              </p>
            </div>
            <div className="bg-white px-3 pt-1 rounded-lg shadow-md text-sm mt-16 -translate-x-6">
              <div className="flex">
                <Image src={Logo} className="w-15 mt-1"></Image>
                <span className="ml-40 text-gray-400">now</span>
              </div>
              <h6 className="font-semibold text-xs mt-1 flex">
                {" "}
                Your rider's nearby🎉
              </h6>
              <p className="relative text-xs text-gray-900 -top-2">
                They're almost there-get ready!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
