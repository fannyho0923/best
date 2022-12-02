import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import en from "./i18n/en.js";
import zh from "./i18n/zh.js";
import useRWD from './useRWD';

import HomePage from "./containers/HomePage";

const lang = ["zh", "en"];

function App() {
  // 設定語系
  const [locale, setLocale] = useState(navigator.language);
  return (
    <IntlProvider
      {...{ locale }}
      key={locale}
      defaultLocale={"en"}
      messages={(locale.includes("zh") && zh) || en}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage {...{ lang, locale, setLocale }} />}
          />
          <Route path=""></Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
