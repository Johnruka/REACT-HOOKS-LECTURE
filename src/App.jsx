import React from "react";
import ToggleButton from "./components/ToggleButton";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <TodoList />
      <ToggleButton />
    </>
  );
};

export default App;