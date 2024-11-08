
import React, { useState } from "react";
import Context from "./Declare";
const ContextProvider = ({ children }) => {
    const [isDark, setDark] = useState(false);

    const toggle = () => {
        setDark(prevMode => !prevMode);
    };

    return (
        <Context.Provider value={{ isDark, toggle }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
