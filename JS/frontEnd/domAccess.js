/*Dom Access using
1. querySelector
2. documentGet‹...›

1. getElementById:
-create a variable assign to the dom element with id‹divi>
-console. log this element: view in your browser
-in browser console you should be able hover over the eLement

2. getELementByCLass
-create a variable assign to the dom element with with class‹list-item
-console. Log this element: view in your browser
- in browser console you should be able hover over the eLement>
-use a for loop or while to go through the array elements and print each eLement.

3. querySelector:
1. for the id: hint use # for id
-create a variable assign to the dom element with id‹divi>
-console. log this element: view in your browser
-in browser console you should be able hover over the element
2. ‹use queryselector›for the class: hint use ‹.›
-create a variable assign to the dom element with class‹list-item›
-console. Log this element: view in your browser
-in browser console you should be able hover over the element.
-Note you onLy get the first List item.
3. ‹use querySelectorAll›for the class: hint use ‹.>
-create a variable assign to the dom element with class‹List-item›
-console. log this element: view in your browser
-in browser console you should be able hover over the element
-Note you get the array.
-use a for or while loop to go through the array elements
*/
const div1 = document.getElementById("div1");
const div2 = document.querySelector("#div1");
console. log (div1); console. log (div2);
const listOfItems = document-getElementsByClassName("fruits");
const querylistOfItems = document.querySelector(" fruits");
const queryList0fAllItems = document. querySelectorAll(" fruits");
console. log(listOfItems);
console. log(queryListOfItems);
console. log(queryList0fAllItems);
for (let i = 0; i < queryList0fAllItems.length; i++) {
console. log (querylist0fAllItems[i]);
}

/* buttons.
1. original Content
2. updating Content
3. update the innerText
*/
function original () {
console. 10g("original clicked");
}
function replace () {
console. log("replace clicked");
}
function updateFruits () {
console. log("update fruites),}
}
/*
Update dom elements.
 -innerHtml<replaces the html>
 -innerText<replaces the innerText>
1. buttons.
1. original Content
2. updating Content
3. update the innerText
*/
 const otherFruits = ["Kiwi", "Pinapple", "Dragon Fruit"];
 const originalDiv = document. querySelector("#div1") . innerHTML;
//
 // console. log(originalDiv);
function original() {

console.log("original clicked");
 //reset the div to its original value
document. querySelector("#div1"). innerHTML = originalDiv;
 //replace the original content
function replace() {
// console. log( "replace clicked");
const newHtml =
<h3>List Chores</h3>
<ul>
‹li class="list-item">Clean Bathroom</li>
‹li class="list-item"> Clean Kitchen</li>
‹li class="list-item">Fetch Water</li>
</ul>
document. querySelector("#div1"). innerHTML = newHtm1;
//some html
function updateFruits() {
console.log("update fruites clicked");

 //innerText, for loop or while Loop.
 //queryselectorAll. Only replace the fruijts using innertext

//innnertText and loop<fruits>
