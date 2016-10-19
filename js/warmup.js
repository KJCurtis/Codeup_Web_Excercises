
'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var zeroCount = 0, oneCount = 0, twoCount = 0, threeCount = 0, fourCount = 0, fiveCount = 0;
while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    if  (luckyNumber == 0) {
        zeroCount++;
    } else if (luckyNumber == 1) {
        oneCount++;
    } else if (luckyNumber == 2) {
        twoCount++;
    } else if (luckyNumber == 3) {
        threeCount++;
    } else if (luckyNumber == 4) {
        fourCount++;
    } else if (luckyNumber == 5) {
        fiveCount++;
    }
    i++;
}

console.log('0 appeared ' + zeroCount + ' times');
console.log('1 appeared ' + oneCount + ' times');
console.log('2 appeared ' + twoCount + ' times');
console.log('3 appeared ' + threeCount + ' times');
console.log('4 appeared ' + fourCount + ' times');
console.log('5 appeared ' + fiveCount + ' times');


console.log("====================================================");


var luckyArrayNumber;
var arrayCounter = [0, 0, 0, 0, 0, 0];

while (i <= 100) {
    luckyArrayNumber = Math.floor(Math.random() * 6);
    arrayCounter[luckyArrayNumber]++;
    i++;
}

arrayCounter.forEach(function(counter, i){
    console.log(i + ' appeared ' + arrayCounter[counter] + ' times');
});