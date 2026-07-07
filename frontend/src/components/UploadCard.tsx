import { FaCloudUploadAlt } from "react-icons/fa";

function UploadCard() {
  return (
    <div className="mt-10 max-w-md">

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <div className="flex justify-center">

          <div className="bg-violet-600 p-5 rounded-full">

            <FaCloudUploadAlt className="text-4xl text-white" />

          </div>

        </div>

        <h2 className="text-white text-2xl font-bold text-center mt-6">
          Upload Material Image
        </h2>

        <p className="text-slate-300 text-center mt-3">
          Upload a Copper or Aluminum image for AI detection.
        </p>

        <button
          className="mt-8 w-full bg-violet-600 hover:bg-violet-700 transition text-white py-4 rounded-xl font-semibold"
        >
          Choose Image
        </button>

      </div>

    </div>
  );
}

export default UploadCard;