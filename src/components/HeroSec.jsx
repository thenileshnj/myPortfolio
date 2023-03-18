import React from "react";
import Avatar from "../assets/AvatarImg.svg";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";

const HeroSec = () => {
  return (
    <div className="justify-center items-center pt-12 w-full mx-auto">
      <div className="bg-white w-3/4 sm: sm:w-2/4 md:w-2/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 mx-auto py-8 rounded-xl shadow-lg">
        <div className=" flex justify-center items-center w-full mx-auto pt-4">
          <img src={Avatar} alt="Nilesh Nj" />
        </div>
        <div className="flex justify-center items-center w-full mx-auto pt-2 font-extrabold text-2xl">
          <h2>Nilesh Nj</h2>
        </div>
        <div className="flex-1 justify-center items-center w-full mx-auto pt-2 font-bold">
          <p className="text-center">Full Stack Developer && Designer </p>
          <hr class="w-64 h-1 mx-auto my-2 border-0 rounded dark:bg-green-700" />
        </div>
        <div className="flex justify-center items-center w-full mx-auto pt-2 gap-8">
          <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
            <a href="https://www.linkedin.com/in/thenileshnj/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
            <a href="https://www.instagram.com/thenileshnj/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
            <a href="https://github.com/thenileshnj" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
            <a href="https://www.facebook.com/thenileshnj" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
