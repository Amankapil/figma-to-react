import React from "react";

const Storage = () => {
  return (
    <>
      <div className="storage items-center justify-center my-9 flex">
        <div className="storage_width items-center justify-center max-[768px]:flex-col max-w-screen-xl flex">
          <div className="left_data w-1/2 justify-center items-center flex flex-col ">
            <h1 className="font-extrabold text-in text-6xl">
              Save your data
              <br /> storage here.
            </h1>
            <p className="w-1/2 max-md:w-full text-white my-8">
              Insignia is a data storage area that has been tested for security,
              so you can store your data here safely but not be afraid of being
              stolen by others.
            </p>
            <button className="rounded-full px-5 py-3  shadow-lg  shadow-3px -3px 8px 0px rgba(75, 93, 104, 0.1)  border-in-500 text-in">
              Learn More
            </button>
          </div>
          <div className="storage_img w-3/2 p-3">
            <img src="/assets/images/i1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Storage;
