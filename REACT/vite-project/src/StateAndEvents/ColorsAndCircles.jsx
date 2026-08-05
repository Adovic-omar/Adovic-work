import { useState } from "react";

/*
how to pass state to other components. 
update the state if they. 
props and state.
*/
/*Task1. 
1.Move the color and set color state inside the Colorform. <increase performance>
to see the before and after.
console. log("<component name>", new Date()); I/for each component
2. Add a button on single color to remove the color. remove colors
hint: [perform a state update]
*/

import { useState } from "react";

function ColorsCircles() {
  const [colors, setColors] = useState([]);

  console.log("ColorsCircles render", new Date());

  return (
    <div>
      <ColorForm setColors={setColors} colors={colors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { colors, setColors } = props;

  // State moved here
  const [color, setColor] = useState("");

  console.log("ColorForm render", new Date());

  const onSubmit = () => {
    if (!color.trim()) return;

    setColors([...colors, color]);
    setColor("");
  };

  return (
    <div>
      <label>Enter Color</label>
      <br />

      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;

  console.log("ColorList render", new Date());

  const removeColor = (indexToRemove) => {
    setColors(colors.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{color}</span>

          <button onClick={() => removeColor(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;
