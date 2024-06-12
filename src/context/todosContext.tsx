import * as React from "react";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<ContextProps> = ({ children }) => {
  // Menyimpan state todos kita
  // semua data yang kita tulis akan tersimpan disini
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
      description: todo.description,
      status: false
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.forEach((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    // Setiap fungsi yang di expor ke dalam value={}
    // akan tersedia saat kita menggunakan provider
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
