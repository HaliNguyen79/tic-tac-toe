import React from "react";

function Square({value, action}) {
  return (
    <button className={"square"} onClick={action}>
      {value}
    </button>
  );
}

export default Square;
