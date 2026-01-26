import React from "react";
import Burger1 from "./assets/images/Burger1.png"; 
import Burger2 from './assets/images/Burger2.png';


const burgers = [
  {
    title: "Royal Cheese Burger with extra Fries",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium fries, 3 cold drinks",
    price: "GBP 23.10",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium fries, 3 cold drinks",
    price: "GBP 23.10",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium fries, 3 cold drinks",
    price: "GBP 23.10",
  },

  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium fries, 3 cold drinks",
    price: "GBP 23.10",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium fries, 3 cold drinks",
    price: "GBP 23.10",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium fries, 3 cold drinks",
    price: "GBP 23.10",
  },
];

export default function Burgers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-5 text-nlack">Burgers</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
  {burgers.map((item, index) => (
    <div
      key={index}
      className="relative bg-white rounded-xl shadow-md px-3 pt-2 flex gap-2 hover:shadow-lg transition"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold mb-1">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            {item.desc}
          </p>
        </div>

        <p className="text-sm font-bold mt-3">{item.price}</p>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={Burger1}
        alt="burger"
        className="w-32 h-32 object-cover rounded-lg"
      />

      {/* PLUS BUTTON – SAME POSITION FOR ALL */}
      <div className="bg-gray-200 w-15 h-15 absolute right-4 top-19 rounded-tl-3xl">
      <button
        className="absolute top-4 right-3 w-8 h-8 bg-black text-white 
                   rounded-pill flex items-center justify-center text-lg"
      >
        +
      </button></div>
    </div>
  ))}

      </div>
    </div>
  );
}
