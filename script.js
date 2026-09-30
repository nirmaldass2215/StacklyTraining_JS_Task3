// Logical Operators

// console.log(10 > 5 && 20 > 15);

// console.log(10 > 15 && 20 > 10);

// console.log(10 > 20 || 15 > 10);

// console.log(5 > 10 || 20 < 15);

// console.log(!(10 > 5));

// console.log(!(10 < 5));

// let result1 = 10 > 5 && 20 > 15;
// let result2 = 10 > 20 || 15 > 10;
// console.log(result1 && result2);

// let condition1 = 10 > 5;
// let condition2 = 20 < 15;
// let condition3 = 5 > 2;
// let finalResult = condition1 && (condition2 || !condition3);
// console.log(finalResult);



// Ternary Operator

// let age = 20;
// console.log(age >= 18 ? "Eligible" : "Not Eligible");

// let marks = 40;
// console.log(marks >= 35 ? "Pass" : "Fail");

// let number = 15;
// console.log(number > 10 ? "Greater than 10" : "Not greater than 10");

// let num = 7;
// console.log(num % 2 === 0 ? "Even" : "Odd");

// let salary = 35000;
// console.log(salary > 30000 ? "Good Salary" : "Low Salary");



// Concatenation & Template Strings

// let firstName = "Nirmal";
// let lastName = "Dass";
// let city = "Coimbatore";
// console.log(firstName + " " + lastName + " " + city);

// let name = "Nirmal";
// let age = 28;
// console.log("My name is " + name + " and my age is " + age);

// let product = "Laptop";
// let price = 50000;
// let brand = "Dell";
// console.log("I bought a " + brand + " " + product + " for ₹" + price);

// let name1 = "Nirmal";
// let qualification = "M.Sc Mathematics";
// let company = "Stackly";
// console.log(`My name is ${name1}, I have completed ${qualification}, and I work at ${company}.`);

// let name2 = "Nirmal";
// let age2 = 28;
// let city2 = "Coimbatore";
// console.log(`My name is ${name2}, I am ${age2} years old, and I live in ${city2}.`);



// Type Casting — Implicit

// let result1 = "10" + 5;
// console.log(result1);
// console.log(typeof result1);

// let result2 = 10 + 5;
// console.log(result2);
// console.log(typeof result2);

// let result3 = 10 + true;
// console.log(result3);
// console.log(typeof result3);

// let result4 = 10 + null;
// console.log(result4);
// console.log(typeof result4);

// let result5 = "Hello" + true;
// console.log(result5);
// console.log(typeof result5);

// let result6 = "Hello" + [1, 2, 3];
// console.log(result6);
// console.log(typeof result6);

// let result7 = 10 + {};
// console.log(result7);
// console.log(typeof result7);

// let result8 = "20" + 10;
// console.log(result8);
// console.log(typeof result8);

// let result9 = 10 + false;
// console.log(result9);
// console.log(typeof result9);

// let result10 = "JavaScript" + null;
// console.log(result10);
// console.log(typeof result10);



// Type Casting — Explicit

// let result1 = Number("100");
// console.log(result1);

// let result2 = Number("25");
// console.log(result2);
// console.log(typeof result2);

// let result3 = Number(true);
// console.log(result3);

// let result4 = Number(false);
// console.log(result4);

// let result5 = Number("");
// console.log(result5);

// let result6 = Number(null);
// console.log(result6);

// let result7 = Number(undefined);
// console.log(result7);

// let result8 = Boolean("Hello");
// console.log(result8);

// let result9 = Boolean("");
// console.log(result9);

// let result10 = Boolean(0);
// console.log(result10);

// let result11 = Boolean(1);
// console.log(result11);

// let result12 = Boolean(-1);
// console.log(result12);

// let result13 = Boolean([]);
// console.log(result13);

// let result14 = Boolean({});
// console.log(result14);



// Conditional Statements

// let age = 20;
// if (age >= 18) {
//     console.log("Eligible");
// }


// let age1 = 20;
// if (age1 >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not Eligible to vote");
// }


// let marks = 45;
// if (marks >= 35) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// let time = 15;
// if (time >= 1 && time <= 6) {
//     console.log("Early Morning");
// } else if (time >= 7 && time <= 12) {
//     console.log("Morning");
// } else if (time >= 13 && time <= 17) {
//     console.log("Afternoon");
// } else if (time >= 18 && time <= 19) {
//     console.log("Evening");
// } else if (time >= 20 && time <= 24) {
//     console.log("Night");
// } else {
//     console.log("Invalid Time");
// }


// let temperature = 30;
// if (temperature > 35) {
//     console.log("Hot");
// } else if (temperature >= 20 && temperature <= 35) {
//     console.log("Normal");
// } else {
//     console.log("Cold");
// }


// let age2 = 25;
// let height = 175;
// let weight = 65;
// if (age2 >= 18) {
//     if (height >= 170) {
//         if (weight >= 60) {
//             console.log("Eligible");
//         }
//     }
// }



// Switch Statement

// let trafficLight = "red";

// switch (trafficLight) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Get Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Traffic Light");
// }


// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     case "Thursday":
//         console.log("Thursday");
//         break;
//     case "Friday":
//         console.log("Friday");
//         break;
//     case "Saturday":
//         console.log("Saturday");
//         break;
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }


// let choice = 2;

// switch (choice) {
//     case 1:
//         console.log("Start");
//         break;
//     case 2:
//         console.log("Settings");
//         break;
//     case 3:
//         console.log("Exit");
//         break;
//     default:
//         console.log("Invalid Choice");
// }



// // Loops

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }


// let person = {
//     name: "Nirmal",
//     role: "Software Engineer",
//     experience: 3
// };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }