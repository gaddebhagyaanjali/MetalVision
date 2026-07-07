import { useState } from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import { predictMaterial } from "../api/predict";

function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handlePredict = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const result = await predictMaterial(selectedFile);

alert(
  `Material: ${result.material}\nConfidence: ${result.confidence}%`
);

    } catch (error) {
      console.error(error);
      alert("Prediction Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          {!preview ? (

            <div className="text-center">

              <FaCloudUploadAlt className="text-7xl text-orange-500 mx-auto mb-6" />

              <h2 className="text-4xl font-bold">
                Upload Material Image
              </h2>

              <p className="mt-4 text-slate-500">
                Upload Copper or Aluminum image
              </p>

              <label className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl cursor-pointer hover:bg-orange-600">

                Choose Image

                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />

              </label>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 gap-12 items-center">

              <img
                src={preview}
                className="rounded-2xl shadow-xl w-full"
              />

              <div>

                <h2 className="text-4xl font-bold">
                  Image Ready
                </h2>

                <p className="mt-4 text-green-600 font-semibold">
                  Ready for AI Detection
                </p>

                <div className="mt-10 flex gap-5">

                  <button
                    onClick={handlePredict}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl"
                  >
                    {loading ? "Detecting..." : "Detect Material"}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setPreview("");
                    }}
                    className="border border-red-500 text-red-500 px-8 py-4 rounded-xl"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Upload;