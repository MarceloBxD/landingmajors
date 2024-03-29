"use client";

import { createContext, useContext } from "react";

interface MainContextType {}

const AppContext = createContext<MainContextType | undefined>({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useMainContext = () => {
  return useContext(AppContext);
};
