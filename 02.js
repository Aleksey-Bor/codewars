function humanReadable(seconds) {
  let hours;
  let minutes;
  let remainingSeconds;

  let hoursDisplay;
  let minutesDisplay;
  let secondsDisplay;

  if (seconds <= 359999) {
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds % 3600) / 60);
    remainingSeconds = seconds % 60;
  } else return;

  if (hours < 10) {
    hoursDisplay = "0" + hours;
  } else {
    hoursDisplay = hours;
  }
  if (minutes < 10) {
    minutesDisplay = "0" + minutes;
  } else {
    minutesDisplay = minutes;
  }
  if (remainingSeconds < 10) {
    secondsDisplay = "0" + remainingSeconds;
  } else {
    secondsDisplay = remainingSeconds;
  }

  console.log(`${hours}:${minutes}:${remainingSeconds}`);
  console.log(`${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`);
  return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}

humanReadable(59);
//or


function humanReadable2(seconds) {
  if (seconds <= 359999) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let hoursDisplay = hours < 10 ? "0" + hours : hours;
    let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
    let secondsDisplay = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
  } else {
    return;
  }
}
