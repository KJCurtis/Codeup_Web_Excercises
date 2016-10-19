


var coneInventory = Math.floor(Math.random() * 50) + 50;
var i = 1;
var conesOrdered;
var conesSold;

while (coneInventory > 0) {
    conesSold = 0;
    conesOrdered = Math.floor(Math.random() * 5) + 1;
    console.log("------------ transaction #: " + i + " ------------");
    console.log("Cones Ordered: " + conesOrdered);
    if (conesOrdered <= coneInventory) {
        conesSold = conesOrdered;
        coneInventory -= conesSold;

    } else if (conesOrdered > coneInventory) {
        console.log("There is not have enough inventory!");
        console.log("There are only " + coneInventory + " left!");
        conesSold = coneInventory;
        coneInventory -= conesSold;
    }

    console.log("cones sold: " + conesSold);
    console.log("Inventory Left: " + coneInventory);
    i++;

}