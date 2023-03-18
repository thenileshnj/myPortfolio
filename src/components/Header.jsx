import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-purple-600 flex py-2">
        <div className="text-white  pr-2 italic font-extrabold text-2xl "> &lt;NJ&gt;</div>
        <div className="bg-white rounded-md flex justify-center items-center w-auto pr-2 ">
          <div className="bg-green-600 p-1.5 mx-2 text-white rounded-full w-2 h-2"></div>
          <div className="font-bold">Online</div>
        </div>

        <div className="text-black bg-white py-2 px-8 rounded-full font-bold ml-auto mr-8">
          <a href="https://wa.link/57lcar" target="_blank" rel="noopener noreferrer" >Say Hii, 👋</a>
        </div>
      </div>
    </>
  );
};

export default Header;
