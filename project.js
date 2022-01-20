///////////////////////////////////////////////
//Understanding the problem
//-Do you want a string showing all info directly from an array

////Making smaller problems from one big problem
//// -create a function with arr as the main array to accomodate all given strings
// -create two separate arrays for all temperature readings
// -create a string with the text given
// -How to convey all maximum temperatures with its strings onto one array with the use of a function
////////////////////////////

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
let str = "";
function printForecast(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    // let str = 0;
    str += `${arr1[i]} in ${i + 1}days ...`;
  }

  return printForecast;
}

printForecast(testData1);

console.log(str);
