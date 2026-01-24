import appbanner from "./assets/images/appstorebanner.png";
import footerlogo from "./assets/images/footerlogo.png";

export default function Footer() {
  return (
    <footer className="px- py-4 mt-6">

      {/* TOP FOOTER */}
      <div className="bg-gray-200 py-8 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 justify-between px-12">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-4 max-w-sm">
            <img src={footerlogo} alt="logo" className="w-32" />

            <img src={appbanner} alt="app banner" className="w-44" />

            <p className="text-sm ">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-3 max-w-sm">
            <h5 className="font-semibold ml-1">
              Get Exclusive Deals in your Inbox
            </h5>

            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-300">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2 text-sm font-semibold hover:bg-orange-600">
                Subscribe
              </button>
            </div>

            <p className="text-xs ml-2">
              We won’t spam, read our{" "}
              <a href="#" className="underline text-black">
                email policy
              </a>
            </p>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-3 ">
            <h5 className="font-bold ">Legal Pages</h5>

            <a href="#" className="text-xs text-black">
              Terms & Conditions
            </a>
            <a href="#" className="text-xs text-black">
              Privacy
            </a>
            <a href="#" className="text-xs text-black">
              Cookies
            </a>
            <a href="#" className="text-xs text-black">
              Modern Slavery Statement
            </a>
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-lg">Important Links</h5>

            <a href="#" className="text-xs text-black">
              Get Help
            </a>
            <a href="#" className="text-xs text-black">
              Add  Resaurants
            </a>
            <a href="#" className="text-xs text-black">
              Sign up to Deliver
            </a>
            <a href="#" className="text-xs text-black">
              Help Center
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-blue-800 text-white mt-6 px-4 py-4 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p>
            © Order.uk 2024. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}