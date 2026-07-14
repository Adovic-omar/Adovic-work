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