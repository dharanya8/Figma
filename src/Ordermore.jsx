import Image from "react-bootstrap/Image";
import man from './assets/images/man.png';
import Group from './assets/images/Group.png';
import vector from './assets/images/Vector.png';
import Logo from './assets/images/LOGO 1.png';
export default function Ordermore(){
    return(
        <>
       <div className="max-w-7xl mx-auto my-6 px-4">
      <div className="bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2">
          <img
            src={man}
            alt="Ordering"
            className="w-full h-full object-cover ml-5 relative"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex flex-row">
            <Image src={Logo}></Image><span className="mt-2">ing is more</span>
          </h2>

          <div className="inline-block mt-2 px-35 py-3 bg-blue-950 rounded-full ">
            <span className="text-orange-400 font-semibold  text-xl underline">
              Personalised
            </span>
            <span className="text-white ml-1 text-xl">& Instant</span>
          </div>

          <p className="mt-4 text-dark text-lg">
            Download the Order.uk app for faster ordering
          </p>

          {/* APP BUTTONS */}
          <div className="flex gap-3 mt-4">
            <div className="bg-gray-950 px-2 py-1 rounded-lg">
            <Image src={vector}
              className="h-8 cursor-pointer "
              alt="App Store"
            /></div>
            <Image src={Group}
              className="h-10 cursor-pointer"
              alt="Google Play"
            />
          </div>
        </div>

      </div>
    </div>

        </>

    )
}