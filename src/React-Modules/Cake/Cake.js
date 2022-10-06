import { CakeData } from './CakeData';
import './../../SCSS-Modules/cakemakeworld.css'

const bottomRightImg = require('./images/bottom-right.webp');
const coinCakeImg = require('./images/pancake-coin.webp');
const topLeftImg = require("./images/top-left.webp");
const topRightImg = require("./images/top-right.webp");

export function Cake(){
    return <div className="cake-container">
        <div className="cake-content">
            <div className="cake-image">
                <picture>
                    <img className="bottom-right-cake" src={bottomRightImg} alt="coin"/>
                    <img className="coin-cake" src={coinCakeImg} alt="coin"/>
                    <img className="top-left-cake" src={topLeftImg} alt="coin"/>
                    <img className="top-right-cake" src={topRightImg} alt="coin"/>
                </picture>
            </div>
        <div className="cake-title">
            <h2><span className="purple-cake">CAKE</span> makes our world<br/>go round.</h2>
        </div>
        <div className="cake-description">
            <p>CAKE token is at the heart of the PancakeSwap ecosystem.<br/>Buy it, win it, farm it, spend it, stake
                it... heck, you can even<br/>vote with it!</p>
        </div>
        <div className="cake-buttons">
            <button>Buy CAKE</button>
            <a href="">Learn</a>
        </div>
            <CakeData/>
        </div>
    </div>
}
