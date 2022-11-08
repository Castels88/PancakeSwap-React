import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";
import { getChartData, getRndInteger } from "./script.js";
import useSelect from "../Custom Hooks/useSelect.js";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";

const Control = ({ children, ...props }) => {
  const { image } = props.selectProps;

  return (
    <components.Control {...props}>
      <img className="selected-image" src={image} alt={image} />
      {children}
    </components.Control>
  );
};

const CoinChart = () => {
  //States to get apis response
  const [fetchData, setFetchData] = useState();
  //Custom hook to set and filter selected coin data
  const { coinData, setCoinData, value, setValue, changeHandler } =
    useSelect(fetchData);
  //States for chart options
  const [data, setData] = useState()
  const [options, setOptions] = useState()

  //API url
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  //Api call
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFetchData(response.data);
        return response.data;
      })
      .then((res) => {
        let defaultChartData = res
          .filter((obj) => obj.id === "binancecoin")
          .find((el) => el);
        setCoinData(defaultChartData);
        setValue({
          high: defaultChartData.high_24h,
          current: defaultChartData.current_price,
          low: defaultChartData.low_24h,
          image: defaultChartData.image
        });
      });
  }, []);

  /* function changeHandler(event) {
    let currCoinData = fetchData
      .filter((obj) => obj.id === event.target.value)
      .find((el) => el);
    setCoinData(currCoinData);
    setValue({
      high: currCoinData.high_24h,
      current: currCoinData.current_price,
      low: currCoinData.low_24h,
    });
  } */

  useEffect(() => {
    let points = []
    setTimeout(() => {
      for (let i = 0; i <= 9; i++) {
        let rndPoint = getRndInteger(value.low, value.high)
        points.push(rndPoint)
      }
      getChartData(points, coinData, value.current, setData, setOptions);
    }, 100);
  }, [value]);

  return (
    <div className="" style={{ height: "100%", width: "100%" }}>
      {fetchData && (
        <Select
          image={value.image}
          components={{ Control }}
          defaultValue={{ value: "binancecoin", label: "binancecoin" }}
          onChange={changeHandler}
          options={fetchData.map((coin) => {
            return {
              value: coin.id,
              label: coin.id,
            };
          })}
        />
      )}
      {coinData && (
        <Chart
          chartType="AreaChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      )}
    </div>
  )
}

export default CoinChart
