  interface ContextProps {
    children: ReactNode;
  }

  type UserContextType = {
    user: any;
  };

  type CarContextType = {
    cars: any;
  };

  interface ICar {
    id: number;
    plate: string,
    manufacture: string,
    model: string,
    image: string,
    rent_per_day: number,
    capacity: number,
    description: string,
    available: boolean,
    available_at: date,
    transmission: string,
    type: string,
    year: string
  }

  interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
  
  type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
  };
  