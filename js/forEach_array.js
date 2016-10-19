

/*
* write a function that returns a new array of strings with the first letter to uppercase in each element
* take an array of strings containing the names in lower case and upper case only the first character
* is this operation a type of map, filter, or reduce usage of foreach
* new array should be john, paul, ringo, george, yoko
*
*
* exercise 2
*
* write a functions that takes an array of numbers 1-10
* and returns the product of all the numbers
* is this a type of map, filter, or reduce foreach
*  var numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];
* exercise 3
*
* write a function that returns a string containing a HTML
* for an unordered list with an <li> for each person on your names array
* is this type of map, filter, or reduce usage of the foreach
*/


var userNames = [];

do {
    console.log('===========================================');
    var toAddName = confirm('would you like to add a name to the list?');
    if (toAddName) {
        var inputAddname = prompt('enter the name to add');
        if (inputAddname == null || inputAddname.trim() == '') {
            alert('no user input detected');
            continue;
        } else if (!isNaN(inputAddname)) {
            alert('that is not a name, but is a number!');
            continue;
        } else {
            console.log('===========================================');
            userNames.push(inputAddname);
            for (var i = 0; i < userNames.length; i++) {
                console.log('Name #'  + (i + 1) + ": " + userNames[i]);
            }
        }
    } else {
        console.log('----------------------------------------');
        console.log('list is complete. full list of names that were added:');
        for (var i = 0; i < userNames.length; i++) {
            console.log('|  Name #' + (i + 1) + ": " + userNames[i]);
        }
        console.log('-----------------------------------------');
        console.log("^^^^^^^^^^using a .forEach loop^^^^^^^^^^")
        userNames.forEach( function (element, index) {
            console.log("the name at " + (index + 1) + " is: " + element);
        });
    }
} while (toAddName);

console.log('============================================');
for (var i = 0; i < userNames.length; i++) {
    if (isNameCapital(userNames[i])) {
        console.log(userNames[i] + " is capital!");
    } else {
        console.log(userNames[i] + " is not capital!");
        userNames[i] = nameToCapital(userNames[i]);
    }
}
console.log('============================================');
console.log('^^^^^^^^^^^^^^capitalized list^^^^^^^^^^^^^^')
for (var i = 0; i < userNames.length; i++) {
    console.log('|  Name #' + (i + 1) + ": " + userNames[i]);
}

function isNameCapital(str) {
    var fLetter = str.charAt(0);
    return (fLetter == fLetter.toUpperCase());
}

function nameToCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
