import React from "react";
import web from "../assets/web.jpg";
import app from "../assets/app.jpg";
import uiux from "../assets/uiux.jpg";

const Services = () => {
  return (
    <div className="bg-purple-700 my-8 py-4">
      <div className="text-white font-extrabold text-center text-xl">
        <h1>My Services</h1>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4  m-auto items-center justify-center">
        <div className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-2/6 px-6 py-2 shadow-xl">
          <div>
            <img src={web} alt="" />
          </div>
          <div className="text-center font-bold">
            <h3>Web Development</h3>
          </div>
          <div>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-2/6 px-6 py-2 shadow-xl">
          <div>
            <img src={app} alt="" />
          </div>
          <div className="text-center font-bold">
            <h3>App Development</h3>
          </div>
          <div>
          <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-2/6 px-6 py-2 shadow-xl">
          <div>
            <img src={uiux} alt="" />
          </div>
          <div className="text-center font-bold">
            <h3> UI/UX Designing</h3>
          </div>
          <div>
          <p>I value simple content structure, clean design patterns, and thoughtful interactions. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
