// Simple Calculator
// A calculator that performs additon, subtraction, multiplication, division and modulus operations on two inputs.

// Define prompt to be able to insert inputs from console.
const prompt = require("prompt-sync")();

//Declare Variables for inputX, inputY and operator.
let operator = (prompt("Welcome! Select an Operator (a).Addition, (b).Subtraction, (c).Multiplication, (d).Division, (e).Modulus.: ")).toLowerCase();
let inputX = parseInt(prompt("Insert your First Variable.: "));
let inputY = parseInt(prompt("Insert your Second Variable.: "));

// Create an operation function to perform selected operations on inputs.
// Create performOperation function to select and opeartor then perform the opeartion selected on inputs.
// Create a function reset to clear all inputs and operators before starting another opeartion.
// Create a function performAnotherOperation to prompt the user if he wants to carry out another opeartion and accept input.
