import "./App.css";
import { Carousel } from "./components/Carousel";

import { slides } from "./data/api.json";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
    {/* // <div className="App">
    //   <Carousel data={slides} />
    // </div> */}
    <>
      <h1 style={{color: color}}>My favorite color is <span>{color}</span>!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
    </>
  );
}

export default App;