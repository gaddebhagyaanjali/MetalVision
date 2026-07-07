import { useState } from "react";
import heroImage from "../assets/images/hero.png";
import PredictionHistory from "./PredictionHistory";
import { predictMaterial } from "../api/predict";
import { usePrediction } from "../context/PredictionContext";
import { generateReport } from "../utils/generateReport";
import {
  FaCheckCircle,
  FaRobot,
  FaMedal,
  FaClock,
  FaRedo,
  FaUpload,
  FaSpinner,
} from "react-icons/fa";

function AIWorkspace() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<{
    material: string;
    confidence: number;
  } | null>(null);

  const [predictionTime, setPredictionTime] = useState("");

  const { addPrediction, predictions } = usePrediction();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      alert("Please choose an image first.");
      return;
    }

    try {
      setLoading(true);

      const start = performance.now();

      const prediction = await predictMaterial(selectedFile);

      const end = performance.now();

      setPredictionTime(((end - start) / 1000).toFixed(2));

      setResult(prediction);

      addPrediction(
        prediction.material,
        prediction.confidence
      );

    } catch (error) {
      console.error(error);
      alert("Prediction Failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview("");
    setResult(null);
    setPredictionTime("");
  };

  return (
    <div className="w-full max-w-xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          AI Detection Workspace
        </h2>

        <p className="text-slate-400 mt-1">
          Upload an image and classify Copper or Aluminum using YOLOv8.
        </p>

      </div>

      {/* Preview */}

      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-56 object-cover"
        />
      ) : (
        <img
          src={heroImage}
          alt="Workspace"
          className="w-full h-56 object-cover"
        />
      )}

      <div className="p-6">

        <div className="border-2 border-dashed border-violet-500 rounded-2xl p-6 text-center">

          <h3 className="text-white text-xl font-semibold">
            Upload Material Image
          </h3>

          <p className="text-slate-400 mt-2">
            Supported formats: JPG, PNG, JPEG
          </p>

          <label className="inline-flex items-center gap-2 mt-6 bg-violet-600 hover:bg-violet-700 transition text-white px-8 py-3 rounded-xl cursor-pointer">

            <FaUpload />

            Choose Image

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

          </label>
                  </div>

        {/* Action Buttons */}

        {preview && (

          <div className="grid grid-cols-2 gap-4 mt-6">

            <button
              onClick={handlePredict}
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-3"
            >

              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  AI Analyzing...
                </>
              ) : (
                "Detect Material"
              )}

            </button>

            <button
              onClick={handleReset}
              className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-xl py-3 font-semibold transition flex items-center justify-center gap-2"
            >

              <FaRedo />

              Try Another

            </button>

          </div>

        )}

        {/* Loading */}

        {loading && (

          <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">

            <FaRobot className="text-6xl text-violet-400 mx-auto animate-pulse" />

            <h2 className="text-white text-2xl font-bold mt-5">
              AI Engine Working...
            </h2>

            <p className="text-slate-400 mt-3">
              Analyzing your uploaded material using YOLOv8.
            </p>

            <div className="flex justify-center mt-8">
              <FaSpinner className="text-5xl text-orange-400 animate-spin" />
            </div>

            <p className="text-slate-500 mt-6">
              Please wait a few seconds...
            </p>

          </div>

        )}

        {/* Result */}

        {result && (

          <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-6">

              <FaCheckCircle className="text-green-400 text-3xl" />

              <div>

                <h3 className="text-white text-2xl font-bold">
                  Detection Successful
                </h3>

                <p className="text-slate-400 text-sm">
                  AI has analyzed your uploaded image.
                </p>

              </div>

            </div>

            {/* Material */}

            <div className="flex justify-between items-center mb-5">

              <span className="text-slate-400 font-medium">
                Material
              </span>

              <span
                className={`font-bold text-xl ${
                  result.material.toLowerCase() === "copper"
                    ? "text-orange-400"
                    : "text-cyan-400"
                }`}
              >
                {result.material}
              </span>

            </div>

            {/* Confidence */}

            <div className="flex justify-between mb-3">

              <span className="text-slate-400 font-medium">
                Confidence
              </span>

              <span className="text-green-400 font-bold">
                {result.confidence.toFixed(2)}%
              </span>

            </div>

            {/* Progress Bar */}

            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden mb-6">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000"
                style={{
                  width: `${result.confidence}%`,
                }}
              />

            </div>
                        {/* Model */}

            <div className="flex justify-between items-center py-3 border-t border-slate-700">

              <div className="flex items-center gap-2">

                <FaRobot className="text-violet-400" />

                <span className="text-slate-400">
                  Model
                </span>

              </div>

              <span className="text-white">
                YOLOv8 Classification
              </span>

            </div>

            {/* Prediction Time */}

            <div className="flex justify-between items-center py-3 border-t border-slate-700">

              <div className="flex items-center gap-2">

                <FaClock className="text-yellow-400" />

                <span className="text-slate-400">
                  Prediction Time
                </span>

              </div>

              <span className="text-white">
                {predictionTime} sec
              </span>

            </div>

            {/* Status */}

            <div className="flex justify-between items-center py-3 border-t border-slate-700">

              <div className="flex items-center gap-2">

                <FaMedal className="text-green-400" />

                <span className="text-slate-400">
                  Status
                </span>

              </div>

              <span
                className={`font-semibold ${
                  result.confidence >= 90
                    ? "text-green-400"
                    : result.confidence >= 75
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {result.confidence >= 90
                  ? "High Confidence"
                  : result.confidence >= 75
                  ? "Medium Confidence"
                  : "Low Confidence"}
              </span>

            </div>

            {/* Download Report */}

            <button
              onClick={() =>
                generateReport(
                  result.material,
                  result.confidence,
                  predictionTime
                )
              }
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Download Report (PDF)
            </button>

          </div>

        )}

      </div>
            {/* Prediction History */}

      <PredictionHistory history={predictions} />

    </div>

  );
}

export default AIWorkspace;