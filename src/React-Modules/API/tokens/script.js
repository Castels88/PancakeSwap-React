import "../../../SCSS-Modules/Dark Mode/darkmode.css";

export function getRndInteger(min, max) {
  return Math.random() * (max - min) + min;
}

export let roundOff = (num, places) => {
  const x = Math.pow(10, places);
  return Math.round(num * x) / x;
};

export function getChartData(arr, coinData, curr, set1, set2) {
  set1([
    ["Time", `${coinData.symbol}`],
    [`20:00`, arr[0]],
    [`23:00`, arr[1]],
    [`02:00`, arr[2]],
    [`05:00`, arr[3]],
    [`08:00`, arr[4]],
    [`11:00`, arr[5]],
    [`14:00`, arr[6]],
    ["NOW", curr],
  ]);

  var lineColor = curr >= arr[6] ? "green" : "red";

  set2({
    legend: { position: "top", textStyle: { color: "#808080" } },
    colors: [lineColor],
    areaOpacity: "0.2",
    height: 400,
    backgroundColor: "transparent",
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#808080" },
    },
    hAxis: {
      textStyle: { color: "#808080" },
    },
    title: `${coinData.name} 24h data`,
    titleTextStyle: { color: "#808080" },
  });
}
