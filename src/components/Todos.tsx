import * as React from "react";

import { TodoContext } from "../context/todosContext";
import Todo from "../components/Todo";

const Todos = () => {
  // Ini didapatkan dari props <TodoProvider value={{...}} />
  const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
