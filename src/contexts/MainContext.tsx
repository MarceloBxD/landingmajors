"use client";

import { createContext, useContext } from "react";

interface layoutInitialState {
  layout: {
    isDesktop: boolean;
    isMobile: boolean;
  };
}

interface MainContextType {
  state: layoutInitialState;
  dispatch: React.Dispatch<any>;
}

const AppContext = createContext({} as MainContextType);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    state: {
      layout: {
        isDesktop: window.innerWidth > 768,
        isMobile: window.innerWidth <= 768,
      },
    },
    dispatch: () => null,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useMainContext = () => {
  return useContext(AppContext);
};
