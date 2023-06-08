// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numberString1 = "";
  let numberString2 = "";
  for (let i=0; i<array1.length; i++){
    numberString1+=(array1[i]);
  }
  for (let i=0; i<array2.length; i++){
    numberString2+=array2[i];
  }
  return Number(numberString1)+Number(numberString2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let numberString=String(value);
  let newNumber="";
  for(let i=numberString.length-1; i>=0; i--){
    newNumber+=numberString[i];
  }
  return newNumber==numberString;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input===""||input===null||input===undefined){
    return "Required field";
  } else if (Number(input)===0||isNaN(Number(input))) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
