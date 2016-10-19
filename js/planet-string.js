
var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
var tempName = "";
function splitString(string, char) {
    var tempArray = [];
    for (var i = 0; i < planetsString.length; i++) {
        if (string.charAt(i) == char) {
            tempArray.push(tempName);
            tempName = "";
            continue;
        } else {
            tempName += string.charAt(i);
            continue;
        }

    }
    return tempArray;
}
