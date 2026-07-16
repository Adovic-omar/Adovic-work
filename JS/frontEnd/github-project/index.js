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