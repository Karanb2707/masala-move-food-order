import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [userName, setUserName] = useState('Guest');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {props.children}
        </UserContext.Provider>
    )
}