import { createContext, useEffect, useState } from "react";

export const ThemeDarkContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState();

  const getSession = () => {
    setDarkMode(JSON.parse(sessionStorage.getItem("darkMode")));
  };

  const setSession = (value) => {
    sessionStorage.setItem("darkMode", value);
  };

  const checkMode = () => {
    if (darkMode === false) {
      setSession(true);
      getSession();
    } else {
      setSession(false);
      getSession();
    }
  };

  const handleDarkToggle = () => {
    checkMode();
  };

  useEffect(() => {
    if (darkMode === undefined) {
      setSession(false);
    }

    getSession();
  }, [darkMode]);

  return (
    <ThemeDarkContext.Provider
      value={{
        darkMode,
        handleDarkToggle,
      }}
    >
      {children}
    </ThemeDarkContext.Provider>
  );
};

export default ThemeContextProvider;
