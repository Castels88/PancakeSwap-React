import { useState } from "react";

const useSelect = (fetchData) => {
  const [coinData, setCoinData] = useState();
  const [value, setValue] = useState();

  function changeHandler(event) {
    let currCoinData = fetchData
      .filter((obj) => obj.id === event.target.value)
      .find((el) => el);
    setCoinData(currCoinData);
    setValue({
      high: currCoinData.high_24h,
      current: currCoinData.current_price,
      low: currCoinData.low_24h,
    });
  }

  return {
    coinData,
    setCoinData,
    value,
    setValue,
    changeHandler,
  };
};

export default useSelect
