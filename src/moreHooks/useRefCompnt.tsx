import React from "react";

function UseRefCompnt() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <h3>useRef compoment</h3>
      <input type="text" name="email" id="emailInput" ref={inputRef} />
    </div>
  );
}

export default UseRefCompnt;
