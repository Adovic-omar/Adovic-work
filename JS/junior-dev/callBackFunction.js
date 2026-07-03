/*
- >Our own callback function
-›doing shape stuff
-----› shapes.
circle -›
rectangle-› triangle->
1. for each of the shapes create a funciton‹arrow, name> to calculate the are. ensure the function takes required parameters.
test the function
*/

// Circle
const circleArea = (radius) => 3.142 * radius * radius;

// Rectangle
const rectangleArea = (length, width) => length * width;

// Triangle
const triangleArea = (base, height) => 0.5 * base * height;

// Test the functions
console.log("Circle Area:", circleArea(7));
console.log("Rectangle Area:", rectangleArea(10, 5));
console.log("Triangle Area:", triangleArea(8, 6));

/*
-›Our own callback function
-›doing shape stuff
-----›shapes.
circle -> rectangle-> triangle->
1. for each of the shapes create a funciton‹arrow, name> to calculate the area. ensure the function takes required parameters. test the function
2. we are create a super function called shape. its going to take the following params @param1=>function ‹correct shape› required @param2=>shape name‹string>
@param3=>s1 ‹required› @param4=>s2<optional›
@param5=>s3<optional›
1. inside your function shape.
console each of the parameters and theier types.
2. for each of your function ie for areacircle, areRectangle, and areaTriangle
call the shape function and pass the required params. example for areaCircle
• -shape(areaCircle, "Circle".
, 10) -> for areCircle. test make observation
-shape (areaRectangle, "Rectangle", 10, 5) -> for areCircle. test make observ
*/

// Area of a circle
const areaCircle = (radius) => 3.142 * radius * radius;

// Area of a rectangle
const areaRectangle = (length, width) => length * width;

// Super function
const shape = (shapeFunction, shapeName, s1, s2) => {
  console.log("Shape Name:", shapeName);
  console.log("Function:", typeof shapeFunction);
  console.log("s1:", s1, "-", typeof s1);
  console.log("s2:", s2, "-", typeof s2);

  const area = shapeFunction(s1, s2);

  console.log("Area =", area);
  console.log("-------------------");
};

// Test
shape(areaCircle, "Circle", 10);

shape(areaRectangle, "Rectangle", 10, 5);


triangle->
1. for each of the shapes create a funciton<arrow, name› to calculate the area. ensure the function takes required parameters. test the function
2. we are create a super function called shape. its going to take the following params @param1=> function ‹correct shape› required @param2=> shape name‹string›
@param3=>s1 ‹required› @param4=>s2<optional> @param5=>s3<optional›
1. inside your function shape.
console each of the parameters and theier types.
2. for each of your function ie for areacircle, areRectangle, and areaTriangle
call the shape function and pass the required params. example for areacircle
-shape (areacircle, "Circle", 10) -> for arecircle. test make observation
-shape(areaRectangle, "Rectangle", 10,5) -> for areCircle. test make observation
3. inside your shape function. create a result variable
equate it to the funciton call of @param1 and pass @param3, @param4, @param5 example
result=@param1(param3, param4, param5)
4. Console. Log the shap name and the result console. Log for shape ${@param2} area is $(result}) for each shape call it Like step 2 and see the result.
-shape (areacircle, "Circle", 10) -> for arecircle. test make observation
- shape (areaRectangle, "Rectangle"
10,5) -> for arecircle. test make observation
*/
const areaCircle = (radius) = 3.142 * radius * radius;
areaRectangle = (length, width) => length * width;
areaTriangle = (base, height) = 0.5 * base * height;
//
function shape(shapeFunction, shapeName, sidel, side, side) {
console.10g(" ShapeFunction ${shapeFunction} its a ${typeof shapeFunction}"); console.log(" shapeName ${shapeName) its a $(typeof shapeName}"); console.log(" side1 ${side1) its a $(typeof side1)');
console.1og(" side2 $(side2) its a $(typeof side2}');
console.10g(" side3 ${side3) its a $(typeof side3});
｝
/* for area circler*/

// Area functions
const areaCircle = (radius) => 3.142 * radius * radius;

const areaRectangle = (length, width) => length * width;

const areaTriangle = (base, height) => 0.5 * base * height;


// Super function
function shape(shapeFunction, shapeName, side1, side2, side3) {
  // Print parameters and their types
  console.log("shapeFunction:", typeof shapeFunction);
  console.log("shapeName:", shapeName, "-", typeof shapeName);
  console.log("side1:", side1, "-", typeof side1);
  console.log("side2:", side2, "-", typeof side2);
  console.log("side3:", side3, "-", typeof side3);

  // Call the correct area function
  const result = shapeFunction(side1, side2, side3);

  // Print result
  console.log(`The area of ${shapeName} is ${result}`);
  console.log("---------------------------");
}


// Test each function
shape(areaCircle, "Circle", 10);

shape(areaRectangle, "Rectangle", 10, 5);

shape(areaTriangle, "Triangle", 10, 6);
