/*------How to work with forms----_-_-
"onsubmit"=> deafult you have to prevent default behaviour
•Event attached to the for
"onclick"=>
*/

/*MINI EXERCISE
1. create a html form: atleast 2 inputs and a submit button
2. Attach the submit event listener.
3. Prevent form default behaviour
4. print out the values of your form inputs.
*/
document •getElementById("form1"). addEventListener ("submit", submitForm);
document. getElementById("formlinput1"). addEventListener ("input", (e) => {
//value console.1og(e.target.value);
}) ;
function submitForm(e) {
e. preventDefault();
////stop the form from making an auto submission /submit.
//
const inputList = document. queryselector("#form1") queryselectorAll ("input");
const inputi = inputList[0];
const input2 = inputlist[1];
console.log("input 1"
', input1.value);
console. log("input 2", input2. value);
console.log("f1 input1", document.getElementById("formlinput1"). value);
console.1og("f1 input2"
', document. getElementById("formlinput2"). vaLue) ;
inputivalueats and dogs; /update from this
}
