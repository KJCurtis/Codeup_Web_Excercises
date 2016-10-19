


var names = ['john', 'paul', 'ringo', 'george', 'yoko'];

function capitalizeFirstLetterOfEachString(arrayOfStrings) {
    var newArray = [];
    arrayOfStrings.foreach(function(name, index) {
        var firstLetterCapitalized = name[0].toUpperCase();
        var restOfString = name.substring(1/*where to start*/, name.length /*were to end*/);
        var fullName = firstLetterCapitalized + restOfString;
        names[index] = fullName;
        newArray.push(fullName);
    });
    return  newArray;
}
names = capitalizeFirstLetterOfEachString(names);

names.foreach(function(name, index) {
    var firstLetterCapitalized = name[0].toUpperCase();
    var restOfString = name.substring(1/*where to start*/, name.length /*were to end*/);
    var fullName = firstLetterCapitalized + restOfString;
    console.log(fullName);
    names[index] = fullName;
    newArray.push(fullName);
});

console.log(names);

