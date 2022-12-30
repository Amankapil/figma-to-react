import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Features = () => {
  return (
    <>
      <div className="max-md:w-full items-center w-full  justify-center my-9  mt-9px  flex">
        <div className="  justify-center max-w-screen-xl w-3/5 max-md:w-full
         flex rounded-xl flex-col shadow-inside min-h-full p-6">
          <div className="font-extrabold text-in text-2xl">
            Features ( we Can add multiple slide when add an react carousel )
          </div>
          <div className="cards max-md:flex-col w-full flex">
            <div className="max-md:w-full max-md:m-0   max-md:mt-10 right rounded-3xl shadow-car min-h-fit  m-7 p-8 justify-center items-center bg-card flex flex-col w-2/5 ">
              <div className="content m-6">
                <div className="profile justify-center flex items-center">
                  <img
                    className="justify-center flex w-48 items-center"
                    src="/assets/images/ClipboardText.png"
                    alt=""
                  />
                </div>
                <div className="pera m">
                  <h2 className="name text-in font-extrabold text-xl m5 py-6 mb6">
                    Search Data
                  </h2>
                  <p className="text-white">
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                    viverra enim erat tortor ultricies massa turpis. Arcu
                    pulvinar aenean nam laoreet nulla.
                  </p>

                  <button className="rounded-full px-5 py-3   w-ful my-5 shadow-car  border-in-500 text-in">
                    Learn More <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className=" max-md:w-full  max-md:m-0   max-md:mt-10 right rounded-3xl shadow-car min-h-fit  m-7 p-8 justify-center items-center bg-card flex flex-col w-2/5 ">
              <div className="content m-6">
                <div className="profile justify-center flex items-center">
                  <img
                    className="justify-center flex w-48 items-center"
                    src="/assets/images/Printer.png"
                    alt=""
                  />
                </div>
                <div className="pera m">
                  <h2 className="name text-in font-extrabold text-xl m5 py-6 mb6">
                    Search Data
                  </h2>
                  <p className="text-white">
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                    viverra enim erat tortor ultricies massa turpis. Arcu
                    pulvinar aenean nam laoreet nulla.
                  </p>

                  <button className="rounded-full px-5 py-3   w-ful my-5 shadow-car  border-in-500 text-in">
                    Learn More <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
