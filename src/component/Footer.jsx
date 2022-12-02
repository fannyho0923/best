import React, { useContext, useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
// import { LanguageContext } from "../helper/Language/LanguageContext";

const Footer = ({ lang, locale, setLocale }) => {
  //   const langContext = useContext(WalLanguageContextletContext);
  //   const lang = langContext.state.LanguageContext;
  //   const setLang = walletContext.setLanguage;
  return (
    <Box
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      <Box>BEST</Box>
      <Box>
        <Box>
          <p>
            <FormattedMessage id="locales.taiwan.text" />
          </p>
          <p>pippa@bestlog.com.tw</p>
        </Box>
        <Box>
          <p>美國</p>
          <p>+1-408-940-0036</p>
          <p>rita_beckman@bestlog.com.tw</p>
        </Box>
      </Box>
      <Box>
        <Box>關於我們</Box>
        <Box>願景</Box>
        <Box>使命</Box>
        <Box>經營團隊</Box>
      </Box>
      <Box>
        <p>佰事達物流股份有限公司著作權所有 © 2022</p>
        <p>隱私權政策</p>
        <p>中文</p>
      </Box>
      <Box>
        <Box>聯絡我們</Box>
        <Box>聯繫達人</Box>
        <Box>營運據點</Box>
        <Box>人才招募 (1111 人力銀行)</Box>
      </Box>
    </Box>
  );
};

export default Footer;
