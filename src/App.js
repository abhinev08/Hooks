import { useState, useEffect, useRef } from "react";
import Track from "./components/Track";
import Input from "./components/Input";
import Click from "./components/Click";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log( count.current)
  });

  return (
    <>
    <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
    <h1>Render Count: {count.current}</h1>
    <Track />
    <Input />
    <Click />
    </>
  );
}
export default App;