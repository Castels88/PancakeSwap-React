import { useEffect } from "react";
import { useState } from "react";


export function LotteryCard() {
  const [amount, setAmount] = useState('')

  function randomNum(base, x) {
    return Math.floor((Math.random() * x) + base);
    }

    useEffect(()=> {
        const lottery1 = '81';
        const lottery2 = randomNum(255, 367);
        setAmount(`$${lottery1}.${lottery2}`);
    }, [])




  return (
    <div className="card right-card">
      <div className="card-image">
        <svg
          viewBox="0 0 24 24"
          width="36px"
          color="inverseContrast"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-eaf7e66-0 jLfrED"
        >
          <path d="M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z"
          ></path>
        </svg>
      </div>
      <div className="card-first-el">
        <p>Prediction</p>
      </div>
      <div className="card-amount">
        <h2>{amount}</h2>
      </div>
      <div className="card-amount-info">
        <p>in BNB + CAKE won so far</p>
      </div>
      <div className="card-description">
        <p>Predict the price trend of BNB or CAKE to win</p>
      </div>
      <div className="card-button">
        <button>Play →</button>
      </div>
    </div>
  );
}
