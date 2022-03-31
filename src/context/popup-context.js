import React, { createContext, useState } from 'react';

const { Provider, Consumer } = createContext();


const PopupContextProvider = ({ children }) => {
    const [popupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(popupOpen => !popupOpen);
    }
    return (
        <Provider value={{popupOpen, togglePopup}}>
            {children}
        </Provider>
    )
}

export { PopupContextProvider, Consumer as PopupContextConsumer };