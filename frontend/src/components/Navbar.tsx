import { FaMicrochip } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="bg-violet-600 p-3 rounded-xl">

            <FaMicrochip className="text-white text-xl" />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              MetalVision
            </h1>

            <p className="text-xs text-slate-400">
              AI Material Detection
            </p>

          </div>

        </div>

        {/* Menu */}

        <ul className="hidden md:flex gap-10 text-slate-300 font-medium">

          <li className="hover:text-violet-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-violet-400 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-violet-400 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-violet-400 cursor-pointer transition">
            Contact
          </li>

        </ul>

        {/* Button */}

        <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition font-semibold shadow-lg shadow-violet-700/30">

          Try AI

        </button>

      </div>

    </nav>
  );
}

export default Navbar;