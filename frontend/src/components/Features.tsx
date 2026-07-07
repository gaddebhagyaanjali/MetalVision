import { FaRobot, FaBolt, FaIndustry } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-orange-500 text-5xl" />,
      title: "AI Powered Detection",
      description:
        "Advanced YOLOv8 deep learning model accurately detects Copper and Aluminum materials with high confidence.",
    },
    {
      icon: <FaBolt className="text-blue-500 text-5xl" />,
      title: "Real-Time Processing",
      description:
        "Predicts materials in under 0.5 seconds, making it suitable for industrial automation systems.",
    },
    {
      icon: <FaIndustry className="text-green-500 text-5xl" />,
      title: "Industrial Ready",
      description:
        "Designed for smart factories, recycling plants, and automated material sorting applications.",
    },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Powerful AI Features
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            MetalVision combines Artificial Intelligence with modern web
            technologies to deliver accurate, fast and reliable material
            classification.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="mb-8">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-slate-600 mt-5 leading-8">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;