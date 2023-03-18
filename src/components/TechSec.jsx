import React from "react";
import { FaReact, FaFigma } from "react-icons/fa";
import { IoLogoNodejs, IoLogoPython, } from "react-icons/io";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { BsGit, BsWordpress } from "react-icons/bs";
import { FcLinux } from "react-icons/fc";
import hero from "../assets/hero.svg";


const TechSec = () => {
  return (
    <div>
      <div className="text-center font-extrabold py-4">
        <h2>Tech I Use 👨‍💻</h2>
      </div>
      <div className="flex flex-wrap gap-4 m-auto justify-center items-center pt-2 w-4/5 ">
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <IoLogoNodejs />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <FaReact />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <SiFirebase />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <IoLogoPython />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <SiTailwindcss />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <BsWordpress />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <BsGit />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <FcLinux />
          </div>
        </div>
        <div className="flex bg-white m-auto w-20 h-20 text-center justify-center text-3xl shadow-xl rounded-xl">
          <div className="flex justify-center items-center font-extrabold">
            <FaFigma />
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto items-center mt-8 mb-0 pb-0">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default TechSec;
