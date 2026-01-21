import React from "react";
import star from '../src/assets/LOGO 1/Star.jpg';
import Image from "react-bootstrap/Image";
import Basket from '../src/assets/LOGO 1/Basket.jpg';
import Forward from '../src/assets/LOGO 1/Forward.jpg';
import Line from '../src/assets/LOGO 1/Line.jpg';
import { PiBasketBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";
import Logo from '../src/assets/LOGO 1/LOGO 1.png';
import { useState } from "react";
import { MdPerson } from "react-icons/md";

function BannerSection() {
    const [active, setActive] = useState("Home");

    return (
        <div className="px-15 font-sans">
            <div className="bg-gray-100 flex items-center justify-between border-2 border-gray-200 h-12 rounded-b-xl ">
                <div className="flex items-center  gap-2 ml-10">
                    <Image src={star} alt="Star" className="w-5 h-5" />
                    <p className="font-medium text-sm font-semibold mt-3">
                        Get 5% off your first order,{" "}
                        <span className="underline text-orange-400 font-semibold">Promo: ORDER5</span>
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-">
                    <p className="text-sm font-semibold mt-3 text-black-500 ml-30">Regent Street, A4, A4201, London</p>
                    <button className="text-orange-400 underline text-sm font-semibold">Change Location</button>
                </div>
                <div class="bg-green-700 flex h-12 w-70 rounded-b-xl border-green-700">
                    < PiBasketBold className="text-4xl text-light ml-5 mt-1 position-relative" />
                    <FaCheckCircle className="position-absolute text-light ms-11 mt-4" />
                    <Image src={Line} class=" h-12 g-2 ms-3 "></Image>
                    <p class="text-light font-semibold mt-2 ms-2">23 Items</p>
                    <Image src={Line} class=" h-12 ms-2"></Image>
                    <p class="text-light font-semibold mt-2 ms-2 ">GBP 79.89</p>
                    <Image src={Line} class=" h-12 ms-2"></Image>
                    < FaCircleArrowDown className="text-xl text-light mt-2 ml-2" />
                </div>
            </div>
            <div className=" py-3">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className=" items-center gap-1">
                        <Image src={Logo} className="w-30"></Image>
                    </div>

                    {/* Menu */}
                    <div className="flex ml-35 gap-2 text-md font-medium ">
                        {["Home", "Browse Menu", "Special Offers", "Restaurants", "Track Order"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => setActive(item)}
                                    className={`px-4 py-1 rounded-pill transition
                                        ${active === item
                                            ? "bg-orange-400 text-white"
                                            : "text-black hover:text-orange-400"
                                        }`}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    {/* Login / Signup */}
                    <button className="bg-slate-900 text-white px-4 py-2  rounded-pill flex items-center gap-2 text-sm font-semibold">
                        <span className="bg-orange-400 w-5 h-5 rounded-pill flex items-center justify-center">
                            <MdPerson className="text-black text-md" />
                        </span>
                        Login / Signup
                    </button>

                </div>
            </div>

            {/* <div className="bg-white mt-4 rounded-xl flex flex-col md:flex-row items-center md:items-start overflow-hidden">
        <div className="flex-1 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Feast Your Senses, <span className="text-orange-500">Fast and Fresh</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Enter a postcode to see what we deliver
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 flex-1"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>

        <div className="flex-1 relative p-6">
          {/* <Image
            // src={star} // Replace with main banner image
            alt="Banner"
            className="w-full h-auto rounded-xl object-cover"
          />
          Example notifications */}
            {/* <div className="absolute top-6 right-6 space-y-3">
            <div className="bg-white p-3 rounded-lg shadow-md text-sm">
              <strong>Order:</strong> We've received your order!
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md text-sm">
              <strong>Order Accepted:</strong> Your order will be delivered shortly
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md text-sm">
              <strong>Your rider's nearby:</strong> They're almost there – get ready!
            </div>
          </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    );
}

export default BannerSection;
