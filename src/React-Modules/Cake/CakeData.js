import { useEffect, useState } from "react";
import { randomNum } from "../Functions/Million&Cake";
// import './../../SCSS-Modules/cakemakeworld.css'

export function CakeData() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");
  const [data6, setData6] = useState("");

  useEffect(() => {
    setData1(`${randomNum(147, 10)},${randomNum(0, 999)},${randomNum(0, 999)}`);
    setData2(`${randomNum(315, 10)},${randomNum(0, 999)},${randomNum(0, 999)}`);
    setData3(`${randomNum(750, 5)},000,000`);
    setData4(`$${randomNum(500, 20)} million`);
    setData5(`${randomNum(522, 10)}.${randomNum(0, 999)}.${randomNum(0, 999)}`);
    setData6(`13.${randomNum(0, 75)}/block`);
  }, []);

  return (
    <div className="cake-data-table">
      <div className="data data1">
        <p className="data-title">Circulating Supply</p>
        <p className="data-num">{data1}</p>
      </div>
      <div className="data data2">
        <p className="data-title">Total supply</p>
        <p className="data-num">{data2}</p>
      </div>
      <div className="data data3">
        <p className="data-title">Max Supply</p>
        <p className="data-num">{data3}</p>
      </div>
      <div className="data data4">
        <p className="data-title">Market cap</p>
        <p className="data-num">{data4}</p>
      </div>
      <div className="data data5">
        <p className="data-title">Burned to date</p>
        <p className="data-num">{data5}</p>
      </div>
      <div className="data data6">
        <p className="data-title">Current emissions</p>
        <p className="data-num">{data6}</p>
      </div>
    </div>
  );
}
