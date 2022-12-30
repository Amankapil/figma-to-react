import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe w-full items-center justify-center my-9  mt-9px  flex">
        <div className=" max-md:w-full  justify-between max-w-screen-xl w-3/5 max-sm:flex-col max-sm:mt-10 flex rounded-xl shadow-inside min-h-full p-6">
          <div className="head">
            <h1 className="text-in font-extrabold text-2xl">Subscribe !</h1>
            <p className="text-white">Join our newsletter to never miss any latest news.</p>
          </div>
          <div className="input max-sm:mt-10 bg-bgg rounded-full shadow-box justify-between h-full">
            <input
              type="text"
              placeholder="Enter your Email Address here"
              className="bg-bgg rounded-full"
            />
            <button className="rounded-full px-5 py-3 w-ful my-5 shadow-inside  border-in-500 text-in">
              Join Now
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Subscribe;
