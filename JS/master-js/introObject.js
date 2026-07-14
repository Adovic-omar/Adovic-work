const student = {
name: "John Mwangi",
® age: 34,
parent: {
name: "Maggnus", phone: "2547324324",
"favourite quote": "Backwards Never Forward Ever",
｝，
pet: 0},
34: "Favourite number",
sayMyName: function () {
console.1og("John Mwangi");
},
anounce: function () {alert(" John Mwangi Gracing you with his/her presence ");}
},

/*
create an object. called car. properties: name, model, top_speed engine_information:<object›how many cylinder, number
country
manufacture: object‹> name, aka, country ‹number as property<key>>: any number
alert_info: function that when called prints information of the car as an alert
fun fact: <key>.
is_it_a_classic<property: vaLue<boolen»>
=>optional
=>json<Javascript Object Notation>
Add color of the car as a property 
*/

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