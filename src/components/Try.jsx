import React from "react";

const Try = () => {
  return (
    <>
      <div className="subscribe w-full items-center justify-center my-9  mt-9px  flex">
        <div className=" max-md:w-full  justify-between max-w-screen-xl w-3/5 flex max-sm:flex-col rounded-xl shadow-inside min-h-full p-6">
          <div className="head">
            <h1 className="text-in font-extrabold text-2xl">Try For Free !</h1>
            <p className="text-white">
              Get limited 1 week free try our features!
            </p>
          </div>
          <div className="input bg-bgg rounded-full justify-between h-full flex  max-sm:flex-col">
            <button className="rounded-full px-5 py-3 w-ful my-5 shadow-inside  border-in-500 text-in">
              Learn More
            </button>
            <button className="rounded-full text-role mx-6 px-5 py-3 w-ful my-5 shadow-inside  border-in-500 text-in">
              Request Demo
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex">
        <h1 className="text-in font-extrabold text-4xl">footer here !</h1>
      </div>
    </>
  );
};

export default Try;
