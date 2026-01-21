import React from "react";
import star from '../src/assets/LOGO 1/star.png'
import Image from "react-bootstrap/Image";
import Basket from '../src/assets/LOGO 1/Basket.png';
import Forward from '../src/assets/LOGO 1/Forward.png';
import Line from '../src/assets/LOGO 1/Line.png';
import { PiBasketBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";
import Logo from '../src/assets/LOGO 1/LOGO 1.png';
import { useState } from "react";
import { MdPerson } from "react-icons/md";
import girl from '../src/assets/LOGO 1/girl.png';
import Location from '../src/assets/LOGO 1/Location.png';
import girl2 from '../src/assets/LOGO 1/girl2.png';
import image from '../src/assets/LOGO 1/image.png';
import tracking from '../src/assets/LOGO 1/tracking.png';
import tick from '../src/assets/LOGO 1/Tickbox.png';
import one from '../src/assets/LOGO 1/one.png';
import two from '../src/assets/LOGO 1/two.png';
import three from '../src/assets/LOGO 1/three.png';

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
                    <Image src={Location}className="ml-20"></Image>
                    <p className="text-sm font-semibold mt-3 text-black-500 ">Regent Street, A4, A4201, London</p>
                    <button className="text-orange-400 underline text-sm font-semibold">Change Location</button>
                </div>
                <div class="bg-green-700 flex h-12 w-70 rounded-b-xl border-green-700">
                    <Image src={Basket} className="w-8 h-7 mt-2 ml-5"></Image>
                    <Image src={Line} class=" h-12 g-2 ml-15 position-fixed "></Image>
                    <p class="text-light font-semibold mt-2 ml-4">23 Items</p>
                    <Image src={Line} class=" h-12 ml-34 position-fixed"></Image>
                    <p class="text-light font-semibold mt-2 ml-4 ">GBP 79.89</p>
                    <Image src={Line} class=" h-12 ml-57 position-fixed"></Image>
                    <Image src={Forward} className="mt-2 w-7 h-7 ml-5"></Image>
                </div>
            </div>
            <div className=" py-3 mt-4">
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

             <div className="bg-gray-50 border-1 border-gray-100 mt-4 rounded-xl flex flex-col md:flex-row items-center md:items-start overflow-hidden">
        <div className="flex-1 py-33 pl-13">
            <p className="text-xl">order Restaurant food,takeaway ang groceries</p>
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="lg:text-5xl">Feast Your Senses,</span> <br/><span className="text-orange-500 lg:text-5xl">Fast and Fresh</span>
          </h1>
          <p className="mt-2 ">
            Enter a postcode to see what we deliver
          </p>
          <div className="mt-6">
  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-[350px] bg-white">
    
    <input
      type="text"
      placeholder="e.g. EC4R 3TE"
      className="flex-1 pl-5 py-3 text-sm outline-none"
    />
    <button className="bg-orange-500 text-white px-12 py-3 text-sm font-semibold rounded-pill hover:bg-orange-600">
      Search
    </button>

  </div>
</div>

        </div>

        <div className="flex relative ">
            <Image src={image} className="position-relative h-105 mt-24"></Image>
            <Image src={girl2} className="position-absolute h-87 mt-42 right-50 "></Image>
            <Image
            src={girl} 
            alt="Banner"
            className="w-full h-99 rounded-xl object-cover position-absolute mt-30 right-85"
          /> 
            <div className="absolute top-6 right-6 space-y-3">
            <div className="bg-white px-3 rounded-lg shadow-md text-sm pt-3 -translate-x-20 mt-20">
             <div className="flex "> 
                <Image src={Logo}className="w-20"></Image><span className="ml-60 text-gray-400">now</span></div>
               <p className="font-semibold text-xl mt-2">We've received your order!</p>
               <p className="relative text-md text-gray-900 -top-3">
                 Awaiting restaurant acceptance
              <img
                src={tracking}
                alt=""
                className="absolute -top-0 left-37 w-4 h-4"
              />
              </p>

            </div>
            <div className="bg-white px-3 pt-3 rounded-lg shadow-md text-sm ">
              <div className="flex"> 
                <Image src={Logo}className="w-20"></Image><span className="ml-60 text-gray-400">now</span></div>
               <p className="font-semibold text-xl mt-2 flex"> Order Accepted!<Image src={tick}className="w-5 mt-1 ml-6 h-5"></Image></p>
               <p className="relative text-md text-gray-900 -top-3">
                 Your order will be delivered shortly  
              </p>    
            </div> 
            <div className="bg-white px-3 pt-3 rounded-lg shadow-md text-sm ">
              <div className="flex"> 
                <Image src={Logo}className="w-20"></Image><span className="ml-60 text-gray-400">now</span></div>
               <p className="font-semibold text-xl mt-2 flex"> Your rider's nearby🎉</p>
               <p className="relative text-md text-gray-900 -top-3">
                 They're almost there-get ready! 
              </p>    
            </div> 
             </div>
        </div>
        </div>
        </div>
    );
};

export default BannerSection;
