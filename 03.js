console.log("-- Task 3 ---------------------------------");

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (!Array.isArray(other)) {
    return false;
  }

  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i <= other.length - 1; i++) {
    if (!Array.isArray(other[i]) && Array.isArray(this[i])) {
      return false;
    } else if (Array.isArray(other[i]) && !other[i].sameStructureAs(this[i])) {
      return false;
    }
  }

  return true;
};

let arr1 = [1, [1, 1]];
let arr2 = [2, [2]];

console.log(arr1.sameStructureAs(arr2));
