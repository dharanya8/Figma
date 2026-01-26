import Image from "react-bootstrap/Image";
import Rectangle1 from "./assets/images/Rectangle1.png";
import Rectangle2 from "./assets/images/Rectangle2.png";
import Rectangle3 from "./assets/images/Rectangle3.png";
import Rectangle4 from "./assets/images/Rectangle4.png";
import Rectangle5 from "./assets/images/Rectangle5.png";
import Rectangle6 from "./assets/images/Rectangle6.png";

export default function Popularrestaurant() {
  return (
    <>
      <div className="my-5 max-w-7xl mx-auto px-4">
        <div className="text-lg font-bold mb-4">
          Popular Restaurants
        </div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {/* CARD 1 */}
          <div className="flex flex-col">
            <Image src={Rectangle1} className="w-full h-45 object-cover rounded-t-xl" />
            <div className="bg-orange-500 border-2 border-orange-500 text-center py-3 rounded-b-xl">
              <h6 className="text-white text-md">McDonald's London</h6>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col">
            <Image src={Rectangle2} className="w-full h-45 object-cover rounded-t-xl" />
            <div className="bg-orange-500 border-2 border-orange-500 text-center py-3 rounded-b-xl">
              <h6 className="text-white">Papa Jonson</h6>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col">
            <Image src={Rectangle3} className="w-full h-45 object-cover rounded-t-xl" />
            <div className="bg-orange-500 border-2 border-orange-500 text-center py-3 rounded-b-xl">
              <h6 className="text-white">KFC West London</h6>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col">
            <Image src={Rectangle4} className="w-full h-45 object-cover rounded-t-xl" />
            <div className="bg-orange-500 border-2 border-orange-500 text-center py-3 rounded-b-xl">
              <h6 className="text-white">Texas Chicken</h6>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="flex flex-col">
            <Image src={Rectangle5} className="w-full h-45 object-cover rounded-t-xl" />
            <div className="bg-orange-500 border-2 border-orange-500 text-center py-3 rounded-b-xl">
              <h6 className="text-white">Burger King</h6>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="flex flex-col">
            <Image src={Rectangle6} className="w-full h-45 object-cover rounded-t-xl" />
            <div className="bg-orange-500 border-2 border-orange-500 text-center py-3 rounded-b-xl">
              <h6 className="text-white">Shaurma 1</h6>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
