import React, { useRef, useState } from "react";

export default function Input() {
  const refElement = useRef(" ");
  const [name, setName] = useState("Abhinev");
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "green";
  }
  return (
    <>
      <h1> Hi,Abhinev this side</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle input </button>
    </>
  );
}