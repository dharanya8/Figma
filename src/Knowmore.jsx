import bell from "./assets/images/bell.png";
import phone from "./assets/images/phone.png";
import food from "./assets/images/food.png";

export default function Knowmore() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 px-6 sm:px-8 md:px-20 py-8 md:py-14 rounded-2xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold">
          Know more about us!
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 md:mt-0 text-sm">
          <button className="border-2 border-orange-400 text-orange-500 px-4 py-2 rounded-pill">
            Frequent Questions
          </button>
          <button>Who we are?</button>
          <button>Partner Program</button>
          <button>Help & Support</button>
        </div>
      </div>

      {/* Content Box */}
      <div className="bg-white rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* FAQ */}
        <div className="space-y-4 text-center md:text-left">
          <button className="w-full bg-orange-500 text-white text-sm py-2 rounded-pill font-bold">
            How does Order.UK work?
          </button>

          <p className="text-sm font-bold cursor-pointer mt-3">
            What payment methods are accepted?
          </p>
          <p className="text-sm font-bold cursor-pointer mt-3">
            Can I track my order in real-time?
          </p>
          <p className="text-sm font-bold cursor-pointer mt-3">
            Are there any special discounts or promotions available?
          </p>
          <p className="text-sm font-bold cursor-pointer mt-3">
            Is Order.UK available in my area?
          </p>
        </div>

        {/* Steps */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:ml-6">

            {/* Card 1 */}
            <div className="bg-gray-200 rounded-xl p-4 md:!p-2 lg:!p-4 text-center">
              <h4 className="font-semibold mb-4">Place an Order!</h4>
              <img src={bell} alt="order" className="w-20 mx-auto mb-4" />
              <p className="text-sm">
                Place order through our website or Mobile app
              </p>
            </div>

            {/* Card 2 */} 
            <div className="bg-gray-200 rounded-xl p-4 md:!p-2 lg:!p-4 text-center">
              <h4 className="font-semibold mb-4">Track Progress</h4>
              <img src={food} alt="track" className="w-20 mx-auto mb-4" />
              <p className="text-sm">
                You can track your order status with delivery time
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 rounded-xl p-4 md:!p-2 lg:!p-4 text-center">
              <h4 className="font-semibold mb-4">Get your Order!</h4>
              <img src={phone} alt="delivery" className="w-20 mx-auto mb-4" />
              <p className="text-sm">
                Receive your order at a lighting fast speed!
              </p>
            </div>

          </div>

          {/* Bottom text */}
          <p className="text-sm text-center text-black mt-4   sm:px-6 md:px-16  ml-3 md:!ml-13">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>
    </div>
  );
}
