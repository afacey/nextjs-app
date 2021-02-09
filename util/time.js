export const getTime = ({ showSeconds = false } = {}) => {
  const date = new Date();

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourString = hour < 12 && hour > 0 ? hour : hour - 12;
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
