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
<Child2 str={str} amountInNumber={amount} is0k={is0k} notSet={notSet} />
<Child3 str={str} amountInNumber={amount} is0k={is0k} notSet={notSet} />
</div>

) 
}
// display props using prop keyword
function Child1(props) {
    return (
        <div>
            <h1> I am the child 1 component</h1>
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
    );
}
// using destructuring 
function Child2(props) {
    /*
    key:value
    const str-props.str
    const amountInNumber-props.amountInNumber
    const amount-props.amountInNumber
   key:value<>
   key:<string variable naming> "hi boss":34
   const {str, amountInNumber, is0k, notSet} = props;
    */
    const { str, amountInNumber, is0k, notSet } = props;
    return (
        <div>
            <h1> I am the child 2 component</h1>
            <ul>
                <li>
                    Favourite string <b>{str}</b>
                </li>
                <li>
                    Amount <b>{amountInNumber}</b>
                </li>
                <li>
                    isok <b>{is0k}</b>
                </li>
                <li>
                    isok <b>{String(is0k)}</b>{""}
                    {/*
                        for booleans convert them to string before displaying
                    */}
                </li>
                <li>
                    Not set <b>{notSet}</b>
                </li>
            </ul>
        </div>
    );
}
// display props using prop keyword
// direct destructuring
function Child3(props) {
    //const { str, amountInNumber, is0k, notSet } = props;
    return (
        <div>
            <h1> I am the child 3 component</h1>
            <ul>
                <li>
                    Favourite string <b>{str}</b>
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
    );
}


export default Parent;