import axios from "axios";
import { useEffect, useState } from "react";
import Select, {
    components,
    ControlProps,
    Props,
    StylesConfig,
  } from 'react-select';
import useSelect from "../Custom Hooks/useSelect";
import { getExchangeRate, roundOff } from "../tokens/script";

const Converter = () => {
  //states to store fetched data
  const [fetchData, setFetchData] = useState();
  //hooks to store user selected coin values
  const {
    coinData: firstCoinData,
    setCoinData: setFirstCoinData,
    value: firstValue,
    setValue: setFirstValue,
    changeHandler: changeFirstHandler,
  } = useSelect(fetchData);
  const {
    coinData: secondCoinData,
    setCoinData: setSecondCoinData,
    value: secondValue,
    setValue: setSecondValue,
    changeHandler: changeSecondHandler,
  } = useSelect(fetchData);

  //states to store exchange and input values
  const [exchangeRate, setExchangeRate] = useState();
  const [firstInput, setFirstInput] = useState("0.00");
  const [secondInput, setSecondInput] = useState("0.00");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFetchData(response.data);
        return response.data;
      })
      .then((res) => {
        let first = res.filter((obj) => obj.id === "binancecoin").find((el) => el);
        setFirstCoinData(first);
        setFirstValue({
          high: first.high_24h,
          current: first.current_price,
          low: first.low_24h,
        });
        return res;
      })
      .then((res) => {
        let second = res
          .filter((obj) => obj.id === "pancakeswap-token")
          .find((el) => el);
        setSecondCoinData(second);
        setSecondValue({
          high: second.high_24h,
          current: second.current_price,
          low: second.low_24h,
        });
      });
  }, []);

  function firstInputHandler(event) {
    let input = event.target.value;
    setFirstInput(input);
    let res = input * (firstValue.current / secondValue.current)
    setSecondInput(roundOff(res, 2));
  }

  function secondInputHandler(event) {
    let input = event.target.value;
    setSecondInput(input);
    let res = input * (secondValue.current / firstValue.current);
    setFirstValue(roundOff(res, 2));
  }

  return (
    <div>
      {fetchData && (
        <Select
          defaultValue={{ value: "binancecoin", label: "binancecoin" }}
          onChange={changeFirstHandler}
          options={fetchData.map((coin) => {
            return {
              value: coin.id,
              label: coin.id,
            };
          })}
        />
      )}
      <input
        type="text"
        onChange={firstInputHandler}
        value={firstInput}
        placeholder="0.00"
      />

      {fetchData && (
        <Select
          defaultValue={{
            value: "pancakeswap-token",
            label: "pancakeswap-token",
          }}
          onChange={changeSecondHandler}
          options={fetchData.map((coin) => {
            return {
              value: coin.id,
              label: coin.id,
            };
          })}
        />
      )}
      <input
        type="text"
        onChange={secondInputHandler}
        value={secondInput}
        placeholder="0.00"
      />
    </div>
  );
};

export default Converter;
