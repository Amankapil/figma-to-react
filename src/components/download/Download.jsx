import React from "react";

const Download = () => {
  return (
    <>
      <div className="bank items-center justify-center my-9  mt-9px flex">
        <div className=" max-w-screen-xl w-3/5 flex rounded-xl  shadow-inside  max-xl:flex-col  p-6">
          <div className="right p-8 justify-center items-center flex flex-col w-1/2 max-md:w-full ">
            <h1 className="font-extrabold text-in text-4xl">
              We are a high-level
              <br />
              data storage bank
            </h1>
            <p className=" m-4 text-white my-8">
              The place to store various data that you can access at any time
              through the internet and where you can carry it.
              <br />
              This very flexible storage area has a high level of security. To
              enter into your own data you must enter the password that you
              created when you registered in this Data Warehouse.
            </p>
          </div>
          <div className="w-3/6 mb-9 absolute   re pl-9 ml-60 mt-negetive max-xl:relative max-xl:w-full max-xl:m-0">
            <img className="mb-19" src="/assets/images/phone.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
