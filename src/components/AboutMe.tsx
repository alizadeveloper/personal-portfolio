import Image from "next/image";

function AboutMe() {
  return (
    <section
      id="about"
      className="container px-4 mx-auto my-4 md:px-[3rem] lg:px-[12rem] min-h-screen flex flex-col justify-center"
    >
      <h1
        className="my-8 text-3xl font-semibold text-center bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text transition-colors duration-300 hover:from-purple-500 hover:to-blue-500"
      >
        About Me
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        {/* Image Section */}
        <div className="flex-none mb-6 md:mb-0 md:mr-6">
          <Image
            src="/image1.jpg"
            alt="About Me"
            width={256}
            height={256}
            className="w-64 h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            priority // Improves performance by preloading the image
          />
        </div>
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-400 md:text-lg leading-relaxed">
            I am <span className="font-semibold text-purple-500">Aliza Naeem</span>, a Frontend Web Developer passionate
            about creating exceptional digital experiences. Specializing in{" "}
            <span className="font-medium text-blue-500">React</span> and{" "}
            <span className="font-medium text-blue-500">Next.js</span>, I build dynamic and responsive applications that
            prioritize user-centered design.
            <br />
            <br />
            I also focus on <span className="font-medium text-green-500">SEO best practices</span> to enhance visibility
            and ensure my projects meet both technical and user needs.
            <br />
            <br />
            When I&apos;m not coding, I enjoy exploring new technologies and engaging with the developer community.
            Let&apos;s connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
