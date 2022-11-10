import axios from "axios";
import { useEffect, useState } from "react";
import Select, { components } from "react-select";
import useSelect from "../Custom Hooks/useSelect";
import { roundOff } from "../tokens/script";
import "./Converter.css";

const Control = ({ children, ...props }) => {
  const { image } = props.selectProps;

  return (
    <components.Control {...props}>
      <img className="selected-image" src={image} alt={image} />
      {children}
    </components.Control>
  );
};

const Converter = () => {
  //states to store fetched data
  const [fetchData, setFetchData] = useState();
  //hooks to store user selected coin values
  const {
    setCoinData: setFirstCoinData,
    value: firstValue,
    setValue: setFirstValue,
    changeHandler: changeFirstHandler,
  } = useSelect(fetchData);
  const {
    setCoinData: setSecondCoinData,
    value: secondValue,
    setValue: setSecondValue,
    changeHandler: changeSecondHandler,
  } = useSelect(fetchData);

  //states to store exchange and input values
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
        let first = res
          .filter((obj) => obj.id === "binancecoin")
          .find((el) => el);
        setFirstCoinData(first);
        setFirstValue({
          high: first.high_24h,
          current: first.current_price,
          low: first.low_24h,
          image: first.image,
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
          image: second.image,
        });
      });
    // eslint-disable-next-line
  }, []);

  function firstInputHandler(event) {
    let input = event.target.value;
    setFirstInput(input);
    let res = input * (firstValue.current / secondValue.current);
    setSecondInput(roundOff(res, 2));
  }

  function secondInputHandler(event) {
    let input = event.target.value;
    setSecondInput(input);
    let res = input * (secondValue.current / firstValue.current);
    setFirstValue(roundOff(res, 2));
  }

  return (
    <>
      {fetchData && (
        <div className="swap_BNB_container">
          <Select
            className="swap_SVG_container"
            image={firstValue.image}
            components={{ Control }}
            defaultValue={{ value: "binancecoin", label: "binancecoin" }}
            onChange={changeFirstHandler}
            options={fetchData.map((coin) => {
              return {
                value: coin.id,
                label: coin.id,
              };
            })}
          />
        </div>
      )}
      <div className="swap_input_container">
        <input
          className="swap_input"
          type="text"
          onChange={firstInputHandler}
          value={firstInput}
          placeholder="0.00"
        />
      </div>
      <div className="swap_freccia_container">
        <button className="swap_freccia_button">
          <svg
            className="swap_SVG_freccia"
            viewBox="0 0 24 24"
            color="primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
          </svg>
        </button>
      </div>

      {fetchData && (
        <div className="swap_BNB_container">
          <Select
            className="swap_SVG_container"
            image={secondValue.image}
            components={{ Control }}
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
        </div>
      )}
      <div className="swap_input_container">
        <input
          className="swap_input"
          type="text"
          onChange={secondInputHandler}
          value={secondInput}
          placeholder="0.00"
        />
      </div>
    </>
  );
};

export default Converter;
