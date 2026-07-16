/*
in built js Librarykapi› handling http request
fetch(@param1,@param2) = response on object with function th
=> response.catch
@param1=>url:<>
@param2=>configuration. ‹headers, method>
*/
const requestoptions = {
method: "GET"
redirect: "follow",
fetch("https://api.github.com/users"
, requestOptions)
•then((response) => response.text ())
•then( (result) => {
console.1og("type of result", typeof result); console.1og(result);
})
•catch((error) = console error(error)) ;

/*
code without a promise.
1. create a variable‹any name› global variable
2. console.log the value of the variable.
3. create and call a function that modifies this variable
4. console.log() the value of the variable
*/
let flow = "This flow";
console.1og("27:", flow);
function testfunc () {
flow = "updated flow";
}
testfunc ();
console.1og("32:", flow);|