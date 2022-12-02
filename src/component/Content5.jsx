import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content5 = ({ lang, locale, setLocale }) => {
  return (
    <Box
      className="w-full flex bg-purple-100"
      style={{ padding: "150px 100px" }}
    >
      <Box className="flex flex-col">
        <Box>BEST</Box>
        <Box>節能，減碳，綠色物流</Box>
        <Box>
          <p>
            佰事達重視環境議題，在倉儲和運輸作業中，我們秉持著綠色物流的概念來改善能源消耗以及碳排放，永續發展對佰事達不只是口號，更是我們的責任與信念。
            佰事達的使命 - 追尋屬於地球的最佳方案!
          </p>
        </Box>
        <Box>
          <Button>進一步了解</Button>
        </Box>
      </Box>
      <Box>
        <Box
          className="bg-rose-100"
          style={{ width: "684px", height: "485px", marginBottom: "10px" }}
        ></Box>
        <Box
          className="bg-rose-100"
          style={{ width: "684px", height: "485px" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Content5;
