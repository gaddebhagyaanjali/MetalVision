import AIWorkspace from "./AIWorkspace";
import { FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 pt-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-32 right-20 w-[450px] h-[450px] bg-violet-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-10 left-20 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <div className="inline-block px-5 py-2 rounded-full bg-violet-600/20 border border-violet-500 text-violet-300 text-sm font-semibold mb-8">
              🚀 AI Powered Material Classification
            </div>

            <h1 className="text-6xl font-extrabold leading-tight text-white">

              Detect{" "}

              <span className="text-orange-400">
                Copper
              </span>

              {" & "}

              <span className="text-cyan-400">
                Aluminum
              </span>

              <br />

              with{" "}

              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">

                High Accuracy

              </span>

            </h1>

            <p className="mt-8 text-slate-300 text-xl leading-9 max-w-xl">

              MetalVision uses Artificial Intelligence and YOLOv8 to classify
              industrial materials instantly with high precision.

            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-violet-600 hover:bg-violet-700 transition duration-300 text-white px-10 py-4 rounded-xl font-semibold shadow-lg shadow-violet-600/30">

                Get Started

              </button>

              <button className="border border-slate-600 hover:border-violet-500 hover:text-violet-300 transition duration-300 text-white px-10 py-4 rounded-xl">

                Learn More

              </button>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div className="flex gap-3 items-center">

                <FaCheckCircle className="text-green-400 text-xl" />

                <span className="text-slate-300">
                  99.5% Accuracy
                </span>

              </div>

              <div className="flex gap-3 items-center">

                <FaCheckCircle className="text-green-400 text-xl" />

                <span className="text-slate-300">
                  YOLOv8 AI
                </span>

              </div>

              <div className="flex gap-3 items-center">

                <FaCheckCircle className="text-green-400 text-xl" />

                <span className="text-slate-300">
                  Real-Time
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <AIWorkspace />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;