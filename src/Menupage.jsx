import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import Burgers from "./Burgers";
import Fries from "./Fries";
import Colddrinks from "./Colddrinks";
import menuicon from "./assets/images/menuicon.png";
import Pizza from "./Pizza";
import CheckoutModal from "./CheckoutModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MenuPage() {
  const location = useLocation();

  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("");
  const [checkoutStep, setCheckoutStep] = useState(null);

  useEffect(() => {
    if (location.state?.selectedItem) {
      const item = location.state.selectedItem;

      setCart((prevCart) => {
        const exists = prevCart.find((i) => i.id === item.id);
        if (exists) return prevCart;
        return [...prevCart, item];
      });

      setCategory(location.state.category);
    }
    if (location.state?.resumeCheckout === "ORDER") {
    setCheckoutStep("ORDER");
  }
  }, [location.state]);

  const addToCart = (item) => {
    const exists = cart.find((i) => i.id === item.id);
    if (exists) return;
    setCart([...cart, { ...item, qty: 1 }]);
  };

  const handleOrderNow = () => {
  toast.success("Order placed successfully!");
  setCart([]);
  setCheckoutStep(null);
};

  return (
    <div className="flex flex-col gap-4 lg:flex-row max-w-7xl px-4 mx-auto my-4">
      {/* LEFT */}
      <div className="flex sm:flex-row lg:flex-col overflow-x-scroll no-scrollbar w-full lg:w-[40%] bg-[#FBFBFB] border-1 border-[#BCBCBC] rounded-xl">
        <div className="flex items-center py-2 px-4 lg:py-4! gap-3 border-r sticky left-0 bg-[#028643] lg:bg-[#FBFBFB] lg:border-none">
          <div>
            <img src={menuicon} alt="" className="w-10 h-10" />
          </div>
          <div className="text-2xl font-bold text-white lg:text-[#000000]!">
            Menu
          </div>
        </div>
        <div className="flex sm:flex-row lg:flex-col gap-2 border-t">
          {["Burgers", "Fries", "ColdDrinks", "Pizza"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`block w-full py-2 px-4 text-xl! font-bold text-start
              ${category === c ? "bg-[#03081F] text-white border-none" : "text-[#03081F] hover:bg-gray-300"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[700px] overflow-y-scroll no-scrollbar pb-4">
        {category === "Burgers" && (
          <Burgers addToCart={addToCart} layout="grid-cols-1" />
        )}
        {category === "Fries" && (
          <Fries addToCart={addToCart} layout="grid-cols-1" />
        )}
        {category === "ColdDrinks" && (
          <Colddrinks addToCart={addToCart} layout="grid-cols-1" />
        )}
        {category === "Pizza" && <Pizza addToCart={addToCart} />}
      </div>

      <div className="w-full lg:w-[50%]">
        <Basket
          cart={cart}
          setCart={setCart}
          onCheckout={() => setCheckoutStep("CONFIRM")}
        />
      </div>
      <CheckoutModal
        open={checkoutStep !== null}
        step={checkoutStep}
        setStep={setCheckoutStep}
        cart={cart}
        setCart={setCart}
        onOrderNow={handleOrderNow}
      />
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}
