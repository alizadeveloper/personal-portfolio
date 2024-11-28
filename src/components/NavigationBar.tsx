"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MenuIcon, X } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
    setIsOpen(false);
  };

  const navLinks: NavLink[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks: SocialLink[] = [
    {
      href: "https://www.linkedin.com",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com",
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.github.com",
      icon: <FaGithub />,
      label: "Github",
    },
  ];

  const renderLinks = (): JSX.Element[] =>
    navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="font-semibold text-lg transition duration-300 ease-in-out cursor-pointer hover:text-[#A594FD] hover:underline"
        onClick={() => handleLinkClick(id)}
      >
        {label}
      </li>
    ));

  const renderSocialIcons = (): JSX.Element[] =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        className="transition hover:text-[#A594FD]"
      >
        {icon}
      </Link>
    ));

  return (
    <nav className="container z-20 flex items-center justify-between p-4 mx-auto md:pt-8 md:justify-around">
      <h1 className="z-30 text-xl font-bold transition-transform duration-300 cursor-pointer hover:text-[#A594FD] hover:-rotate-6">
        My Portfolio
      </h1>

      <div className="items-center hidden gap-4 md:flex">
        <ul className="flex space-x-4">
          {renderLinks()}
        </ul>
        <div className="flex items-center justify-center gap-4 ml-6">
          {renderSocialIcons()}
        </div>
      </div>

      <button
        className="z-30 md:hidden"
        onClick={handleMenuToggle}
      >
        {isOpen ? <X /> : <MenuIcon />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute md:hidden bg-[#0f1724] z-10 left-0 top-[58px] w-full p-4 transition-all duration-500 ease-in-out ${isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-[200%] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {renderLinks()}
        </ul>
        <div className="flex items-center justify-center gap-4 mt-6">
          {renderSocialIcons()}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
