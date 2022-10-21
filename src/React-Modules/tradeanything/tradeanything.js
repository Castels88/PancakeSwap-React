import React from 'react';
import tdimage1 from "./images/BNB.png";
import tdimage2 from "./images/BTC.png";
import tdimage3 from "./images/CAKE.png";


function Tradeanything() {
    return (
        <>
            <div className="TA-box">
                <svg viewBox="0 0 1660 48" preserveAspectRatio="none" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="TA-border1"><path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path></svg>
                <div className="TA-container">
                    <div className="TA-container-main">
                        <h2 className="TA-container-main-header">Trade <span className="TA-container-main-header-span">anything. No registration, no hassle.</span></h2>
                        <p className="TA-container-main-paragraph">Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>
                        <button className="TA-container-main-tradenow">Trade Now</button>
                        <a className="TA-container-main-learn" href="/">Learn</a>
                    </div>
                    <div className="TA-container-secondary">
                        <img className="TA-container-secondary-BNB" src={tdimage1} alt="" />
                        <img className="TA-container-secondary-BTC" src={tdimage2} alt="" />
                        <img className="TA-container-secondary-CAKE" src={tdimage3} alt="" />
                    </div>
                    <div className="TA-container-mainmobile">
                        <h2 className="TA-container-mainmobile-header">Trade <span className="TA-container-main-header-span">anything. No registration, no hassle.</span></h2>
                        <p className="TA-container-mainmobile-paragraph">Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>
                        <button className="TA-container-mainmobile-tradenow">Trade Now</button>
                        <a className="TA-container-mainmobile-learn" href="/">Learn</a>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 1660 48" preserveAspectRatio="none" color="text" width="100%" xmlns="http://www.w3.org/2000/svg" className="TA-border2"><path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path></svg>
        </>
  );
}

export default Tradeanything;