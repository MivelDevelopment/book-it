import React, { useState, createContext } from 'react';

const PopupContext = createContext();


const PopupContextProvider = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = (e) => {
        const isOverlay = e.target.classList.contains('popup-overlay');
        isOverlay ? setIsPopupOpen(false) : setIsPopupOpen(true);
    }
    
    return (
        <PopupContext.Provider value={{isPopupOpen, setIsPopupOpen, togglePopup}}>
            {children}
        </PopupContext.Provider>
    )
}

export { PopupContextProvider, PopupContext };