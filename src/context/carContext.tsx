import { createContext } from "react";

export const CarContext = createContext<CarContextType | null>(null)

const CarProvider : React.FC<ContextProps> = ({children}) => {
    const cars : any = [{
        id : 123,
        manufacture : "abc",
        model : "abc 123",
        plate : "ax123"
    }]

    console.log(cars)

    return(
        <CarContext.Provider value={cars}>
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;