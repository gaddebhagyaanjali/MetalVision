type Prediction = {
  material: string;
  confidence: number;
  time: string;
};

interface PredictionHistoryProps {
  history: Prediction[];
}

function PredictionHistory({ history }: PredictionHistoryProps) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Predictions
      </h2>

      {history.length === 0 ? (
        <p className="text-slate-400">
          No predictions yet.
        </p>
      ) : (
        <div className="space-y-4">

          {history.map((item, index) => (

            <div
              key={index}
              className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
            >

              <div>

                <h3
                  className={`font-semibold ${
                    item.material.toLowerCase() === "copper"
                      ? "text-orange-400"
                      : "text-cyan-400"
                  }`}
                >
                  {item.material}
                </h3>

                <p className="text-slate-400 text-sm">
                  {item.time}
                </p>

              </div>

              <div className="text-green-400 font-bold">
                {item.confidence.toFixed(2)}%
              </div>

            </div>

          ))}

        </div>
      )}
    </div>
  );
}

export default PredictionHistory;