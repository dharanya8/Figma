import React from "react";

export default function Cardpage({ cart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + 23.1 * item.qty,
    0
  );

  const deliveryFee = 2.5;
  const discount = 3.0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 sticky top-6">
      {/* HEADER */}
      <div className="bg-green-600 text-white rounded-xl px-4 py-3 mb-4">
        <h2 className="font-bold text-lg">🛒 My Basket</h2>
      </div>

      {/* EMPTY */}
      {cart.length === 0 && (
        <p className="text-gray-500 text-sm text-center">
          Your basket is empty
        </p>
      )}

      {/* ITEMS */}
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between border-b pb-3"
          >
            <div className="flex gap-3">
              {/* QTY BADGE */}
              <span className="bg-orange-500 text-white text-xs font-bold 
                               w-6 h-6 flex items-center justify-center rounded">
                {item.qty}x
              </span>

              {/* DETAILS */}
              <div>
                <p className="text-sm font-semibold">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">
                  No mushrooms • green peppers
                </p>
              </div>
            </div>

            {/* PRICE */}
            <p className="text-sm font-bold text-gray-800">
              £{(23.1 * item.qty).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      {cart.length > 0 && (
        <>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub Total</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="text-green-600">
                -£{discount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span>£{deliveryFee.toFixed(2)}</span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="mt-4 border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total to pay</span>
            <span className="text-orange-500">
              £{total.toFixed(2)}
            </span>
          </div>

          {/* CHECKOUT */}
          <button
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 
                       text-white py-3 rounded-xl font-semibold"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
