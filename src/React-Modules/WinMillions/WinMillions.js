// import "../../style.css";
import { LotteryCard } from "./LotteryCard";
import { PredictionCard } from "./PredictionCard";

export function WinMillions({ props }) {
  return (
    <div className={`winMillion-container`}>
      <div className="winMillion-content">
        <h2 className="main-title">
          <span className="purple-win">Win</span> millions in prizes
        </h2>

        <div className="par-container">
          <p>Provably fair, on-chain games.</p>
          <p>Win big with PancakeSwap.</p>
        </div>

        <div className="card-container">
          <PredictionCard />
          <LotteryCard />
        </div>
      </div>
    </div>
  );
}
