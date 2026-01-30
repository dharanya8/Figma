import { useNavigate } from "react-router-dom";
import { burgers } from "./Burgers1.js";

export default function Burgers({ layout = "sm:grid-cols-2 lg:grid-cols-3" }) {
  const navigate = useNavigate();

  const handleAdd = (item) => {
    navigate("/menu", {
      state: {
        selectedItem: { ...item, qty: 1 },
        category: "Burgers",
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-4xl font-bold mb-5 text-orange-400">Burgers</div>
      <div className={`grid ${layout} gap-4`}>
        {burgers.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl shadow items-center p-3 flex gap-2 hover:shadow-lg transition"
          >
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="!text-sm font-bold mb-1">{item.title}</h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <p className="text-sm font-bold mt-3">GBP {item.price}</p>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-lg"
            />

            <div className="bg-gray-200 w-15 h-15 absolute right-4 top-21 rounded-tl-3xl">
            <button
              onClick={() => handleAdd(item)}
              className="absolute bottom-3 right-3 w-7 h-7 bg-black text-white rounded-full! flex items-center justify-center text-2xl!"
            >
              +
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
