import { createContext, useState } from "react";
export const UniversalContext = createContext(null);
export const UniversalProvider = ({ children }) => {
    const [selectedTopics, setSelectedTopics] = useState([]);
    return (<UniversalContext.Provider value={{ selectedTopics, setSelectedTopics }}>
      {children}
    </UniversalContext.Provider>);
};
