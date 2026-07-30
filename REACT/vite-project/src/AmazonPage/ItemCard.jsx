function ItemCard() {
  const description = 
  "a classic, high-intensity cardio tool that improves agility, burns calories, and builds lower-body strength.Key equipment choices, proper forms, and core techniques will help you maximize your workouts.";
  const amount = "KES 2,000";
  
  //react application:primitive datatyoes:<string, number, boolean>
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "2px solid rgba(0,0,0,0.2)",
        padding: "2px 4px 20px 4px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img width={"200px"} 
        src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL320_.jpg" />
      </div>
      <div style={{ textAlign: "left", fontSize: "10px" }}>{description}{amount}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            border: "2px solid rgba(0,0,0,0.1)",
            padding: "2px 4px 2px 4px",
            color: "white",
            backgroundColor: "orange",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
