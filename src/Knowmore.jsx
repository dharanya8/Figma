import bell from "./assets/images/bell.png";
import phone from "./assets/images/phone.png";
import food from "./assets/images/food.png";

export default function Knowmore() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 px-20 py-15 rounded-2xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Know more about us!</h2>

        <div className="flex gap-4 mt-4 md:mt-0 text-sm">
          <button className="border-2 border-orange-400 text-orange-500 px-4 py-2 rounded-pill">
            Frequent Questions
          </button>
          <button>Who we are?</button>
          <button>Partner Program</button>
          <button>Help & Support</button>
        </div>
      </div>

      {/* Content Box */}
      <div className="bg-white rounded-2xl p-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* FAQ */}
        <div className="space-y-4 text-center">
          <button className="w-full bg-orange-500 text-white text-sm py-2 rounded-pill font-bold">
            How does Order.UK work?
          </button>

          <p className="text-sm text-black font-bold cursor-pointer mt-4">
            What payment methods are accepted?
          </p>
          <p className="text-sm text-black font-bold cursor-pointer mt-4">
            Can I track my order in real-time?
          </p>
          <p className="text-sm text-black font-bold cursor-pointer mt-4">
            Are there any special discounts or promotions available?
          </p>
          <p className="text-sm text-black font-bold cursor-pointer mt-4">
            Is Order.UK available in my area?
          </p>
        </div>

        {/* Steps */}
       <div className="md:col-span-3">
  <div className="grid grid-cols-1 md:grid-cols-3 ml-25">

    {/* Card 1 */}
    <div className="bg-gray-200 rounded-xl p-3 py-4 w-53 text-center">
      <h4 className="font-semibold mb-4">Place an Order!</h4>

      <img
        src={bell}
        alt="order"
        className="w-24 mx-auto mb-4"
      />

      <p className="text-sm text-black">
        Place order through our website or Mobile app
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-200 rounded-xl p-6 w-53 text-center">
      <h4 className="font-semibold mb-4">Track Progress</h4>

      <img
        src={food}
        alt="track"
        className="w-24 mx-auto mb-4"
      />

      <p className="text-sm text-black">
        You can track your order status with delivery time
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-200 rounded-xl p-2 py-4 w-53 text-center">
      <h4 className="font-semibold mb-4">Get your Order!</h4>

      <img
        src={phone}
        alt="delivery"
        className="w-24 mx-auto mb-4"
      />

      <p className="text-sm text-black">
        Receive your order at a lighting fast speed!
      </p>
    </div>

  </div>

  {/* Bottom text */}
  <p className="text-sm text-gray-600 text-center mt-6 ml-40 px-2 mt-4 me-18 text-black">
    Order.UK simplifies the food ordering process. Browse through our diverse
    menu, select your favorite dishes, and proceed to checkout. Your delicious
    meal will be on its way to your doorstep in no time!
  </p>
</div>
</div>
    </div>
              
  );
}
