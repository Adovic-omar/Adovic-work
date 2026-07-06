/*
A recusive function is a function that calls itself.
-> since this creates an endless Loop you need to find a way to terminate. That is using a return statement and if ‹condition›
*/
function salaryGrossPromptProcess() {
let gross = prompt("Enter your gross salary");
if (isNaN(gross) === false) {
//condition is met
console.log(`You entered this amount ${gross} exiting`);
return; // exit a function
}
alert(
"Invalid gross salary entered. enter a number for gross salary. try again,"
) ;
salaryGrossPromptProcess();
}
salaryGrossPromptProcess();

/*1. remove the alert=>

2.initial prompt should be enter your gross salary

3.any prompot after that should be Invalid gross salary entered. enter a number for gross salary. try again
*/

    function salaryGrossPromptProcess(message = "Enter your gross salary") {
    let gross = prompt(message);

    if (!isNaN(gross) && gross !== "") {
        console.log(`You entered this amount ${gross}. Exiting.`);
        return;
    }

    salaryGrossPromptProcess(
        "Invalid gross salary entered. Enter a number for gross salary. Try again"
    );
}

salaryGrossPromptProcess();

/*1. remove the alert=>
2.
initial prompt should be enter your gross salary
3.
any prompot after that should be Invalid gross salary entered. enter a number for gross salary. try again
*/

// Function to calculate the factorial of a number
function factorial(number) {
    // Check if the number is greater than 0
    if (number < 1) {
        return "Enter a number greater than 0";
    }

    // Base case
    if (number === 1) {
        return 1;
    }

    // Recursive case
    return number * factorial(number - 1);
}

console.log(factorial(5)); // Output: 120