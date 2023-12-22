import React, { createContext, useContext, useState, ReactNode } from "react";

type voidFC = () => void;

interface StateContextProps {
  handleShowLevelsTitles: voidFC;
  ShowLevelsTitles: boolean;
  handleLevel: voidFC;
  level: number;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [ShowLevelsTitles, setShowLevelsTitles] = useState(true);
  const [level, setLevel] = useState(1);

  const handleLevel = () => {
    setLevel(level + 1);
  };

  const handleShowLevelsTitles = () => {
    setShowLevelsTitles(!ShowLevelsTitles);
  };

  const contextValue: StateContextProps = {
    ShowLevelsTitles,
    handleShowLevelsTitles,
    level,
    handleLevel,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }
  return context;
};
