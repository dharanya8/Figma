import Image from "react-bootstrap/Image";
import man from './assets/images/man.png';
import Group from './assets/images/Group.png';
import vector from './assets/images/Vector.png';
import Logo from './assets/images/LOGO 1.png';

export default function Ordermore() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-6 !px-8">
        <div className="bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={man}
              alt="Ordering"
              className="w-full max-w-sm md:max-w-full h-auto object-contain md:ml-5"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
              <Image src={Logo} className="w-28 sm:w-32 md:w-36" />
              <span>ing is more</span>
            </h2>

            <div className="inline-flex mt-4 !px-11 sm:px-10 py-2 md:py-2 text:start !sm:py-3 bg-blue-950 rounded-full w-55 md:w-90 !me:3 md:!me-60">
              <span className="text-orange-400 font-semibold text-xs sm:text-lg underline">
                Personalised
              </span>
              <span className="text-white ml-1 text-xs sm:text-xl">
                & Instant
              </span>
            </div>

            <p className="mt-4 text-black text-sm sm:text-base md:text-lg !me-1 md:!me-3 lg:!me-55 ">
              Download the Order.uk app for faster ordering
            </p>

            {/* APP BUTTONS */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start !ml-3">
              <div className="bg-gray-950 px-3 py-1 rounded-lg">
                <Image
                  src={vector}
                  className="h-8 sm:h-9 cursor-pointer"
                  alt="App Store"
                />
              </div>

              <Image
                src={Group}
                className="h-9 sm:h-10 cursor-pointer"
                alt="Google Play"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
