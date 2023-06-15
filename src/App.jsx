import React, { useRef, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import "./App.css";

function App() {
  const countRef = useRef("");
  const wordRef = useRef("");

  const [words, setWords] = useState([]);

  const btnGenerate = () => {
    const counts = parseInt(countRef.current.value);
    const generatedWord = wordRef.current.value;
    const newWords = Array.from({ length: counts }).map((i, index) => ({ index, element: generatedWord}));
    
    setWords(newWords);
  };

  return (
    <div>
      <div className="inputs">
        <InputField type="number" placeholder="Input Count" inputRef={countRef} className="count" />
        <InputField type="text" placeholder="Input word" inputRef={wordRef} />
        <Button label="Generate" click={btnGenerate} />
      </div>
      {
      words.map(({ index, element }) => (
        <div className="result" key={index}>
          <div className="IndexNumber">{index}</div>
          <div className="GeneratedInputWord">{element}</div>
        </div>
      ))
      }
    </div>
  );
}

export default App;
