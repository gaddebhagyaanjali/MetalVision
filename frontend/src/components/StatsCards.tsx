import {
  FaChartLine,
  FaCube,
  FaDatabase,
} from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";
import { usePrediction } from "../context/PredictionContext";

function StatsCards() {
  const { predictions } = usePrediction();
  console.log("Predictions:", predictions);
console.log("========== STATS ==========");
console.log(predictions);

predictions.forEach((item) => {
  console.log("Material:", item.material);
  console.log("Confidence:", item.confidence);
});
predictions.forEach((item) => {
  console.log(item.material);
});
  const totalPredictions = predictions.length;

  const copperCount = predictions.filter(
    (item) => item.material.toLowerCase() === "copper"
  ).length;

  const aluminumCount = predictions.filter(
    (item) => item.material.toLowerCase() === "aluminum"
  ).length;

  const averageAccuracy =
    totalPredictions === 0
      ? 0
      : predictions.reduce(
          (sum, item) => sum + item.confidence,
          0
        ) / totalPredictions;

  const stats = [
    {
      title: "Total Predictions",
      value: totalPredictions.toString(),
      icon: <FaDatabase size={30} />,
      color: "from-violet-600 to-indigo-600",
    },
    {
      title: "Copper Detected",
      value: copperCount.toString(),
      icon: <GiMetalBar size={30} />,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Aluminum Detected",
      value: aluminumCount.toString(),
      icon: <FaCube size={30} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Average Accuracy",
      value: `${averageAccuracy.toFixed(2)}%`,
      icon: <FaChartLine size={30} />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            AI Detection Statistics
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Real-time analytics powered by our YOLOv8 AI model.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 transition-all duration-300 hover:border-violet-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-600/20"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color}
                flex items-center justify-center text-white mb-6`}
              >
                {item.icon}
              </div>

              <h3 className="text-slate-400 text-lg">
                {item.title}
              </h3>

              <p className="text-4xl font-bold text-white mt-3">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsCards;