export default function main() {
  const arr1to6 = [1, 2, 3, 4, 5, 6];

  //LESS COMMON ARRAY OPERATIONS
  //reverse, copyWithin, fill, flat
  //filter, map, flatMap
  //entries, keys, values
  //lastIndexOf, findIndex, findLastIndex
  //at, find, findLast
    
  //UPDATING **EXISTING** ARRAY ********************************************
  //reverse - Updates existing array, indexes are reversed
  console.log([1, 2, 3, 4, 5, 6].reverse()); //[6,5,4,3,2,1]

  //copyWithin - Updates existing array (idxPasteStart, idxCopyStart, idxCopyEnd)
  console.log([1, 2, 3, 4, 5, 6].copyWithin(1, 3, 5)); //[1,4,5,4,5,6]

  //fill - Updates existing array (pasteValue, idxPasteStart, idxPasteEnd)
  console.log([1, 2, 3, 4, 5, 6].fill(0, 3, 5)); //[1,2,3,0,0,6]

  //flat - Updates existing array with flattened internal arrays elements
  console.log([1, [2, [2, 3, 4, 5], 5], 6].flat(2)); //[1,2,2,3,4,5,5,6]

  //CREATING NEW ARRAYS FROM EXISTING ARRAYS ********************************
  //filter - Returns new filtered array based on rule
  console.log(arr1to6.filter((v) => v != 5)); //[1,2,3,4,6]

  //map - Returns new array allowing modification to elements
  console.log(
    [
      [1, 2],
      [2, 3, 4, 5],
      [5, 6],
    ].map((v) => v + 1)
  ); //['1,21', '2,3,4,51', '5,61']

  //flatMap - Returns a new flattened array
  console.log(
    [
      [1, 2],
      [2, 3, 4, 5],
      [5, 6],
    ].flatMap((v) => v)
  ); //[1,2,2,3,4,5,5,6]

  //ITERATING OVER ARRAY ELEMENTS ********************************************
  console.log('--------------------------');
  //entries: returns an iterator of each element in the array
  console.log(JSON.stringify(arr1to6.entries().next())); //{'value':[0,1],'done':false}
  for (let e of arr1to6.entries()) {
    console.log(e[0] + 1 + ': ' + JSON.stringify(e));//1:[0,1],...6:[5,6]
  }
  console.log('--------------------------');
  //keys: returns an iterator of each key in the array
  for (const k of ['1', '2', '3'].keys()) {
    console.log(k); //0; 1; 2;
  }
  console.log('--------------------------');
  //keys: returns an iterator of each key in the array
  for (const v of ['1', '2', '3'].values()) {
    console.log(v); //1; 2; 3;
  }
  console.log('--------------------------');
  
  //FINDING INDEXES OF ARRAY ELEMENTS ****************************************

  //lastIndexOf - Returns the last index of the specified value **objects do not work
  console.log(['a', 'b', 'a', 'c'].lastIndexOf('a')); //2

  //findIndex - Returns first index based on rule; (rule, [+/-]startAtIdx)
  console.log(arr1to6.findIndex((v) => v > 3)); //3 - find first index

  //findLastIndex - Returns last index based on rule; (rule, [+/-]startAtIdx)
  console.log(arr1to6.findLastIndex((v) => v < 4)); //2 - find last index

  //FINDING VALUES OF ARRAY ELEMENTS *****************************************
  //at - Returns value at index
  console.log(arr1to6.at(3)); //4

  //find - Returns first value based on rule; (rule, [+/-]startAtIdx)
  console.log(arr1to6.find((v) => v > 3)); //4 - find first value

  //findLast - Returns last value based on rule; (rule, [+/-]startAtIdx)
  console.log(arr1to6.findLast((v) => v < 5)); //4 - find last value

  
}
