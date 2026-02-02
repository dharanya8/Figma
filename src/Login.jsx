

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      if (location.state?.returnTo === "/menu") {
        navigate("/menu", { state: { resumeCheckout: "ORDER" } });
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] font-sans bg-login">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        <div className="bg-[#028643] py-2 text-center">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full my-3 backdrop-blur-sm">
              <img 
      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&h=200&auto=format&fit=crop" 
      alt="Fresh Salad Logo" 
      className="w-full h-full object-cover rounded-full"
    />
           </div>
           <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back!</h2>
           <p className="text-green-100 text-sm mt-1">Please enter your details to continue</p>
        </div>

        <div className="px-4 py-3">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="my-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#028643]/20 focus:border-[#028643] transition-all outline-none bg-gray-50/50 focus:bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="my-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#028643]/20 focus:border-[#028643] transition-all outline-none bg-gray-50/50 focus:bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#028643] hover:bg-[#027038] text-white py-3 rounded-xl font-bold text-lg transition-all transform active:scale-[0.98] shadow-lg shadow-green-900/20 my-3"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 italic">
            Use any email and password to explore the menu.
          </p>
        </div>
      </div>
    </div>
  );
}