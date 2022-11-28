// Simple Calculator
// A calculator that performs additon, subtraction, multiplication, division and modulus operations on two inputs.

// Define prompt to be able to insert inputs from console.
const prompt = require("prompt-sync")();

//Declare Variables for inputX, inputY and operator.
let operator = (prompt("Welcome! Select an Operator (a).Addition, (b).Subtraction, (c).Multiplication, (d).Division, (e).Modulus.: ")).toLowerCase();
let inputX = parseInt(prompt("Insert your First Variable.: "));
let inputY = parseInt(prompt("Insert your Second Variable.: "));

// Create an operation function to perform selected operations on inputs.
function operation(){
    if(operator === "a"){
        let sum = inputX + inputY;
        console.log(`The Sum is: ${sum}`);
        return sum;
    } else if(operator === "b"){
        let difference = inputX - inputY;
        console.log(`The Difference is: ${difference}`);
        return difference;
    } else if(operator === "c"){
        let product = inputX * inputY;
        console.log(`The Product is: ${product}`);
        return product;
    } else if(operator === "d"){
        let quotient = inputX / inputY;
        console.log(`The Quotient is: ${quotient}`);
        return quotient;
    } else if(operator === "e"){
        let modulo = inputX % inputY;
        console.log(`The Modulus is: ${modulo}`);
        return modulo;
    } else{
        console.log("Please Input a Valid Number");
    }
}

// Create performOperation function to select and opeartor then perform the opeartion selected on inputs.
function performOperation(){
    if((operator === "a" || operator === "b" || operator === "c" || operator === "d" || operator === "e") && operator != " "){
       operation();
    } else{
        console.log("Please Select a Valid Operator!");
    }
    performAnotherOperation();   
}

// Create a function reset to clear all inputs and operators before starting another opeartion.
function reset(){
    operator = (prompt("Welcome! Select an Operator (a).Addition, (b).Subtraction, (c).Multiplication, (d).Division, (e).Modulus.: ")).toLowerCase();
    inputX = parseInt(prompt("Insert your First Variable.: "));
    inputY = parseInt(prompt("Insert your Second Variable.: "));
}

// Create a function performAnotherOperation to prompt the user if he wants to carry out another opeartion and accept input.
function performAnotherOperation(){
    const agree = "yes";
    const disagree = "no";
    const response = (prompt("Do you want to Perform Another Operation? yes(y) or no(n)!: ")).toLowerCase();
    if(response === agree || response === "y"){
        reset();
        performOperation();
    } else if(response === disagree || response === "n"){
        console.log("Thank you for Using the Calculator!")
    }else{
        console.log("Please Make a valid Selection!");
        performAnotherOperation();
    }
}

performOperation();
