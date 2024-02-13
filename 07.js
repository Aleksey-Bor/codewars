// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  let set = new Set();

  intervals.forEach(function (arrayWithRanges) {
    let startOfRange = arrayWithRanges[0];
    let endOfRange = arrayWithRanges[1];

    for (let i = startOfRange; i <= endOfRange; i++) {
      set.add(i);
    }
  });
  return set;
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
