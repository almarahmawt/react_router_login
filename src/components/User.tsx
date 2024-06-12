import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const User: React.FC = () => {
    const user : any = useContext(UserContext);
    return (
        <>
            <p>{user.name}</p>
        </>
    )
}

export default User;