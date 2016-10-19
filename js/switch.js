/**
 * Created by KJCurtis on 10/6/16.
 */


var randomMonth = Math.floor(Math.random() * 12)
var luckyNumber = Math.floor(Math.random() * 6);
var orderPrice = 60;
var priceDiscounted = 0;

if (luckyNumber == 0) {
    console.log("Sorry your lucky number is 0, no discount applied. Full price: " + orderPrice.toFixed(2) + "$");
} else if (luckyNumber == 1) {
    priceDiscounted = (.1 * orderPrice);
    console.log("Your lucky number is 1! 10% discount applied. Final Price: " + priceDiscounted.toFixed(2) + "$");
} else if (luckyNumber == 2) {
    priceDiscounted = (.25 * orderPrice);
    console.log("Your lucky number is 2! 25% discount applied. Final Price: " + priceDiscounted.toFixed(2) + "$");
} else if (luckyNumber == 3) {
    priceDiscounted = (.375 * orderPrice);
    console.log("Your lucky number is 3! 37.5% discount applied! Final Price: " + priceDiscounted.toFixed(2) + "$");
} else if (luckyNumber == 4) {
    priceDiscounted = (.4 * orderPrice);
    console.log("Your lucky number is 4! 50% discount applied! Final Price: " + priceDiscounted.toFixed(2) + "$");
} else if (luckyNumber == 5) {
    console.log("Congratulations! Your lucky number is 5! Your whole order is on the House!")
}

switch (luckyNumber) {
    case 0:
        console.log("Sorry your lucky number is 0, no discount applied. Full price: " + orderPrice.toFixed(2) + "$");
        break;
    case 1:
        priceDiscounted = (.1 * orderPrice);
        console.log("Your lucky number is 1! 10% discount applied. Final Price: " + priceDiscounted.toFixed(2) + "$");
        break;
    case 2:
        priceDiscounted = (.25 * orderPrice);
        console.log("Your lucky number is 2! 25% discount applied. Final Price: " + priceDiscounted.toFixed(2) + "$");
        break;
    case 3:
        priceDiscounted = (.375 * orderPrice);
        console.log("Your lucky number is 3! 37.5% discount applied! Final Price: " + priceDiscounted.toFixed(2) + "$");
        break;
    case 4:
        priceDiscounted = (.4 * orderPrice);
        console.log("Your lucky number is 4! 50% discount applied! Final Price: " + priceDiscounted.toFixed(2) + "$");
        break;
    case 5:
        console.log("Congratulations! Your lucky number is 5! Your whole order is on the House!")
        break;
}


if (randomMonth == 0) {
    console.log("January");
} else if (randomMonth == 1) {
    console.log("Febuary");
} else if (randomMonth == 2) {
    console.log("March");
} else if (randomMonth == 3) {
    console.log("April");
} else if (randomMonth == 4) {
    console.log("May");
} else if (randomMonth == 5) {
    console.log("June");
} else if (randomMonth == 6) {
    console.log("July");
} else if (randomMonth == 7) {
    console.log("August");
} else if (randomMonth == 8) {
    console.log("September");
} else if (randomMonth == 9) {
    console.log("October");
} else if (randomMonth == 10) {
    console.log("November");
} else if (randomMonth == 11) {
    console.log("December");
}

switch (randomMonth) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("Febuary");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("december");
        break;
}


















