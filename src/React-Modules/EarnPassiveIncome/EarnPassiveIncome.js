import React, { useState } from "react";
import Stoks from "../Navbar/Images/Stoks.webp";
import Pie from "../Navbar/Images/Pie.webp";
import Folder from "../Navbar/Images/Folder.webp";
import { SyrupPools } from "./SyrupPools";
import { TopFarm } from "./TopFarm";
import { useEffect } from "react";

export function EarnPassiveIncome() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setShow(!show);
    }, 4000);
  }, [show]);
  const [toogle, setToogle] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setToogle(!toogle);
    }, 4000);
  }, [toogle]);
  return (
    <div className="Earn_p_i_big_contaniner">
      <div className="Earn_p_i_top_container">
        <div className="Earn_p_i_medium_container">
          <svg
            viewBox="0 0 1660 48"
            preserveAspectRatio="none"
            color="text"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-6457768a-0 bYguAj"
          >
            <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
          </svg>
        </div>
        <div className="Earn_p_i_central_container">
          <div className="earn_p_i_img_container">
            <img className="earn_p_i_image1" src={Stoks} alt="" />
            <img className="earn_p_i_image2" src={Pie} alt="" />
            <img className="earn_p_i_image3" src={Folder} alt="" />
          </div>
          <div className="Earn_p_i_h2_container">
            <h2 className="Earn_p_i_h2">
              <span>Earn</span> passive income with crypto.
            </h2>
            <div className="Earn_p_i_text">
              PancakeSwap makes it easy to make your crypto work for you.
            </div>
            <div className="Earn_p_i_button_link">
              <button className="Earn_p_i_mainbuttons">Explore</button>
              <a className="Earn_p_i_link" href="http://">
                Learn
              </a>
            </div>
          </div>
        </div>
        {show && <TopFarm />}
        {toogle && <SyrupPools />}
      </div>
    </div>
  );
}
