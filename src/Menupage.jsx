import React, { useState } from "react";
import Burgers from "./Burgers";
import Fries from "./Fries";
import Colddrinks from "./Colddrinks";
import Cardpage from "./Cardpage";

export default function Menupage() {
  const [cart, setCart] = useState([]);

  // Add burger to cart
  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);

    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }

}
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8">
        <Burgers addToCart={addToCart} />
      </div>
      <div className="!col-span-4 fixed ml-230">
        <Cardpage cart={cart} setCart={setCart} />
      </div>
<div className="col-span-8">
        <Fries addToCart={addToCart} />
      </div>
      <div className="col-span-8">
        <Colddrinks addToCart={addToCart} />
      </div>
      

    
    </div>
  );
}
