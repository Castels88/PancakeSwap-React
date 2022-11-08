<<<<<<< HEAD
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";
import { getChartData, getRndInteger } from "./script.js";
import useSelect from "../Custom Hooks/useSelect.js";
import Select from "react-select";
const CoinChart = () => {
  //States to get apis response
  const [fetchData, setFetchData] = useState();
  //Custom hook to set and filter selected coin data
  const { coinData, setCoinData, value, setValue, changeHandler } =
    useSelect(fetchData);
=======
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Chart } from 'react-google-charts'
import { getChartData, getRndInteger } from './script.js'
const CoinChart = () => {
  //States to get apis response
  const [fetchData, setFetchData] = useState()
  const [chartData, setChartData] = useState()
  //States to store and create points and values
  const [value, setValue] = useState({})
>>>>>>> origin/TestMerge
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
<<<<<<< HEAD
        setFetchData(response.data);
        return response.data;
      })
      .then((res) => {
        let defaultChartData = res
          .filter((obj) => obj.id === "bitcoin")
          .find((el) => el);
        setCoinData(defaultChartData);
=======
        setFetchData(response.data)
        return response.data
      })
      .then((res) => {
        let defaultChartData = res
          .filter((obj) => obj.id === 'bitcoin')
          .find((el) => el)
        setChartData(defaultChartData)
>>>>>>> origin/TestMerge
        setValue({
          high: defaultChartData.high_24h,
          current: defaultChartData.current_price,
          low: defaultChartData.low_24h,
<<<<<<< HEAD
        });
      });
  }, []);
=======
        })
      })
  }, [])
>>>>>>> origin/TestMerge

  /* function changeHandler(event) {
    let currCoinData = fetchData
      .filter((obj) => obj.id === event.target.value)
<<<<<<< HEAD
      .find((el) => el);
    setCoinData(currCoinData);
=======
      .find((el) => el)
    setChartData(currCoinData)
>>>>>>> origin/TestMerge
    setValue({
      high: currCoinData.high_24h,
      current: currCoinData.current_price,
      low: currCoinData.low_24h,
<<<<<<< HEAD
    });
  } */
=======
    })
  }
>>>>>>> origin/TestMerge

  useEffect(() => {
    let points = []
    setTimeout(() => {
      for (let i = 0; i <= 9; i++) {
        let rndPoint = getRndInteger(value.low, value.high)
        points.push(rndPoint)
      }
<<<<<<< HEAD
      getChartData(points, coinData, value.current, setData, setOptions);
    }, 100);
  }, [value]);

  return (
    <div className="" style={{ height: "100%", width: "100%" }}>
      {fetchData && (
        <Select
          defaultValue={{ value: "bitcoin", label: "bitcoin" }}
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
=======
      getChartData(points, chartData, value.current, setData, setOptions)
    }, 100)
  }, [value])

  return (
    <div className="" style={{ height: '100%', width: '100%' }}>
      <select name="coins" id="coins" onChange={changeHandler}>
        {fetchData &&
          fetchData.map((coin, index) => (
            <option key={index} value={coin.id}>
              {coin.id}
            </option>
          ))}
      </select>

      {chartData && (
>>>>>>> origin/TestMerge
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
