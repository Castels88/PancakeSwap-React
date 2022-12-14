import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";
import { getChartData, getRndInteger } from "./script.js";
import useSelect from "../Custom Hooks/useSelect.js";
import Select, { components } from "react-select";

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
  const [data, setData] = useState();
  const [options, setOptions] = useState();

  //API url
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

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
          image: defaultChartData.image,
        });
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let points = [];
    setTimeout(() => {
      for (let i = 0; i <= 9; i++) {
        let rndPoint = getRndInteger(value.low, value.high);
        points.push(rndPoint);
      }
      getChartData(points, coinData, value.current, setData, setOptions);
    }, 100);
  }, [coinData, value]);

  const colorStyle = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "var(--background-swap-crypto)" : null,
        color: "var(--color-header-switch-earn-passive-income)",
      };
    },
  };

  return (
    <div className="" id="chart_div" style={{ height: "100%", width: "100%" }}>
      {fetchData && (
        <Select
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--background-swap-crypto)", //hover
              primary: "var(--color-header-switch-earn-passive-income)", //select
            },
          })}
          styles={colorStyle}
          className="hotpink"
          image={value.image}
          components={{ Control }}
          defaultValue={{
            value: "binancecoin",
            label: "binancecoin",
          }}
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
        <Chart chartType="AreaChart" data={data} options={options} />
      )}
    </div>
  );
};

export default CoinChart;
