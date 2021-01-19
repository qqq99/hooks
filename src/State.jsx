import React, { useState } from "react";

function State(props) {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "green" : "red" }}
    >
      useState Example
    </h1>
  );
}

export default State;
