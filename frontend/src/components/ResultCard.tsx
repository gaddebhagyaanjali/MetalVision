import {
  FaCheckCircle,
  FaClock,
  FaBullseye,
  FaDownload,
} from "react-icons/fa";

function ResultCard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-14">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            AI Prediction
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Detection Result
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Material classified using the MetalVision AI model.
          </p>

        </div>

        <div className="bg-slate-50 rounded-3xl shadow-xl p-10">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Side */}

            <div>

              <div className="flex items-center gap-3 mb-6">
                <FaCheckCircle className="text-green-500 text-3xl" />

                <h3 className="text-3xl font-bold">
                  Copper
                </h3>

              </div>

              <p className="text-slate-600">
                The uploaded image has been classified as
                <span className="font-semibold text-orange-500">
                  {" "}Copper
                </span>.
              </p>

            </div>

            {/* Right Side */}

            <div className="space-y-6">

              <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow">

                <div className="flex items-center gap-3">
                  <FaBullseye className="text-orange-500" />
                  <span>Confidence</span>
                </div>

                <span className="font-bold text-xl">
                  98.74%
                </span>

              </div>

              <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow">

                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-500" />
                  <span>Prediction Time</span>
                </div>

                <span className="font-bold">
                  0.28 sec
                </span>

              </div>

              <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition">

                <FaDownload />

                Download Report

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ResultCard;