import { createStore } from "redux";
// 1.store
const store = createStore(reducer);

// 2.reducer (pure function)
function reducer(state = { value: 0 }, action) {
  // calculate new state
  switch (action.type) {
    case "counter/increment":
      return { value: state.value + 1 };
    case "counter/decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

console.log(store);
console.log(store.getState());

store.subscribe(() => console.log("Updated successfully."));

// 3.dispatch action
store.dispatch({ type: "counter/increment" });
console.log(store.getState());
store.dispatch({ type: "counter/increment" });
store.dispatch({ type: "counter/decrement" });
console.log(store.getState());
