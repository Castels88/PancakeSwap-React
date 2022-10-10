import { useState, useEffect } from "react";

export function useMoon() {
  let [timer, setTimer] = useState("");
  let [moneyCount, setMoneyCount] = useState("70.478$");
  let date = "Oct 15, 2022 15:37:25";

  /* A timer that counts down to a specific date. */
  useEffect(() => {
    setInterval(() => {
      let countDownDate = new Date(date).getTime();
      const now = new Date().getTime();
      let interval = countDownDate - now;
      let days = Math.floor(interval / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((interval % (1000 * 60)) / 1000);

      setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  });

  /**
   * Every 2 seconds, set the moneyCount state to a random number between 70 and 85, with a random
   * number between 100 and 999 after the decimal point.
   * @param min - The minimum number (inclusive)
   * @param max - The maximum number you want to generate.
   * @returns a random number between 70 and 85.
   */

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /* A function that set the value of lottery every 2 seconds. */
  useEffect(() => {
    setInterval(() => {
      let random = getRandomNum(70, 85);
      let random2 = getRandomNum(100, 999);
      let lotteryChange = random + "." + random2 + "$";
      setMoneyCount(lotteryChange);
    }, 2000);
  }, []);

  return { timer, moneyCount };
}
