const car = 1
name: "Toyota Land Cruiser 300", model: "2024 ZX" color: "Pearl White" top_speed: "210km/h",
2024: "Latest model"
engine_information: {
name: "3.3L V6 Twin-Turbo Diesel (F33A-FTV)", displacement: "3.3L", cylinder: 6,
type: "V6 Twin-Turbo Diesel" power: "227 kW (304 hp)", torque: "700 Nm"
},
country: "Japan",
manufacture: {
name: "Toyota",
aka: "Toyota Motor Corporation", country: "Japan"
fun_fact:
The Toyota Land Cruiser is known for its legendary durability and ability to handle the toughest off-road conditions in the world.
is_it_a_classic: false,
alert_info: function () {
alert('Car: ${car.name}
Model: ${car.model} Color: ${car.color}
Top Speed: ${car.top_speed}
Engine: ${car.engine_information.name}
Cylinders: ${car.engine_information.cylinder}
Manufacturer: ${car.manufacture.name}
Country: ${car.country}');
}; }

console. log( Car datatype ${typeof car}');
console.log(car);
console.log("--using console.log(table)--");
console.table(car);

/*
data types‹object›
1. confirm that you are able to print the object and also its type
*/
// console. Log(" Car datatype $(typeof car}');
// console. log(car);
// console. Log("--using console. Log (table) --");
// console.table(car); //try this
/*
access individual parts of your object.
2 ways of accessing object properties
1. dot notation‹does not work for anything but Looks good›
-does not work for properties which are
-numbers
- string with spaces, starting with a number or special symbols
-can only access properties that follow variable naming rules
2. bracket notation<will work for eveything: Looks>
-*access properties using variables.*
For each property of your object. includes nested ones access it using both dot notation and bracket notation. print the value and also print its type
Hint for nested properties use example. car. manufacture. name or car[ "managurcture"]["name"]
*/
//car and its name using dot notation console.1og('Name is $(car.name} its type is $(typeof car.name}");
//bracket notation
console.log(Name is ${car["name"]) its type is ${typeof car["name"1) );
//car model
console.1og('Model is $(car.model} its type is $(typeof car.model}');
//bracket notation
let v1 = "model";
console. log(Model is $(car[v1]) its type is $(typeof car[v1])");

const car = {
v1: "XLE"
name: "Toyota".

manufacture: "2020"

model: "Corolla"

// Dot notation
console. 10g('Name is ${car.name} its type is ${typeof car.name}"); console.log("Manufacture is ${car.manufacture} its type is ${typeof car. manufacture}"); console. log( Model is ${car.model} its type is ${typeof car.model}'); console. log('Model (v1) is ${car.v1} its type is ${typeof car.v1}');
// Bracket notation
console. log('Name is ${car["name"]} its type is ${typeof car["name"]}'); console. log('Manufacture is ${car["manufacture"]} its type is ${typeof car["manufacture"I}'); console. log('Model is ${car["model"]} its type is ${typeof car["model"]}');
console. log('Model (v1) is ${car["v1"]} its type is ${typeof car["v1"]}');