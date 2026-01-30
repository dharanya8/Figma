
import Logo from "./assets/images/LOGO 1.png";
import girl from "./assets/images/girl.png";
import girl2 from "./assets/images/girl2.png";
import image from "./assets/images/image.png";
import tracking from "./assets/images/Tracking.png";
import tick from "./assets/images/TickBox.png";
import one from "./assets/images/one.png";
import two from "./assets/images/two.png";
import three from "./assets/images/three.png";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Menupage from "./Menupage";
import Navbar from "./Navbar";

function BannerSection() {
  
  return (
    <div className="!px-4 lg:!px-15 font-sans">
      <Navbar />
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
                className="flex-1 pl-2  py-2 text-xs  sm:text-sm outline-none"
              />
              <button className="bg-orange-500 text-white px-1  sm:px-10   py-2 sm:py-3 whitespace-nowrap text-sm font-semibold rounded-pill hover:bg-orange-600">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex relative md:group">
          <Image
            src={image}
            className="md:flex position-relative h-110 !mt-10 hidden md:group"
          ></Image>
          <Image
            src={girl2}
            className="position-absolute h-95 w-70 !mt-25 right-55 md:right-40 lg:!right-55"
          ></Image>
          <Image
            src={girl}
            alt="Banner"
            className="xl:!flex w-full h-105 rounded-xl object-cover position-absolute !mt-15 right-92 hidden lg:group"
          />

          <div className="absolute !top-6 right-4 space-y-3 w-70 hidden md:block">
            <div className="bg-white px-3 rounded-lg shadow-md text-sm pt-1 -translate-x-18 !mt-13">
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
            <div className="bg-white !pl-4 pt-1 rounded-lg shadow-md text-sm !mt-18 ml-4">
              <div className="flex ">
                <Image src={Logo} className="w-15 !mt-1"></Image>
                <span className="!ml-36 text-gray-400">now</span>
              </div>
              <h6 className="font-semibold text-sm !mt-1 flex">
                {" "}
                Order Accepted!
                <Image src={tick} className="w-5 !ml-6 h-5"></Image>
              </h6>
              <p className="relative text-xs text-gray-900 -top-2 ">
                Your order will be delivered shortly
              </p>
            </div>
            <div className="bg-white !px-3 !pt-1 rounded-lg shadow-md text-sm !mt-16 -translate-x-6">
              <div className="flex">
                <Image src={Logo} className="w-15 !mt-1"></Image>
                <span className="!ml-40 text-gray-400">now</span>
              </div>
              <h6 className="font-semibold text-xs !mt-1 flex">
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
