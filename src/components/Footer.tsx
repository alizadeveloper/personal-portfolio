import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // React Icons Import

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="mb-4 md:mb-0 text-center">
            <p className="text-lg font-semibold">Aliza Naeem</p>
            <p className="text-sm">Frontend Web Developer</p>
          </div> */}
        </div>

        {/* Icons Section */}
        <div className="flex justify-center gap-6 mt-6">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-300 hover:text-black transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          {/* Email Icon */}
          <a
            href="mailto:alizanaeem536@email.com"
            className="text-gray-300 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
       <p className="text-lg font-semibold">Aliza Naeem</p>
            <p className="text-sm">Frontend Web Developer</p>

          <p>&copy; 2024 Aliza Naeem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
