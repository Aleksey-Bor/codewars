// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  var sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  var mergedIntervals = [sortedIntervals[0]];

  for (var i = 1; i < sortedIntervals.length; i++) {
      var lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
      var currentInterval = sortedIntervals[i];

      if (currentInterval[0] <= lastMergedInterval[1]) {
          lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
          mergedIntervals.push(currentInterval);
      }
  }

  return mergedIntervals.reduce((sum, interval) => sum + interval[1] - interval[0], 0);
}

console.log(sumIntervals([[5, 8]])); //4

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
