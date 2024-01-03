import { useState } from "react";
import UseEffect from "../usehooks/UseEffect";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggle() {
    setIsVisible((currentValue) => !currentValue);
  }

  return (
    <div>
      <button onClick={handleToggle}>show/hide</button>
      {isVisible && <UseEffect />}
    </div>
  );
}

export default Toggle;
