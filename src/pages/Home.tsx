import React from "react";
import UserProvider from "../context/userContext";
import User from "../components/User";
import CarProvider from "../context/carContext";
// import Cars from "../components/Cars";
import Car from "../components/Car";
import TodosProvider from "../context/todosContext";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import Cars from "../components/Cars";


const Home: React.FC = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is the home page of the website.</p>
            <UserProvider>
                <User/>
            </UserProvider>
            {/* <CarProvider>
                <Cars/>
            </CarProvider> */}
            {/* <TodosProvider>
                <main className="App">
                    <h1>My Todos</h1>
                    <AddTodo />
                    <Todos />
                </main>
            </TodosProvider> */}
        </div>
    )
}

export default Home