import React, { useEffect, useState } from "react";
import { getTime } from "../util/time";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [greeting, setGreeting] = useState({ message: "", timeOfDay: "" });
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    return setTimeout(() => setTime(getTime()), 1000);
  }, [time.seconds]);

  useEffect(() => {
    updateGreeting();
  }, [time.hour]);

  const updateGreeting = React.useCallback(() => {
    const { hour } = time;

    const greeting = {};
    if (hour < 11) {
      greeting.message = "Good Morning";
      greeting.timeOfDay = "morning";
    } else if (hour < 18) {
      greeting.message = "Good Afternoon";
      greeting.timeOfDay = "afternoon";
    } else {
      greeting.message = "Good Evening";
      greeting.timeOfDay = "evening";
    }

    setGreeting(greeting);
  }, [time.hour]);

  return (
    <div className={`${styles.dashboard} ${styles[greeting.timeOfDay]}`}>
      <time className={styles.time} suppressHydrationWarning>
        {time.displayString}
      </time>
      <h1 className={styles.greeting}>{greeting.message}</h1>
    </div>
  );
}
