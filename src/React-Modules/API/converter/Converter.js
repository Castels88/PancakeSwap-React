import axios from "axios";
import { useEffect, useState } from "react";

const Converter = () => {
  const [fetchData, setFetchData] = useState();

  //API url
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  //Api call
  useEffect(() => {
    axios.get(url).then((response) => {
      setFetchData(response.data);
    });
  }, []);


  return <div>
    <select name="coins" id="coins" onChange={changeHandler}>
        {fetchData &&
          fetchData.map((coin, index) => (
            <option key={index} value={coin.id}>
              {coin.id}
            </option>
          ))}
      </select>
  </div>;
};

export default Converter;
