import Image from "react-bootstrap/Image";
import Rectangle13 from "./assets/images/Rectangle13.png";
import Rectangle15 from "./assets/images/Rectangle15.png";
import Rectangle19 from "./assets/images/Rectangle19.png";
import Rectangle21 from "./assets/images/Rectangle21.png";
import Rectangle23 from "./assets/images/Rectangle23.png";
import Rectangle17 from "./assets/images/Rectangle17.png";

export default function Popularcatagry() {
  return (
    <div className="my-6 px-4 max-w-7xl mx-auto">

      <h2 className="text-lg font-bold">
        order.uk Popular Categories
      </h2>

      {/* GRID */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-4
        my-4
      ">

        {/* CARD */}
        <div className="flex flex-col">
          <Image src={Rectangle13} className="w-full h-auto rounded-t-xl" />
          <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-b-xl">
            <h6>Burgers & Fast Food</h6>
            <p className="text-xs text-orange-500">21 Restaurants</p>
          </div>
        </div>

        <div className="flex flex-col">
          <Image src={Rectangle15} className="w-full h-auto rounded-t-xl" />
          <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-b-xl">
            <h6>Salads</h6>
            <p className="text-xs text-orange-500">32 Restaurants</p>
          </div>
        </div>

        <div className="flex flex-col">
          <Image src={Rectangle17} className="w-full h-auto rounded-t-xl" />
          <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-b-xl">
            <h6>Pasta & Casuals</h6>
            <p className="text-xs text-orange-500">4 Restaurants</p>
          </div>
        </div>

        <div className="flex flex-col">
          <Image src={Rectangle19} className="w-full h-auto rounded-t-xl" />
          <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-b-xl">
            <h6>Pizza</h6>
            <p className="text-xs text-orange-500">32 Restaurants</p>
          </div>
        </div>

        <div className="flex flex-col">
          <Image src={Rectangle21} className="w-full h-auto rounded-t-xl" />
          <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-b-xl">
            <h6>Breakfast</h6>
            <p className="text-xs text-orange-500">4 Restaurants</p>
          </div>
        </div>

        <div className="flex flex-col">
          <Image src={Rectangle23} className="w-full h-auto rounded-t-xl" />
          <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-b-xl">
            <h6>Soups</h6>
            <p className="text-xs text-orange-500">32 Restaurants</p>
          </div>
        </div>

      </div>
    </div>
  );
}
