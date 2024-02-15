// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  let output = "";

  let y = 0;
  let d = 0;
  let h = 0;
  let m = 0;
  let s = 0;

  const yearSingular = "year";
  const yearsPlural = "years";
  const daySingular = "day";
  const daysPlural = "days";
  const hourSingular = "hour";
  const hoursPlural = "hours";
  const minuteSingular = "minute";
  const minutesPlural = "minutes";
  const secondSingular = "second";
  const secondsPlural = "seconds";

  const secInYear = 31536000;
  const secInDay = 86400;
  const secInHour = 3600;
  const secInMinute = 60;

  let arrUnitsOfTime = [];
  function createBindSeparator(unitОfTime) {
    if (unitОfTime === arrUnitsOfTime[0]) {
      return "";
    }
    if (
      arrUnitsOfTime.length > 1 &&
      unitОfTime !== arrUnitsOfTime[arrUnitsOfTime.length - 1]
    ) {
      return ", ";
    }
    if (
      arrUnitsOfTime.length > 1 &&
      unitОfTime === arrUnitsOfTime[arrUnitsOfTime.length - 1]
    ) {
      return " and ";
    }

    console.log(arrUnitsOfTime);
    return bindSeparator;
  }

  if (seconds > 0) {
    y = Math.floor(seconds / secInYear);
    if (y > 0) {
      arrUnitsOfTime.push("y");
    }
    d = Math.floor((seconds % secInYear) / secInDay);
    if (d > 0) {
      arrUnitsOfTime.push("d");
    }
    h = Math.floor((seconds % secInDay) / secInHour);
    if (h > 0) {
      arrUnitsOfTime.push("h");
    }
    m = Math.floor((seconds % secInHour) / secInMinute);
    if (m > 0) {
      arrUnitsOfTime.push("m");
    }
    s = Math.floor(seconds % secInMinute);
    if (s > 0) {
      arrUnitsOfTime.push("s");
    }

    if (y > 0) {
      output = `${y} ${y > 1 ? yearsPlural : yearSingular}`;
    }

    if (d > 0) {
      output =
        output +
        `${createBindSeparator("d")}` +
        `${d} ${d > 1 ? daysPlural : daySingular}`;
    } else {
      output = output + "";
    }

    if (h > 0) {
      output =
        output +
        `${createBindSeparator("h")}` +
        `${h} ${h > 1 ? hoursPlural : hourSingular}`;
    } else {
      output = output + "";
    }

    if (m > 0) {
      output =
        output +
        `${createBindSeparator("m")}` +
        `${m} ${m > 1 ? minutesPlural : minuteSingular}`;
    } else {
      output = output + "";
    }

    if (s > 0) {
      output =
        output +
        `${createBindSeparator("s")}` +
        `${s} ${s > 1 ? secondsPlural : secondSingular}`;
    } else {
      output = output + "";
    }
    return output;
  } else return "now";
}

console.log(formatDuration(0)); //"now"
console.log(formatDuration(1)); //"1 second"
console.log(formatDuration(62)); //"1 minute and 2 seconds");
console.log(formatDuration(3600)); //"1 hour"
console.log(formatDuration(120)); //"2 minutes"
console.log(formatDuration(3662)); //"1 hour, 1 minute and 2 seconds"
console.log(formatDuration(31536000)); //"1 year
console.log(formatDuration(63072000)); //"2 years
console.log(formatDuration(63244800)); //"2 years, 2 days
console.log(formatDuration(63162000)); //"2 years, 1 day,  1 hour
console.log(formatDuration(63162120)); //"2 years, 1 day,  1 hour, 2 minutes
console.log(formatDuration(63162125)); //"2 years, 1 day,  1 hour, 2 minutes and 5 seconds
console.log(formatDuration(63162121)); //"2 years, 1 day,  1 hour, 2 minutes and 1 second
console.log(formatDuration(63162120)); //"2 years, 1 day,  1 hour, and 2 minutes

// or
// Функция принимает количество секунд и возвращает форматированную строку времени
function formatDuration2(seconds) {
  // Массив объектов, представляющих единицы времени и их эквиваленты в секундах
  const units = [
    { name: "year", seconds: 31536000 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  // Массив для хранения единиц времени, которые будут включены в итоговую строку
  let arrUnitsOfTime = [];

  // Цикл по каждой единице времени
  for (let unit of units) {
    // Вычисляем количество полных единиц времени в оставшихся секундах
    let value = Math.floor(seconds / unit.seconds);
    // Обновляем количество оставшихся секунд
    seconds %= unit.seconds;

    // Если количество единиц времени больше нуля, добавляем его в итоговую строку
    if (value > 0) {
      arrUnitsOfTime.push(
        `${value} ${value > 1 ? unit.name + "s" : unit.name}`
      );
    }
  }

  // Извлекаем последнюю единицу времени из массива
  let lastUnit = arrUnitsOfTime.pop();

  // Возвращаем итоговую строку, используя запятые и "and" для разделения единиц времени
  return arrUnitsOfTime.length > 0
    ? `${arrUnitsOfTime.join(", ")} and ${lastUnit}`
    : lastUnit || "now";
}

console.log(formatDuration2(0)); //"now"
console.log(formatDuration2(1)); //"1 second"
console.log(formatDuration2(62)); //"1 minute and 2 seconds");
console.log(formatDuration2(3600)); //"1 hour"
console.log(formatDuration2(120)); //"2 minutes"
console.log(formatDuration2(3662)); //"1 hour, 1 minute and 2 seconds"
console.log(formatDuration2(31536000)); //"1 year
console.log(formatDuration2(63072000)); //"2 years
console.log(formatDuration2(63244800)); //"2 years, 2 days
console.log(formatDuration2(63162000)); //"2 years, 1 day,  1 hour
console.log(formatDuration2(63162120)); //"2 years, 1 day,  1 hour, 2 minutes
console.log(formatDuration2(63162125)); //"2 years, 1 day,  1 hour, 2 minutes and 5 seconds
console.log(formatDuration2(63162121)); //"2 years, 1 day,  1 hour, 2 minutes and 1 second
console.log(formatDuration2(63162120)); //"2 years, 1 day,  1 hour, and 2 minutes
