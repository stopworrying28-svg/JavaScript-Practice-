console.log("switch statement");
let fruit = "Cherry";
//try changing the fruit to see result...
switch(fruit)
{
    case "Mango":
        console.log("Mangoes are $20 a pound.");
        break;
    case  "Cherry":
    case "Apple":
       console.log("Apple and Cherry are $35 a pound.");
       break;
    case "Orange":
        console.log("Oranges are $19 a pound.");
        break;
    default:
        console.log("Sorry we are out of stock.");
}