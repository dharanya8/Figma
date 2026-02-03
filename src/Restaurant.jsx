import Navbar from './Navbar';
import Burger from './assets/images/Burger.png';

export default function Restaurant(){
  
    return(
        <>
        <div className="!px-4 lg:!px-15 font-sans">
    <Navbar />

  {/* TEXT OVER IMAGE */}
  <div className="!mt-6 relative">

  {/* BACKGROUND IMAGE */}
  <img
    src={Burger}
    alt="Burger"
    className="w-full !h-95 object-cover opacity-25 rounded-xl"
  />

  {/* TEXT OVER IMAGE */}
  <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">

    {/* LEFT CONTENT */}
    <div className="!lg:w-1/2 flex flex-col gap-4 !ml-5 md:!ml-5">
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
    <div className="relative !mt-6 !lg:mt-0 group">
      <img
        src={Burger}
        alt="Burger"
        className="w-64 md:w-100 !mr-15 rounded-xl hidden md:!hidden lg:!flex"
      />

      {/* RATING CARD */}
      <div className="absolute right-103 bottom-8 bg-white rounded-xl shadow-lg p-3 w-28">
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