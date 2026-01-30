import { useNavigate, useLocation } from "react-router-dom";

export default function StepOrderSummary({
  cart,
  onBack,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn =
  localStorage.getItem("isLoggedIn") === "true";

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
        state: {
          returnTo: "/menu",
          checkoutStep: "ORDER",
        },
      });
      return;
    }

  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center">
        Order Summary
      </h2>

      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold text-sm">
                {item.title}
              </p>
              <p className="text-xs text-gray-500">
                Qty: {item.qty}
              </p>
            </div>

            <div className="font-semibold text-sm">
              GBP {(item.qty * item.price).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

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

      <div className="flex gap-3 mt-2">
        <button
          onClick={onBack}
          className="w-1/2 border border-gray-400 py-2 rounded-lg"
        >
          Back
        </button>

        <button
          onClick={handleOrderNow}
          className="w-1/2 bg-[#028643] text-white py-2 rounded-lg font-semibold"
        >
          Order Now
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
