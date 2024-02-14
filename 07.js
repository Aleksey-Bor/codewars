// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  // Сортируем интервалы по начальному значению
  var sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  // Создаем массив для объединенных интервалов и добавляем туда первый отсортированный интервал
  var mergedIntervals = [sortedIntervals[0]];

  // Проходим по оставшимся отсортированным интервалам
  for (var i = 1; i < sortedIntervals.length; i++) {
    // Берем последний объединенный интервал
    var lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
    // Берем текущий отсортированный интервал
    var currentInterval = sortedIntervals[i];

    // Если текущий интервал пересекается с последним объединенным интервалом
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Обновляем конец последнего объединенного интервала, если он меньше, чем конец текущего интервала
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // Если интервалы не пересекаются, добавляем текущий интервал в массив объединенных интервалов
      mergedIntervals.push(currentInterval);
    }
  }

  // Возвращаем сумму длин всех объединенных интервалов
  return mergedIntervals.reduce(
    (sum, interval) => sum + interval[1] - interval[0],
    0
  );
}

console.log(sumIntervals([[5, 8]])); //3

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); //9

/*console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); //7

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
); //19

console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
); //100000030 */
