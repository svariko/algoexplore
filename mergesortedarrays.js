/*

Thoughts to improve:

- is it necessary to make copies of the input array?
- is it necessary to check conditions or just go through the exact number of iterations required?
- how to make it more robust and handle errors and changes?

*/

function mergeSortedArrays(array1, array2) {
  const mergedLength = array1.length + array2.length;
  const copyarray1 = [...array1];
  const copyarray2 = [...array2];

  const newArray = [];

  for (let i = 0; i < mergedLength; i++) {
    if (!isEmpty(copyarray1) && !isEmpty(copyarray2)) {
      if (getTopElement(copyarray1) <= getTopElement(copyarray2)) {
        newArray.push(popElement(copyarray1));
      } else {
        newArray.push(popElement(copyarray2));
      }
    } else if (isEmpty(copyarray1) && !isEmpty(copyarray2)) {
      newArray.push(...copyarray2);
      emptyArray(copyarray2);
    } else if (!isEmpty(copyarray1) && isEmpty(copyarray2)) {
      newArray.push(...copyarray1);
      emptyArray(copyarray1);
    }
  }

  return newArray;
}

function popElement(array) {
  return array.shift();
}

function isEmpty(array) {
  return array.length == 0;
}

function addToEnd(original, toadd) {
  original.splice(original.length, 0, ...toadd);
}

function getTopElement(array) {
  return array[0];
}

function emptyArray(array) {
  while (array.length != 0) {
    array.shift();
  }
}

module.exports = {
  mergeSortedArrays,
  popElement,
  isEmpty,
  addToEnd,
  getTopElement,
  emptyArray,
};
