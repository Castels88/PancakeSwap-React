import { useState } from "react";

const useSelect = (fetchData) => {
  const [coinData, setCoinData] = useState();
  const [value, setValue] = useState();

  function changeHandler(event) {
    let currCoinData = fetchData
      .filter((obj) => obj.id === event.value)
      .find((el) => el);
    setCoinData(currCoinData);
    setValue({
      high: currCoinData.high_24h,
      current: currCoinData.current_price,
      low: currCoinData.low_24h,
      image: currCoinData.image,
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


/*
 SELECT from 'react-select' tag

 <Select onChange={changeHandler} options={fetchData.map((coin) => {
        return {
          value: coin.id,
          label: coin.id
        }
      })}/>
*/
