import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className=" bg-sky-400 flex justify-between px-5 py-2">
      <h1 className="font-extrabold text-blue-950">My-Portfolio</h1>
      <nav className="hidden md:block">
        <ul className="flex gap-4 text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul
            className="flex flex-col text-white fixed top-10 left-0 bg-gray-800 w-full h-1/4"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <li className="border-b-2 w-full h-full text-center">
              <a href="/">Home</a>
            </li>
            <li className="border-b-2 w-full h-full text-center">
              <a href="#about">About</a>
            </li>
            <li className="border-b-2 w-full h-full text-center">
              <a href="#projects">Projects</a>
            </li>
            <li className="border-b-2 w-full h-full text-center">
              <a href="#resume">Resume</a>
            </li>
            <li className="border-b-2 w-full h-full text-center">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        className="block md:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <AiOutlineMenu className="w-5 text-white" />
      </button>
    </header>
  );
};

export default Header;
