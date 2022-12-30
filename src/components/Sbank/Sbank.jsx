import React from "react";

const Sbank = () => {
  return (
    <div className="bank items-center justify-center my-9  flex">
      <div className=" justify-center max-w-screen-xl w-3/5  flex rounded-xl shadow-inside p-6 max-xl:flex-col ">
        <img src="/assets/images/secure.png" alt="" />
        <div className="right p-8  max-md:w-full justify-center items-center flex flex-col w-1/2 ">
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
      </div>
    </div>
  );
};

export default Sbank;
