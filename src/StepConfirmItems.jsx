import { useDispatch } from "react-redux";
import { updateQty } from "./cartSlice";
import foodbanner from "./assets/images/Group8.png";
import Image from "react-bootstrap/Image";

export default function StepConfirmItems({ cart, onNext, onClose }) {
  const dispatch = useDispatch();
  const deliveryfee = 4;

  const increaseQty = (id, currentQty) => {
    dispatch(updateQty({ id, qty: currentQty + 1 }));
  };

  const decreaseQty = (id, currentQty) => {
    dispatch(updateQty({ id, qty: currentQty - 1 }));
  };

  const subtotal = cart.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("GBP ", ""))
        : item.price;
    return sum + item.qty * price;
  }, 0);

  const total = subtotal + deliveryfee;

  return (
    <div>
      <div>
        <Image src={foodbanner} className="object-cover w-full h-40" />
      </div>

      <div className="p-4 flex flex-col h-full">
        <div className="text-lg font-bold mb-4 text-start">Confirm your order</div>

        <div className="flex flex-col gap-3 max-h-[30vh] overflow-y-scroll no-scrollbar">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-200 py-2 px-2"
            >
              <div className="flex items-center gap-3">
                <div className="px-2 p-1 border-r border-gray-400">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <p className="font-semibold text-sm m-0">{item.title}</p>
                  <p className="text-xs text-gray-500 m-0">GBP {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id, item.qty)}
                  className="rounded-full! w-4 h-4 bg-[#03081F] font-bold text-white flex items-center justify-center"
                >
                  −
                </button>

                <span className="font-bold bg-white px-3 py-2 rounded-md">
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.id, item.qty)}
                  className="w-4 h-4 rounded-full! bg-[#03081F] font-bold text-white flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-3 flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center ">
            <div className="bg-[#FC8A06CC] text-lg flex items-center gap-4 px-2 py-2 text-white rounded-md">
              <span className="text-sm">Total to pay</span>
              <span className="text-xl font-bold">{total.toFixed(2)}</span>
            </div>
            <div className="text-[10px]">
              Delivery & Tax will be calculated in the next step
            </div>
          </div>

          <div className="flex gap-4 items-center justify-end">
            <button onClick={onClose} className="font-semibold underline">
              Take me back
            </button>

            <button
              onClick={onNext}
              className="w-45 py-2 bg-[#028643] text-white rounded-md! font-semibold"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
