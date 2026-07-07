import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-3xl font-bold text-white">
          MetalVision
        </h2>

        <p className="text-slate-400 mt-3">
          AI Material Detection using YOLOv8
        </p>

        <div className="flex justify-center gap-8 mt-8">

          <a
            href="https://github.com/gaddebhagyaanjali2005-blip"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/gaddebhagyaanjali"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="text-slate-300 hover:text-red-400 transition"
          >
            <FaEnvelope size={28} />
          </a>

        </div>

        <p className="text-slate-500 mt-8">
          © 2026 Gadde Bhagya Anjali | VVIT Guntur
        </p>

      </div>
    </footer>
  );
}

export default Footer;