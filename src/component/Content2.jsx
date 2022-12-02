import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content2 = ({ lang, locale, setLocale }) => {
  return (
    <Box
      className="w-full flex flex-col bg-slate-100"
      style={{
        padding: "0 340px 150px 240px",
      }}
    >
      <Box className="flex flex-col">
        <Box className="w-full flex justify-between">
          <Box className="bg-current order-1 w-2/4" style={{ height: "295px" }}>
            111
          </Box>
          <Box
            className={`flex justify-center items-center ${
              true ? "order-1" : "order-2"
            } w-2/4`}
          >
            <Box className="flex flex-col br-rose-400">
              <Box>-----</Box>
              <Box style={{ fontWeight: "700", fontSize: "38px" }}>
                BEST 是什麼？
              </Box>
              <Box style={{ fontWeight: "500", fontSize: "22px" }}>
                是為夥伴找到最佳方案。
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="w-full flex justify-between"
          style={{ marginBottom: "200px" }}
        >
          <Box
            className={`flex justify-center items-center ${
              true ? "order-1" : "order-2"
            } w-2/4`}
          >
            <Box className="flex flex-col br-rose-400">
              <Box
                style={{
                  fontWeight: "500",
                  fontSize: "26px",
                  color: "#717171",
                }}
              >
                “成功不會只有一個人，BEST 不是獨好而是共好。”
              </Box>
            </Box>
          </Box>
          <Box className="bg-current order-1 w-2/4" style={{ height: "295px" }}>
            111
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content2;
