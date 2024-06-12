import React from "react";
import UserProvider from "../context/userContext";
import User from "../components/User";

const About: React.FC = () => {
    return (
        <div>
            <h1>About page</h1>
            <p>This is the About page of the website.</p>
            <UserProvider>
                <User/>
            </UserProvider>
        </div>
    )
}

export default About