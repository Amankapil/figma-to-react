import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Navbar = () => {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <>
      <div className="nav flex justify-between py-8 mx-9 px-8">
        <div className="img flex items-center">
          <img src="/assets/images/logo.png" alt="" className="log" />
          <div className="span">
            <span className="text-in font-extrabold mx-5 text-xl">Insignia</span>
          </div>
        </div>

        {width <= 1080 ? (
          <ArrowForwardIcon />
        ) : (
          <div className="items">
            <ul className="flex text-lg flex-row items-center">
              <li className="mx-4 p-4 text-in">About</li>
              <li className="mx-4 p-4">help</li>
              <li className="mx-4 p-4">Features</li>
              <li className="p-4">Signup</li>
              <li className="p-4"></li>

              <button className="rounded-full px-5 py-3  shadow-lg w-full shadow-3px -3px 8px 0px rgba(75, 93, 104, 0.1)  border-in-500 text-in">
                Request Demo <ArrowForwardIcon />
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
