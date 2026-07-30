/*
 Components are functions.
 input-›output
 input‹data›-›output is ur

2. Create reusable components you need an
  understanding of props.
  properties.

3. Each component you create in react
    will always have props

4. Props are passed from parent to child
   -> all data types can be passed into props
       including other components
/*
*/
function Parent() {
//primitive datatypes
const str = "Hello world"; ///string
const amount = 2000; //number
const isok = true; //boolean
const notSet = null; //null

return ( 
<div>
<h1> I am the parent component</h1>
<Child1 str={str} amountInNumber={amount} is0k={is0k} notSet={notSet} />
</div>

) 
}
// display props using prop keyword function Child1(props) 
function Child1(props) {
console.log (props);
return (
  <div>
  <h1> I am the child component</h1>
  <ul>
    <li>
Favourite string <b>{props.str}</b>
</li>
    <li>
Amount <b>{props.amountInNumber}</b>
</li>
    <li>
isok <b>{props.is0k}</b>
</li>
    <li>
isok <b>{String(props.isOk)}</b>{""}
{/*
for booleans convert them to string before displaying
*/}
</li>
<li>
    Not set <b>{props.notSet}</b>
</li>
  </ul>
</div>
   ),
}

export default Parent;