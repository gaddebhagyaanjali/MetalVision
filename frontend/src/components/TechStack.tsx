import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiOpencv,
  SiAxios,
} from "react-icons/si";

function TechStack() {
  const technologies = [
    {
      name: "React",
      icon: <FaReact size={45} className="text-cyan-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={45} className="text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={45} className="text-cyan-300" />,
    },
    {
      name: "Python",
      icon: <FaPython size={45} className="text-yellow-400" />,
    },
    {
      name: "Flask",
      icon: <SiFlask size={45} className="text-white" />,
    },
    {
      name: "OpenCV",
      icon: <SiOpencv size={45} className="text-green-400" />,
    },
    {
      name: "Axios",
      icon: <SiAxios size={45} className="text-violet-400" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={45} className="text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={45} className="text-blue-400" />,
    },
  ];

  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Technology Stack
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Modern technologies powering MetalVision.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {technologies.map((tech, index) => (

            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col items-center hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
            >

              {tech.icon}

              <h3 className="text-white mt-5 font-semibold">
                {tech.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack;