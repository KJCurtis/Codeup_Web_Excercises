
"use strict";


var rdm = Math.floor(Math.random() * 1100) + 1;
for (var n = 0; n <= 10; n++) {
    var ans = (rdm * n);
    console.log(rdm + " x " + n + " = " + ans);
}

console.log("-------------------------")
for (var x = 0; x <= 10; x++) {
    var rdmA = Math.floor(Math.random() * 20) + 1;
    if (rdmA % 2 == 0) {
        console.log(rdmA + " is an Even number");
    } else {
        console.log(rdmA + " is an odd number");
    }
}
