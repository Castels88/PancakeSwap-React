import axios from "axios";
import { useEffect, useState } from "react";

const Converter = () => {
  //states to store fetched data
  const [fetchData, setFetchData] = useState();
  //states to store user input values
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((response) => {
      setFetchData(response.data);
    });
  });
  return <div></div>;
};

export default Converter;
