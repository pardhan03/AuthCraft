import { StyleSheet, Text, View } from "react-native";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

type AppContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const defaultValue = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteContext;

const styles = StyleSheet.create({});
