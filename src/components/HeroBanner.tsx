"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function HeroBanner() {
  const [displayText, setDisplayText] = useState("Frontend Developer");

  // Toggle displayText infinitely
  useEffect(() => {
    const toggleText = () => {
      setDisplayText((prev) =>
        prev === "UI/UX Designer | Web Designer" ? " Creative Web Developer" : "UI/UX Designer | Web Designer"
      );
    };

    const interval = setInterval(toggleText, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="container grid items-center grid-cols-1 px-4 mx-auto my-4 md:my-12 md:px-[3rem] lg:px-[12rem] justify-center">
      <div className="flex flex-col items-center md:flex-row-reverse md:gap-10">
        <div className="flex-shrink-0">
          <div className="relative p-2 border-2 rounded-full border-cyan-500">
            <div className="overflow-hidden rounded-full shadow-lg">
              <Image
                src="/profile-image.jpg"
                alt="Aliza Naeem - Frontend Developer"
                width={300}
                height={300}
                className="transition-transform duration-500 rounded-full hover:scale-105 
                           w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:justify-self-start md:ml-10">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-center mt-3 bg-gradient-to-r from-white to-pink-500 text-transparent bg-clip-text">
            Hello!
          </h1>
          <h2 className="text-xl md:text-4xl text-center font-bold text-gradient">
            <span style={{ color: "#fd94c8" }}>I&apos;m Aliza Naeem</span>
          </h2>
          <h3 className="text-lg md:text-4xl text-center">
            <span style={{ color: "#00BFFF" }}>{displayText}</span>
          </h3>
          <p className="text-xs text-gray-400 md:text-lg text-center">
            Hello! I’m Aliza Naeem, a passionate Frontend Web Developer with a focus on creating responsive and user-friendly websites. My expertise lies in leveraging modern technologies like React and Next.js to build seamless web applications that not only meet user needs but also enhance their experience.
          </p>
          <a href="/" className="w-40 btn-grad mx-auto">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;