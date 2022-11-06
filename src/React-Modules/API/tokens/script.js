export function getRndInteger(min, max) {
    return (Math.random() * (max - min) ) + min;
  }

export function getChartData(arr, coinData, curr, set1, set2) {
    set1([
      ['Time', `${coinData.symbol}`],
      ['04:00 PM', arr[0]],
      ["07:00 PM", arr[1]],
      ["10:00 PM", arr[2]],
      ['01:00 AM', arr[3]],
      ['04:00 AM', arr[4]],
      ['07:00 AM', arr[5]],
      ['10:00 AM', arr[6]],
      ['NOW', curr]
    ])

    var lineColor = curr >= arr[6] ? 'green' : 'red'

    set2({
      title: `${coinData.name} 24h data`,
      curveType: 'function',
      legend: {position: 'top'},
      colors: [lineColor]
    })
  }


