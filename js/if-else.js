/**
 * Created by KJCurtis on 10/6/16.
 */

var mathGrade = 70;
var scienceGrade = 80;
var historyGrade = 90;

var averageGrade = (mathGrade + scienceGrade + historyGrade)/3;

if (averageGrade >= 80) {
    console.log("you are doing great!");
} else {
    console.log("you should study!");
}


var flipACoin = Math.floor(Math.random()*2)

if(flipACoin == 1) {
    console.log("buy a car!")
} else {
    console.log("buy a House!")
}