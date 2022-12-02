import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content3 = ({ lang, locale, setLocale }) => {
  return (
    <Box
      className="w-full flex bg-purple-100"
      style={{ padding: "150px 340px" }}
    >
      <Box className="flex flex-col" style={{ marginRight: "100px" }}>
        <Box>從物流到商流的速配推手</Box>
        <Box>BEST</Box>
        <Box>
          <p>無論是物流規劃、代理營銷，佰事達都會是您的最佳方案。</p>
        </Box>
        <Box>
          <Button>進一步了解</Button>
        </Box>
      </Box>
      <Box className="flex">
        <Box
          className="bg-rose-100"
          style={{ width: "375px", height: "480px", marginRight: "10px" }}
        ></Box>
        <Box
          className="bg-rose-100"
          style={{ width: "375px", height: "480px" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Content3;
