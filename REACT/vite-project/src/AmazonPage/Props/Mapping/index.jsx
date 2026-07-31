function Mapping() {
  /*
    The map() function creates a new array by applying a function
    to every element of an existing array.
  */

  const numbers = [2, 6, 23, 565, 32];

  // forEach returns undefined
  let x = numbers.forEach((element) => {
    console.log("Element is", element);
    return "this is n";
  });

  console.log(x);

  // Square each number
  const powersOfNumber = numbers.map((n) => {
    console.log("this is n", n);
    return n * n;
  });

  // Return the same string for every element
  const justMap = numbers.map(() => "cats and dogs");

  console.log(powersOfNumber);
  console.log(justMap);

  const colors = ["green", "yellow", "blue", "black"];

  function singleColor(c, i) {
    if (i === 1) {
      return null;
    }

    return (
      <div key={i}>
        For index <b>{i}</b> color is <b>{c}</b>
      </div>
    );
  }

  return (
    <div>
      <h1>Mapping Colors</h1>

      <h4>Using arrow functions</h4>
      {colors.map((color, index) => {
        return (
          <div key={index}>
            For index <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      <h4>Using direct arrow functions</h4>
      {colors.map((c, i) => (
        <div key={i}>
          For index <b>{i}</b> color is <b>{c}</b>
        </div>
      ))}

      <h4>Using anonymous functions</h4>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            For index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>Using referenced function</h4>
      {colors.map(singleColor)}

      <h4>Using a component</h4>
      {colors.map(function (c, i) {
        return <SingleColorComponent c={c} i={i} key={i} />;
      })}
    </div>
  );
}

function SingleColorComponent(props) {
  const { c, i } = props;

  return (
    <div>
      For index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

export default Mapping;