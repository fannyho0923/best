import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const [language, setLanguage] = useState({
    languageContext: "zh",
  });

  const languageContext = {
    language,
    setLanguage,
  };

  return (
    <Context.Provider
      value={{
        state: language,
        setLanguage: setLanguage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export {
  Context as LanguageContext,
  Provider as LanguageContextProvider,
} from "./languageContext";
