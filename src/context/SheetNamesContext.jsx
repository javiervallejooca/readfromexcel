import { createContext, useEffect, useState } from "react";

export const SheetNamesContext = createContext();

export const SheetNamesProvider = ({ children }) => {
  const [months, setMonths] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <SheetNamesContext.Provider
      value={{ months, setMonths, selectedFile, setSelectedFile }}
    >
      {children}
    </SheetNamesContext.Provider>
  );
};
