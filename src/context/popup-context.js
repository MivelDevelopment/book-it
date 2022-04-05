import React, { useState, createContext } from 'react';

const { Provider, Consumer } = createContext();


const PopupContextProvider = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = (e) => {
        const isOverlay = e.target.classList.contains('popup-overlay');
        
        isOverlay ? setIsPopupOpen(false) : setIsPopupOpen(true);
    }
    return (
        <Provider value={{isPopupOpen, setIsPopupOpen, togglePopup}}>
            {children}
        </Provider>
    )
}

export { PopupContextProvider, Consumer as PopupContextConsumer };