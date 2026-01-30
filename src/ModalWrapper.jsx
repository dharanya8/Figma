import { IoMdCloseCircle } from "react-icons/io";

export default function ModalWrapper({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-xl rounded-md relative">
        <button
          className="absolute -right-4 -top-4 bg-white rounded-full!"
          onClick={onClose}
        >
          <IoMdCloseCircle color="#FC8A06" size={42} />
        </button>
        {children}
      </div>
    </div>
  );
}

