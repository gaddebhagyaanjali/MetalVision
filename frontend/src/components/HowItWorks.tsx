import { FaUpload, FaRobot, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload size={30} />,
      title: "Upload Image",
      description: "Upload a Copper or Aluminum image for AI analysis.",
    },
    {
      icon: <FaRobot size={30} />,
      title: "AI Processing",
      description: "YOLOv8 analyzes the material using deep learning.",
    },
    {
      icon: <FaCheckCircle size={30} />,
      title: "Get Result",
      description: "Instantly receive the predicted material and confidence score.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          How It Works
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Three simple steps to classify industrial materials using AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-violet-500 transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-600 flex items-center justify-center text-white mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;