import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import foodbanner from "./assets/images/Group8.png";
import Image from "react-bootstrap/Image";

const complimentaryItems = [
  {
    id: "coke",
    title: "Free Coke",
  },
  {
    id: "fries",
    title: "Free Fries",
  },
  {
    id: "dip",
    title: "Extra Dip",
  },
  {
    id: "meat",
    title: "Beef"
  }
];

export default function StepComplimentary({ cart, onNext, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  const maxSelect = total >= 100 ? 2 : total >= 50 ? 1 : 0;

  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
      return;
    }

    if (selected.length >= maxSelect) return;

    setSelected([...selected, id]);
  };

  return (
    <div>
      <div>
        <Image src={foodbanner} className="object-cover w-full h-40"></Image>
      </div>
      <div className="p-4 flex flex-col h-full">
        <div className="text-xl font-bold text-start mb-2">
          Choose your complimentary
        </div>

        <p className="text-lg font-bold text-center text-[#FC8A06] mb-4">
          Please select up to <span className="font-bold">{maxSelect}</span>{" "}
          options free{maxSelect > 1 ? "s" : ""}
        </p>

        <div className="flex-1 grid grid-cols-3 gap-4">
          {complimentaryItems.map((item) => {
            const isChecked = selected.includes(item.id);
            const disabled = !isChecked && selected.length >= maxSelect;

            return (
              <div
                key={item.id}
                onClick={() => !disabled && toggleSelect(item.id)}
                className={`flex items-center gap-2 cursor-pointer select-none
    ${disabled ? "opacity-40 cursor-not-allowed" : ""}
  `}
              >
    
                <div
                  className={`w-5 h-5 flex items-center justify-center border rounded
      ${
        isChecked ? "bg-green-600 border-green-600" : "bg-white border-gray-300"
      }
    `}
                >
                  {isChecked && <FaCheck className="text-white text-xs" />}
                </div>

                <span className="text-sm font-semibold text-gray-900">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {maxSelect === 0 && (
          <p className="text-xs text-center text-red-500 mt-3">
            Add more items to unlock complimentary
          </p>
        )}

        <div className="mt-4 flex gap-4 items-center justify-end">
          <button
              onClick={onBack}
              className="font-semibold underline"
            >
              Take me back
            </button>

          <button
            onClick={() => onNext(selected)}
            disabled={selected.length !== maxSelect}
            className={`w-45 py-2 rounded-md! font-semibold
          ${
            selected.length === maxSelect
              ? "bg-[#028643] text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
