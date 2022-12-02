import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {

} from 'reactstrap';


const Content8 = ({ lang, locale, setLocale }) => {


  return (
    <Box className="w-full flex bg-[#50d71e] flex flex-col justify-center items-center">
    <Box className=" " style={{
        width: 1240,
        height: 757,
      }}>
      <p><FormattedMessage id="locales.serviceLocations.text" /></p>
     <Box>
        <Box style={{
        width: '100%',
        height: '450px',
        backgroundColor: "gray",
        }}></Box>
        <Box></Box>
     </Box>
     </Box>
    </Box>
  );
};

export default Content8;
