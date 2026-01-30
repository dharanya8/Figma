import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import erroricon from "./assets/images/Error.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import basketicon from "./assets/images/Basket.png";

export default function Basket({ cart, setCart, onCheckout }) {
  const deliveryFee = 4;
  const MIN_ORDER = 20;

  const [showError, setShowError] = useState(false);

  const subtotal = cart.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("GBP ", ""))
        : item.price;
    return sum + item.qty * price;
  }, 0);

  const total = subtotal + deliveryFee;
  const canCheckout = subtotal >= MIN_ORDER;

  const handleCheckoutClick = () => {
    if (!canCheckout) {
      setShowError(true);
      return;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow pb-3">
      <div className="flex flex-row bg-[#028643] text-white justify-evenly items-center px-5 py-3">
        <img src={basketicon} alt="" className="w-9 h-9" />
        <div className="font-bold text-2xl">My Basket</div>
      </div>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b py-2 px-4 my-3"
        >
          <div className="w-full">
            <p className="font-semibold text-sm">{item.title}</p>
            <p className="text-xs">GBP {item.price}</p>

            <div className="flex gap-2 justify-evenly mt-2 ">
              <button
                className="text-2xl! font-bold"
                onClick={() =>
                  setCart(
                    cart
                      .map((i) =>
                        i.id === item.id ? { ...i, qty: i.qty - 1 } : i,
                      )
                      .filter((i) => i.qty > 0),
                  )
                }
              >
                -
              </button>
              <div className="bg-[#FC8A06] px-2 py-1 rounded-full font-bold">
                {item.qty}x
              </div>
              <button
                className="text-2xl! font-bold"
                onClick={() =>
                  setCart(
                    cart.map((i) =>
                      i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
                    ),
                  )
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="text-right w-full">
            <p className="font-semibold">
              GBP {(item.qty * item.price).toFixed(2)}
            </p>
            <div className="flex justify-end">
              <FaTrash
                className="text-red-500 cursor-pointer"
                onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="text-sm space-y-1 my-4 px-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>GBP {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span>Delivery Fee</span>
          <span>GBP {deliveryFee}</span>
        </div>
        <div className="flex justify-between font-bold bg-[#FC8A06CC] text-white px-2 py-3 rounded-md mt-4">
          <span className="text-lg">Total to pay</span>
          <span className="text-2xl">GBP {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mx-2"
      onClick={handleCheckoutClick}>
        <button
        onClick={() => canCheckout && onCheckout()}
          className={`w-full py-3 rounded-md! font-semibold transition flex items-center justify-center px-4 text-xl! gap-4
          ${
            canCheckout ? "bg-[#028643] text-white" : "bg-[#FFB1B1] text-white"
          }`}
        >
          <div>
            <IoArrowForwardCircleSharp size={28} />
          </div>
          <div className="">
              Checkout!
          </div>
        </button>
      </div>

      <div className="px-4">
        {showError && !canCheckout && (
          <div className="mt-4 bg-[#03081F] p-3 rounded-lg text-center relative text-center">
            <div className="text-white text-sm font-semibold">
              Minimum delivery is £20. You must spend{" "}
              <span className="underline text-[#FC8A06]">
                £{(MIN_ORDER - subtotal).toFixed(2)}
              </span>{" "}
              more for checkout.
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[90%] w-8 h-8">
              <img src={erroricon} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
