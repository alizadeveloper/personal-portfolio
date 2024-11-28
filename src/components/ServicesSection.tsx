import { FaLaptopCode, FaBullhorn, FaSearch, FaPalette } from "react-icons/fa"; // Icons import kiye

function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      icon: <FaLaptopCode className="text-4xl text-white mb-4" />, // Icon Web Development ke liye
      bgColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
    },
    {
      title: "Digital Marketing",
      description: "Promoting your brand and products online.",
      icon: <FaBullhorn className="text-4xl text-white mb-4" />, // Icon Digital Marketing ke liye
      bgColor: "linear-gradient(to right, #00C6FF, #0072FF)",
    },
    {
      title: "SEO",
      description: "Optimizing your website for search engines to increase visibility.",
      icon: <FaSearch className="text-4xl text-white mb-4" />, // Icon SEO ke liye
      bgColor: "linear-gradient(to right, #FFB88C, #D73D40)",
    },
    {
      title: "Web Design",
      description: "Creating visually appealing and functional web designs.",
      icon: <FaPalette className="text-4xl text-white mb-4" />, // Icon Web Design ke liye
      bgColor: "linear-gradient(to right, #84E1E0, #0072FF)",
    },
  ];

  return (
    <section
      id="services"
      className="container px-4 mx-auto my-8 md:my-16 md:px-[3rem] lg:px-[12rem] min-h-screen flex flex-col justify-center"
    >
      <h1
className="my-10 text-3xl font-semibold text-center md:my-20 text-white transition duration-300 hover:text-[#FF5F6D]"

        // className="my-10 text-3xl font-semibold text-center md:my-20 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text transition-colors duration-300 hover:from-pink-600 hover:to-purple-400"
      >
        My Services
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center"
            style={{ background: service.bgColor }}
          >
            {service.icon} {/* Icon har card ke upar dikh raha hai */}
            <h2 className="text-xl font-bold mb-2 text-white">{service.title}</h2>
            <p className="text-white leading-relaxed text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
