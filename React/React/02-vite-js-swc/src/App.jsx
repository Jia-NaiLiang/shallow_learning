import React from "react";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { id: "react", className: "title", style: { color: "Blue" } },
      "Hello React"
    ),
    <h1 id="jsx" className="title" style={{ color: "green" }}>
      Hello JSX
    </h1>
  );
}

export default App;
