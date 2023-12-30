function App() {
  return (
    <div>
      <TodoListItem>Item</TodoListItem>
    </div>
  );
}

function TodoListItem({ children, isComplete }) {
  return (
    <>
      <label htmlFor={children}>{children}</label>
      <input type="checkbox" name={children} checked={isComplete} />
    </>
  );
}

export default App;
