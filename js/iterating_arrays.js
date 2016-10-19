




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
