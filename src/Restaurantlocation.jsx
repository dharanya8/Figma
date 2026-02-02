export default function Restaurantlocation() {
  return (
    <div className="max-w-7xl mx-auto !px-4 !py-10">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">

        {/* MAP */}
        <iframe
          title="McDonald's South London"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4966.728098806117!2d-0.0882839194535006!3d51.50653677296582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stooley%20st%2CLondon%20Bridge%2Clondon%20SE1%20%202TF%2CUk!5e0!3m2!1sen!2sin!4v1769509761622!5m2!1sen!2sin" 
          width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[420px] border-0"
        ></iframe>

        {/* LEFT INFO CARD */}
        <div className="absolute !top-9 left-1 md:!left-20 bg-gradient-to-b from-[#0b1020] to-[#020617] text-white !p-6 rounded-xl w-[200px] md:!w-[300px] shadow-xl">
          
          <h2 className="text-xl font-bold">McDonald's</h2>
          <p className="text-orange-400 font-semibold mt-1">
            South London
          </p>

          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Tooley St, London Bridge, London SE1 2TF, United Kingdom
          </p>

          <div className="mt-4 text-sm">
            <p className="text-white">Phone number</p>
            <p className="font-semibold text-orange-400 text-md">+934443-43</p>
          </div>

          <div className="mt-3 text-sm">
            <p className="text-white">Website</p>
            <a
              href="https://mcdonalds.uk/"
              target="_blank"
              rel="noreferrer"
              className="!text-orange-400 !no-underline !text-md"
            >
              http://mcdonalds.uk/
            </a>
          </div>
        </div>

        {/* MAP MARKER BUTTON (Right side) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <button className="bg-orange-400 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            📍
          </button>
        </div>

      </div>
    </div>
  );
}
