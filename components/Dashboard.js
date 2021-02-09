import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [time, setTime] = useState("");
  const [showSeconds, setShowSeconds] = useState(true);
  const [greeting, setGreeting] = useState("");

  const updateTime = () => {
    const { displayString, hour } = getTime();
    updatePageContent();
    setTime(displayString);
  };

  const getTime = () => {
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourString = hour % 12 ? hour - 12 : 12;
    const minuteString = minutes > 9 ? minutes : "0" + minutes;
    const secondsString = seconds > 9 ? seconds : "0" + seconds;

    const displayString = `${hourString}:${minuteString}${
      showSeconds ? ":" + secondsString : ""
    } ${hour < 12 ? "AM" : "PM"}`;

    return {
      hour,
      minutes,
      seconds,
      displayString,
    };
  };

  const updatePageContent = () => {
    const { hour } = getTime();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };

  const timerId = setInterval(updateTime, 1000);

  return (
    <div className={styles.dashboard}>
      <time className={styles.time}>{time}</time>
      <h1 className={styles.greeting}>{greeting}</h1>
    </div>
  );
}
