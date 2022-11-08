import { useState } from "react";

export function useMoon() {
  let [timer, setTimer] = useState(""); // A state for the timer
  let [moneyCount, setMoneyCount] = useState("70.478$"); // A state for the $money counter
  let [carouselOne, setCarouselOne] = useState(true); // a state for container 1
  let [carouselTwo, setCarouselTwo] = useState(false); // a state for container 2

  function startInteractive() {
    // A timer that counts down to a specific date.
    const timer = setInterval(() => {
      let date = "Nov 12, 2022 15:37:25";
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

    // A function that set the value of lottery every 2 seconds.
    const lottery = setInterval(() => {
      let random = getRandomNum(70, 85);
      let random2 = getRandomNum(100, 999);
      let lotteryChange = random + "." + random2 + "$";
      setMoneyCount(lotteryChange);
    }, 1000);

    // A timer that switch between two container
    const switchContainer = setInterval(() => {
      setCarouselOne((prev) => !prev);
      setCarouselTwo((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(lottery);
      clearInterval(switchContainer);
    };
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // handlers for the onClick - switch between containers
  function handleCarouselOne() {
    setCarouselOne(true);
    setCarouselTwo(false);
  }
  function handleCarouselTwo() {
    setCarouselTwo(true);
    setCarouselOne(false);
  }

  return {
    timer,
    moneyCount,
    carouselOne,
    carouselTwo,
    handleCarouselOne,
    handleCarouselTwo,
    startInteractive,
  };
}
