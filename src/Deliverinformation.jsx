import { LuClock9 } from "react-icons/lu";
import { TiLocation } from "react-icons/ti";
import { FaClipboardUser } from "react-icons/fa6";

export default function RestaurantInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3  rounded-xl overflow-hidden border border-blue-400">

        {/* DELIVERY INFORMATION */}
        <div className="!p-9 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <TiLocation className="text-black text-3xl" />
            <h3 className="font-semibold text-lg">Delivery information</h3>
          </div>

          <ul className="text-sm space-y-2 text-gray-700">
            <li><b>Monday:</b> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Tuesday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Wednesday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Thursday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Friday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Saturday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Sunday:</b> 8:00 AM–12:00 AM</li>
          </ul>

          <p className="mt-4 text-sm">
            <b>Estimated time until delivery:</b> 20 min
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="!p-9 bg-white border-t md:border-t-0  border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <FaClipboardUser className="text-black text-2xl" />
            <h3 className="font-semibold text-lg">Contact information</h3>
          </div>

          <p className="text-md text-gray-600 leading-relaxed">
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>

          <div className="mt-4 text-md space-y-2">
            <p><b>Phone number</b></p>
            <p>+934443-43</p>

            <p className="mt-3"><b>Website</b></p>
            <a
              href="http://mcdonalds.uk/"
              className="text-black text-decoration-none !text-lg  "
            >
             http://mcdonalds.uk/
            </a>
          </div>
        </div>

        {/* OPERATIONAL TIMES */}
        <div className="!p-9 bg-slate-900 text-white">
          <div className="flex items-center gap-2 mb-4">
            <LuClock9 className="text-white text-2xl" />
            <h3 className="font-semibold text-lg">Operational Times</h3>
          </div>

          <ul className="text-sm space-y-2 text-gray-200">
            <li><b>Monday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Tuesday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Wednesday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Thursday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Friday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Saturday:</b> 8:00 AM–3:00 AM</li>
            <li className="mt-3"><b>Sunday:</b> 8:00 AM–3:00 AM</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
