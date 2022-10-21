import bunny from "./img/astronaut-bunny.png";
import lottery from "./img/lottery.webp";
import lotteryMobile from "./img/lotteryMobile.webp";
import output from "./img/svgviewer-output.svg";
import perpetual from "./img/perpetual.webp";
import perpetualMobile from "./img/perpetualMobile.webp";
import { useMoon } from "./useMoon";
import { useEffect } from "react";

export function Moon() {
  const {
    timer,
    moneyCount,
    carouselOne,
    carouselTwo,
    handleCarouselOne,
    handleCarouselTwo,
    startInteractive,
  } = useMoon();

  /* A function that is called when the component is mounted, starts timer, lottery and carousel */
  // eslint-disable-next-line
  useEffect(() => startInteractive(), []);

  return (
    <div className="moon_container">
      <div className="moon_top">
        <>
          {carouselOne ? (
            <div className="moon_countdown">
              <div className="moon_countdown_left">
                <h2>
                  Win <span id="moon_lotteryChange">{moneyCount}</span> in
                  Lottery
                </h2>
                <div className="moon_counter">
                  <div className="moon_timer">
                    <p id="moon_timerCountdown">{timer}</p>
                  </div>
                </div>
                <button id="moon_mainbutton">
                  <a href="https://pancakeswap.finance/lottery">Play Now</a>
                </button>
              </div>
              <div className="moon_countdown_right">
                <div className="moon_lottery">
                  <img src={lottery} alt="" />
                  <img src={lotteryMobile} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div className="moon_countdown">
              <div className="moon_countdown_left">
                <p id="moon_perpetual">Perpetual Futures</p>
                <h2 id="moon_upto100">Up to 100x Leverage</h2>
                <button id="moon_mainbutton">
                  <a href="https://pancakeswap.finance/lottery">Trade Now</a>
                </button>
              </div>
              <div className="moon_countdown_right">
                <div className="moon_lottery2">
                  <img id="moon_sliderimg" src={perpetual} alt="" />
                  <img id="moon_sliderhide" src={perpetualMobile} alt="" />
                </div>
              </div>
            </div>
          )}
        </>

        <div className="moon_sliderbox">
          <button
            className="moon_slidertrasparente"
            onClick={handleCarouselOne}
            style={{ backgroundColor: carouselOne ? "white" : "gray" }}
          ></button>
          <button
            className="moon_slidercolorato"
            onClick={handleCarouselTwo}
            style={{ backgroundColor: carouselTwo ? "white" : "gray" }}
          ></button>
        </div>
      </div>

      {/* SVG background between sections */}
      <div className="moon_backgroundimg">
        {/* <img src={output} alt="" /> */}
        <svg
          viewBox="0 0 1660 339"
          class="sc-8a800401-0 fGhPpn slide-svg-dark"
          width="100%"
          color="text"
          xmlns="http://www.w3.org/2000/svg"
          src={output}
        >
          <path
            d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
            class=""
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_dark"
              x1="830"
              y1="83.5"
              x2="830"
              y2="338.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#08060B" stop-opacity="0.2"></stop>
              <stop
                offset="0.545554"
                stop-color="#08060B"
                stop-opacity="0.5"
              ></stop>
              <stop offset="1" stop-color="#08060B"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="moon_bottom">
        <div className="moon_bottomleft">
          <p id="moon_maintext">The moon is made of pancakes.</p>
          <p id="moon_secondarytext">
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </p>
          <div className="moon_bottoni">
            <button id="moon_mainbutton">Connect Wallet</button>
            <a href="https://pancakeswap.finance/swap">
              <button id="moon_secondarybutton">Trade Now</button>
            </a>
          </div>
        </div>

        <div className="moon_bottomright">
          <img src={bunny} alt="" />
        </div>
      </div>
    </div>
  );
}