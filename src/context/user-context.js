import React, { useState, createContext } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [signedInUser, setSignedInUser] = useState('johndoe@gmail.com');

    return (
        <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };