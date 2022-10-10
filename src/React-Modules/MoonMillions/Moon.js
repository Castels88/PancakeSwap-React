import bunny from "./img/bunny.webp";
import lottery from "./img/lottery.webp";
import lotteryMobile from "./img/lotteryMobile.webp";
import output from "./img/svgviewer-output.svg";
import { useMoon } from "./useMoon";

export function Moon() {
  const { timer, moneyCount } = useMoon();

  return (
    <div className="moon_container">
      <div className="moon_top">
        <div className="moon_countdown">
          <div className="moon_countdown_left">
            <h2>
              Win <span id="moon_lotteryChange">{moneyCount}</span> in Lottery
            </h2>
            <div className="moon_counter">
              <div className="moon_timer">
                <p id="moon_timerCountdown">{timer}</p>
              </div>
            </div>
            <a href="https://pancakeswap.finance/lottery">
              <button id="moon_mainbutton">Play Now</button>
            </a>
          </div>
          <div className="moon_countdown_right">
            <div className="moon_lottery">
              <img src={lottery} alt="" />
              <img src={lotteryMobile} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="moon_sliderbox">
          <div className="moon_slidertrasparente"></div>
          <div className="moon_slidercolorato"></div>
        </div> */}

        <div className="moon_backgroundimg">
          <img src={output} alt="" />
        </div>
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

/*
        <div className="moon_countdown">
            <p id="moon_perpetual">Perpetual Futures</p>
            <h2 id="moon_upto100">Up to 100x Leverage</h2>
            <a href="https://pancakeswap.finance/lottery"><button id="moon_mainbutton">Trade Now</button></a>
            <div className="moon_lottery2">
                <img id ='moon_sliderimg' src="assets/img/perpetual.webp" alt=""/>
                <img id="moon_sliderhide" src="assets/img/perpetualMobile.webp" alt=""/>
            </div>
        </div> 
 */
