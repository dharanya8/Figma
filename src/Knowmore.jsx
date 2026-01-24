import Image from "react-bootstrap/Image";
import bell from "./assets/images/bell.png";
import phone from "./assets/images/phone.png";
import food from "./assets/images/food.png";
export default function Knowmore() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-2xl font-bold">Know more about us!</h2>

          <div className="flex gap-4 mt-4 md:mt-0 text-sm">
            <button className="border-1 px-3 py-2 border-orange-400 text-orange-500 px-4 py-1 rounded-pill">
              Frequent Questions
            </button>
            <button className="text-black">Who we are?</button>
            <button className="text-black">Partner Program</button>
            <button className="text-black">Help & Support</button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-gray-100 rounded-2xl p-8 flex flex-row justify-evenly gap-8">
          {/* FAQ List */}
          <div className="">
            <button className="w-55 bg-orange-500 text-white text-xs py-2 rounded-pill">
              How does Order.UK work?
            </button>
            <button className="text-xs text-gray-600 mt-3 cursor-pointer">
              What payment methods are accepted?
            </button>
            <button className="text-sm text-gray-600 mt-3 cursor-pointer">
              Can I track my order in real-time?
            </button>
            <button className="text-sm text-gray-600 mt-3 2cursor-pointer">
              Are there any special discounts or promotions available?
            </button>
            <button className="text-sm text-gray-600 mt-3 cursor-pointer">
              Is Order.UK available in my area?
            </button>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
              {/* Card 1 */}
              <div className="bg-white rounded-xl px-8 py-9 h-70 text-center shadow-sm">
                <div className="mx-auto w-26 h-16  bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Image src={bell} className="text-orange-500" />
                </div>
                <h4 className="font-semibold mb-2">Place an Order!</h4>
                <p className="text-sm text-gray-600">
                  Place order through our website or Mobile app
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Image src={food} className="text-yellow-500" />
                </div>
                <h4 className="font-semibold mb-2">Track Progress</h4>
                <p className="text-sm text-gray-600">
                  You can track your order status with delivery time
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Image src={phone} className="text-green-500" />
                </div>
                <h4 className="font-semibold mb-2">Get your Order!</h4>
                <p className="text-sm text-gray-600">
                  Receive your order at lightning fast speed!
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-center m-0">
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
      </div>
    </>
  );
}
