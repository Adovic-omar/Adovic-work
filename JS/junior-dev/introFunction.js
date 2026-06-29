/*
  Function allow you to write reusable bits of code.
  To use Dry(Do not repeat your self) by using code block

  /{/code block/}/
  syntax:
  function <name:variable name convection> (<parameters>){
    /code block/
  }

  //Big rule import rule.
  -> a function executes only when called.
  -> calling a function is telling the
   function to do its work.
*/

/*
 Create a simple function that 
 when you call it it alerts
 you on the curent time.
*/

/*does not take any parameters*/
function timeAlert() {
  const date = new Date();
  alert(
    `time stamp: ${date.toLocaleString("en-KE", {
      timeZone: "Africa/Nairobi",
    })}`,
  );
}
/*
 call a function use thefunction name then 
()-> brackets
*/
//timeAlert(); //calling a function

/*
Area of a triangle
 0.5*l*w
*/
//base=undefined , height=undefined
//paremeters
function areaOfTriangle(base, height) {
  //Type check ->string, height:boolean
  //Types script ->
  if (typeof base !== "number") {
    console.error(`when using are of triangle ensure base is a number`);
    return; //exit
  }
  if (typeof height !== "number") {
    console.error(`when using are of triangle ensure height is a number`);
    return; //exit
  }
  console.log(`base, height is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `For triangle with base ${base} and height ${height} area is ${area}`,
  );
}

//areaOfTriangle(20,30)
let base1 = "hello";
let heigth1 = true;
areaOfTriangle(base1, heigth1);

/*
senario 1:
  call the areaOfTriangele function dont pass any arguments.<>
  areaOfTriangle()
senario 2:
  call the funciton pass base of 20 and no width
  areaOfTriangle(20) // output
senario 3:
  call the function pass base of 20 and height of 30
  areaOfTriangle(20,30)
senario 4:
  create a variable base1=50 and variable height1=60
  areaOfTriangle(base1,height1)
senario 5:
  create a variable base2="hello" and variable height2=true
  areaOfTriangle(base2,height2)
*/
