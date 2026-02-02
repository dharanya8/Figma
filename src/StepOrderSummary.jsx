import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import deliveryorder from "./assets/images/Deliveryscooter.png";

export default function StepOrderSummary({ onBack, onOrderNow }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  const cart = useSelector((state) => state.cart.items);

  const deliveryFee = 4;

  const subtotal = cart.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("GBP ", ""))
        : item.price;
    return sum + item.qty * price;
  }, 0);

  const total = subtotal + deliveryFee;

  const handleOrderNow = () => {
    if (!isLoggedIn) {
      navigate("/login", {
        replace: true,
        state: {
          returnTo: "/menu",
          resumeCheckout: "ORDER",
        },
      });
      return;
    }
    onOrderNow();
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="text-4xl text-[#03081F] font-extrabold text-center">
          Order Now
        </div>
        <div className="text-sm">
          Minimum Delivery is £10
        </div>
        </div>

      {/* <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-gray-500">Qty: {item.qty}</p>
            </div>

            <div className="font-semibold text-sm">
              GBP {(item.qty * item.price).toFixed(2)}
            </div>
          </div>
        ))}
      </div> */}

      <div className="bg-gray-100 rounded-lg p-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>GBP {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>GBP {deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>GBP {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-2 px-2">
        <button
          onClick={handleOrderNow}
          className="w-1/2 bg-[#03081F] text-white py-3 rounded-full! font-semibold flex items-center gap-4 px-4"
        >
          <img src={deliveryorder} alt="delivery" className="w-7 h-7" />
          <span className="font-extrabold text-[16px]">
          Deliver my order
          </span>
        </button>
        <button
          onClick={handleOrderNow}
          className="w-1/2 bg-[#FC8A06] text-white py-3 rounded-full! font-semibold flex items-center gap-4 px-4"
        >
          <img src={deliveryorder} alt="delivery" className="w-7 h-7" />
          <span className="font-extrabold text-[16px]">
          I will come & Collect
          </span>
        </button>
      </div>
      <div>
        <div className="">
          <span className="border-b"></span>
          <span>or</span>
          <span className="border-b border-"></span>
        </div>
        <button
          onClick={onBack}
          className="underline text-[#03081F] text-md font-bold"
        >
          Cancel & Go back
        </button>
      </div>

      {!isLoggedIn && (
        <p className="text-xs text-center text-red-500">
          You must login to place order
        </p>
      )}
    </div>
  );
}
