import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList"
import MainFields from "./Components/MainFields"

const App: React.FC = () => {
  return (
    <div className="app">
      <MainFields />
      <TodoList />
    </div>
  );
};

export default App;
