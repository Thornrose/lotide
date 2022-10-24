const middle = function(array) {

  const arrayMiddle = [];
  const midCount = array.length % 2 === 0 ? 2 : 1;
  const midPointIndex = Math.ceil(array.length / 2) - 1; // using ceil to round up - floor would round down and no longer work in all cases.

  if (array.length <= 2) {
    return arrayMiddle;
  }
  arrayMiddle.push(array[midPointIndex]);
  
  if (midCount === 2) {
    arrayMiddle.push(array[midPointIndex + 1]);
  }

  return arrayMiddle;

};

module.exports = middle;
