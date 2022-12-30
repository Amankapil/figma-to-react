import React from "react";

const Testimoni = () => {
  return (
    <>
      <div className="bank items-center  max-md:w-full justify-center my-9  mt-19px  flex">
        <div className="max-md:w-full justify-center max-w-screen-xl w-3/5 flex rounded-xl flex-col shadow-inside min-h-full p-6">
          <div className="font-extrabold text-in text-2xl">
            Testimonials ( we Can add multiple slide when add an react carousel)
          </div>
          <div className="cards w-full flex">
            <div className=" right rounded-3xl shadow-car min-h-fit  m-7 p-8 justify-center items-center bg-card flex flex-col w-3/4 max-md:w-full max-sm:m-0 max-sm:mt-10"  >
              <div className="content flex m-6">
                <div className="profile max-sm:w-full ">
                  <img
                    className="justify-center  max-sm:w-full w-48 items-center"
                    src="/assets/images/logo.png"
                    alt=""
                  />
                </div>
                <div className="commentss mx-4 p12 ">
                  <h4 className=" text-in font-extrabold text-xl m-4">
                    John Fang
                  </h4>
                  <div className=" m-2 role flex items-center w-full justify-between ">
                    <div>
                      <span className="text-role">Web Designer</span>
                    </div>
                    <div>
                      <ul className="flex px-5">
                        <li className="items h-3 rounded-full bg-in mx-1 w-3"></li>
                        <li className="items h-3 rounded-full bg-in mx-1 w-3"></li>
                        <li className="items h-3 rounded-full bg-in mx-1 w-3"></li>
                        <li className="items h-3 rounded-full bg-in mx-1 w-3"></li>
                        <li className="items h-3 rounded-full bg-bgg  shadow-inside mx-1 w-3"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pera m-2">
                    <p className="text-white">
                      Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                      viverra enim erat tortor ultricies massa turpis. Arcu
                      pulvinar aenean nam laoreet nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
