function Stats() {
  const stats = [
    {
      value: "98.7%",
      title: "Detection Accuracy",
      color: "text-orange-500",
    },
    {
      value: "5000+",
      title: "Images Processed",
      color: "text-blue-500",
    },
    {
      value: "<0.5s",
      title: "Prediction Speed",
      color: "text-green-500",
    },
    {
      value: "YOLOv8",
      title: "AI Powered",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center border border-slate-100"
            >
              <h2 className={`text-5xl font-bold ${item.color}`}>
                {item.value}
              </h2>

              <p className="mt-4 text-slate-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;