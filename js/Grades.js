function avgGrade() {
    var gradeSum = 0;
    for (var i = 0; i < grades.length; i++) {
        gradeSum += parseInt(grades[i]);
    }
    var gradeAvg = gradeSum / grades.length;
    return gradeAvg;
}
function letterGrade(gradeAvg) {
    var letterGrade;
    if (gradeAvg < 60){
        letterGrade = "F";
    } else if (gradeAvg >= 60 && gradeAvg < 70) {
        letterGrade = "D";
    } else if (gradeAvg >= 70 && gradeAvg < 80) {
        letterGrade = "C";
    } else if (gradeAvg >= 80 && gradeAvg < 90) {
        letterGrade = "B";
    } else if (gradeAvg >= 90){
        letterGrade = "A";
    }
    return letterGrade
}
var grades = [];
do {
    var toInput = confirm('do you have any grades to input?');
    if (toInput) {
        var gradeInput = prompt('Enter Grades to be input');
        if (gradeInput == null || gradeInput.trim() == "") {
            alert('No user input detected!');
            continue;
        } else if (isNaN(gradeInput)) {
            alert('User input is not a number!');
        } else {
            console.log('------------------------');
            grades.push(gradeInput);
            for (var i = 0; i < grades.length; i++) {
                console.log('grade ' + (i + 1) + ': ' + grades[i]);
            }
        }
    } else {
        var gradeAvg = avgGrade(grades);
        var letterGrade = letterGrade(avgGrade(grades));
        console.log('============================');
        console.log('Grade Average: ' + gradeAvg + ' ' + letterGrade);
        for (var i = 0; i < grades.length; i++) {
            console.log('grade ' + (i + 1) + ": " + grades[i]);
        }
    }
} while (toInput);