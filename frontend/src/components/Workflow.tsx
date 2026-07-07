import {
  FaUpload,
  FaBrain,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

function Workflow() {
  const steps = [
    {
      icon: <FaUpload className="text-5xl text-orange-500" />,
      title: "Upload Image",
      description: "Upload a Copper or Aluminum image for analysis.",
    },
    {
      icon: <FaBrain className="text-5xl text-purple-500" />,
      title: "YOLOv8 AI Model",
      description: "Our AI model extracts important features.",
    },
    {
      icon: <FaSearch className="text-5xl text-blue-500" />,
      title: "Image Analysis",
      description: "The system analyzes texture and material patterns.",
    },
    {
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Prediction",
      description: "Displays Copper or Aluminum with confidence score.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Workflow
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            How MetalVision Works
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            A simple AI pipeline that classifies Copper and Aluminum quickly
            and accurately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;