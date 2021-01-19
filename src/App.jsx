import React from "react";
import State from "./State";
import Effect from "./Effect";
import Effect2 from "./Effect2";
function App(props) {
  return (
    <div>
      <State />
      <hr />
      <Effect />
      <hr />
      <Effect2 />
    </div>
  );
}

export default App;
