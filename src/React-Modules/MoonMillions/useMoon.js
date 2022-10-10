import { useState, useEffect, useCallback } from "react";

export function useMoon() {
  let [timer, setTimer] = useState(""); // A state for the timer
  let [moneyCount, setMoneyCount] = useState("70.478$"); // A state for the $money counter
  let [carouselSwitch, setCarouselSwitch] = useState(false);
  let [carouselOne, setCarouselOne] = useState(true);
  let [carouselTwo, setCarouselTwo] = useState(false);

  /* A timer that counts down to a specific date. */
  let date = "Oct 15, 2022 15:37:25";
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

  function handleCarouselOne() {
    setCarouselOne(true);
    setCarouselTwo(false);
    console.log(carouselOne, carouselTwo);
    // console.log(`Carosello 1: ${carouselOne}, Carosello 2: ${carouselTwo}`);
  }

  function handleCarouselTwo() {
    setCarouselTwo(true);
    setCarouselOne(false);
    console.log(carouselTwo, carouselOne);
  }

  // useEffect(() => {
  //   setCarouselOne;
  // }, []);

  return {
    timer,
    moneyCount,
    carouselOne,
    carouselTwo,
    handleCarouselOne,
    handleCarouselTwo,
  };
}
