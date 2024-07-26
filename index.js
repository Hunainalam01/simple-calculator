#! /usr/bin/env node       
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumer",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operattor to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// CONDITIONS
if (answer.operator === "Addition") {
    console.log(answer.firstNumer + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumer - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumer * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumer / answer.secondNumber);
}
else {
    console.log("please select a vlalid operator to perform operation:");
}
