import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider : React.FC<ContextProps> = ({children}) => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState<any>([])

    const getUser = async() => {
        const response = await fetch("http://localhost:8000/api/v1/whoami", {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        });

        const data = await response.json();
        console.log(data)
        setUser(data)
    }    

    useEffect(()=>{
        getUser();
    },[])

    // const user : any = {
    //     nama : "Alma Rahmawati"
    // }

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;