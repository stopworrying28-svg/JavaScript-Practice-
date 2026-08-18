console.log("Conditional Statements");
let age = Number(prompt("Enter your age:"));
if(age >= 18 && age < 30)
{
    alert("You are eligible for the club");
}
else if(age > 30 && age < 100)
{
    alert("You are too old for the club");
}
else if(age > 0 && age < 18)
{
    alert("You are underage");
}
else{
    alert("Invalid age");
}