import appbanner from "./assets/images/appstorebanner.png";
import footerlogo from "./assets/images/footerlogo.png";

export default function Footer() {
  return (
    <footer className="px-2 py-4 mt-6">

      {/* TOP FOOTER */}
      <div className="bg-gray-200 py-8 px-4 md:px-10 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-4 max-w-sm">
            <img src={footerlogo} alt="logo" className="w-32" />

            <img src={appbanner} alt="app banner" className="w-44" />

            <p className="text-sm text-gray-700">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h3 className="font-semibold text-lg">
              Get Exclusive Deals in your Inbox
            </h3>

            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2 text-sm font-semibold hover:bg-orange-600">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-600">
              We won’t spam, read our{" "}
              <a href="#" className="underline text-black">
                email policy
              </a>
            </p>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Legal Pages</h3>

            <a href="#" className="text-sm hover:text-orange-500">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm hover:text-orange-500">
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-orange-500">
              Cookies
            </a>
            <a href="#" className="text-sm hover:text-orange-500">
              Modern Slavery Statement
            </a>
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Important Links</h3>

            <a href="#" className="text-sm ">
              About Us
            </a>
            <a href="#" className="text-sm hover:text-orange-500">
              Contact Us
            </a>
            <a href="#" className="text-sm hover:text-orange-500">
              Careers
            </a>
            <a href="#" className="text-sm hover:text-orange-500">
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