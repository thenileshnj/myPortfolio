import React from "react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";

const FooterSec = () => {
  return (
    <>
      <footer class="relative bg-black text-white pt-8 pb-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms
              </h5>
              <div class="mt-6 lg:mb-0 mb-6">
                <button
                  class=" font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
                    <a href="https://www.linkedin.com/in/thenileshnj/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </button>
                <button
                  class=" font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
                    <a href="https://www.instagram.com/thenileshnj/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  </div>
                </button>
                <button
                  class=" font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
                    <a href="https://github.com/thenileshnj" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </button>
                <button
                  class=" font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <div className="rounded-full p-2 bg-purple-600 hover:bg-green-700 text-xl text-white">
                    <a href="https://www.facebook.com/thenileshnj" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023 </span>
                <span>Designed and Developed by </span>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blueGray-500 hover:text-blueGray-800"
                >
                   Nilesh Nj
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSec;
