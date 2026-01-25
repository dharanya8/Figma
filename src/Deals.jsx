import group10 from "./assets/images/Group10.png";
import group11 from "./assets/images/Group11.png";
import group12 from "./assets/images/Group12.png";
import Image from "react-bootstrap/Image";

export default function Deals() {
  return (
    <div className="my-6 px-4 max-w-7xl mx-auto">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">

        <div className="text-sm md:text-lg font-bold">
          Up to -40%
          <span className="ml-3 md:ml-7">
            order.uk exclusive deals
          </span>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-5">
          <button className="text-sm md:text-base">
            vegan
          </button>

          <button className="text-sm md:text-base">
            sushi
          </button>

          <button className="py-2 px-4 rounded-pill border-2 border-orange-400 text-sm md:text-base">
            pizza & fast food
          </button>

          <button className="text-sm md:text-base">
            others
          </button>
        </div>
      </div>

      {/* IMAGES SECTION */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 my-3">

        <Image
          src={group10}
          className="w-full md:w-99 h-auto object-cover rounded-xl"
        />

        <Image
          src={group11}
          className="w-70 md:w-99 h-auto object-cover rounded-xl"
        />

        <Image
          src={group12}
          className="w-70 md:w-99 h-auto object-cover rounded-xl"
        />

      </div>
    </div>
  );
}
