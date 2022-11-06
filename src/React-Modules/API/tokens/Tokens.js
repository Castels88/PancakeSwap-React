import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";
import { getChartData, getRndInteger } from "./script.js";
const Tokens = () => {
  //States to get apis response
  const [fetchData, setFetchData] = useState();
  const [chartData, setChartData] = useState();
  //States to store and create points and values
  const [value, setValue] = useState({});
  //States for chart options
  const [data, setData] = useState();
  const [options, setOptions] = useState();

  //API url
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  //Api call
  useEffect(() => {
    axios.get(url).then((response) => {
      setFetchData(response.data);
      return response.data
    }).then((res) => {
      let defaultChartData = res.filter((obj) => obj.id === 'bitcoin')
      .find((el) => el);
      setChartData(defaultChartData)
      setValue({
        high: defaultChartData.high_24h,
        current: defaultChartData.current_price,
        low: defaultChartData.low_24h,
      });
    });
  }, []);

  function changeHandler(event) {
    let currCoinData = fetchData
      .filter((obj) => obj.id === event.target.value)
      .find((el) => el);
    setChartData(currCoinData);
    setValue({
      high: currCoinData.high_24h,
      current: currCoinData.current_price,
      low: currCoinData.low_24h,
    });
  }

  useEffect(() => {
    let points = [];
    setTimeout(() => {
      for (let i = 0; i <= 9; i++) {
        let rndPoint = getRndInteger(value.low, value.high);
        points.push(rndPoint);
      }
      getChartData(points, chartData, value.current, setData, setOptions);
    }, 100);
  }, [value]);

  return (
    <div className="">
        <select name="coins" id="coins" onChange={changeHandler}>
          {fetchData &&
            fetchData.map((coin, index) => (
              <option key={index} value={coin.id}>
                {coin.id}
              </option>
            ))}
        </select>
        {chartData && (
          <Chart
            chartType="AreaChart"
            width="80%"
            height="400px"
            data={data}
            options={options}
          />
        )}
    </div>
  );
};

export default Tokens;
