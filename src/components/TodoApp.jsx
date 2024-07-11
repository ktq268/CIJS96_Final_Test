import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import FilterButtons from "./FilterButtons";
import useTodos from "../hook/useTodo.jsx";

function TodoApp() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteAllCompleted,
    filter,
    setFilter,
  } = useTodos();

  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
      {filter === "completed" && (
        <button onClick={deleteAllCompleted}>delete all</button>
      )}
    </div>
  );
}

export default TodoApp;
