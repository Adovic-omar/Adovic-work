/*
A recusive function is a function that calls itself.
-> since this creates an endless Loop you need to find a way to terminate. That is using a return statement and if ‹condition›
*/
function salaryGrossPromptProcess() {
let gross = prompt("Enter your gross salary");
if (isNaN(gross) === false) {
//condition is met
console. log(" You entered this amount ${gross} exiting );
return; // exit a function
}
alert(
"Invalid gross salary entered. enter a number for gross salary. try again,
) ;
salaryGrossPromptProcess();
}
salaryGrossPromptProcess();