import { useState } from "react";

const ARRAY = ["A", "B", "C"];

function UseState() {
  const [array, setArray] = useState(ARRAY);
  const [inputValue, setInputValue] = useState("");

  function handleRemoveHead() {
    setArray((currentArr) => currentArr.slice(1));
  }

  function handleRemoveTail() {
    setArray((currentArr) => currentArr.slice(0, -1));
  }

  function handleRemoveElement(el) {
    setArray((currentArr) => currentArr.filter((element) => el !== element));
  }

  function handleAddElementToHead(el) {
    setArray((currentArr) => {
      return [el, ...currentArr];
    });
  }

  function handleAddElementToTail(el) {
    setArray((currentArr) => {
      return [...currentArr, el];
    });
  }

  function handleClear() {
    setArray([]);
  }

  function handleReset() {
    setArray([...ARRAY]);
  }

  function handleConvert(from, to) {
    setArray((currentArr) =>
      currentArr.map((element) => {
        if (element === from) return to;
        return element;
      })
    );
  }

  function handleInsert(el, index) {
    setArray((currentArr) => {
      return [...currentArr.slice(0, index), el, ...currentArr.slice(index)];
    });
  }

  function handleAddInput() {
    setArray((currentArr) => {
      return [...currentArr, inputValue];
    });
    setInputValue("");
  }

  return (
    <div>
      <button onClick={handleRemoveHead}>Remove first element</button>
      <br />
      <button onClick={handleRemoveTail}>Remove last element</button>
      <br />
      <button onClick={() => handleRemoveElement("B")}>
        {"Remove All B's"}
      </button>
      <br />
      <button onClick={() => handleAddElementToHead("A")}>Add to head</button>
      <br />
      <button onClick={() => handleAddElementToTail("C")}>Add to tail</button>
      <br />
      <button onClick={handleClear}>Clear</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <button onClick={() => handleConvert("A", "S")}>A to S</button>
      <br />
      <button onClick={() => handleInsert("X", 2)}>Insert X at 2</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddInput}>Add input to tail</button>

      <p>{array.join(", ")}</p>
    </div>
  );
}

export default UseState;
