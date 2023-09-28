import "./index.css";
import Color from "./components/Color";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState("");

  console.log(clicked);

  let styles = {
    width: "100px",
    height: "100px",
    backgroundColor: clicked,
    borderRadius: "50%",
  };

  return (
    <div className="App">
      <Color color="blue" setClicked={setClicked} />
      <Color color="red" setClicked={setClicked} />
      <Color color="green" setClicked={setClicked} />
      <Color color="yellow" setClicked={setClicked} />

      <h1></h1>

      <div className="ball" style={styles}></div>
    </div>
  );
}

export default App;
