import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content6 = ({ lang, locale, setLocale }) => {
  return (
    <Box
      className="w-full flex flex-col bg-[#13181E]"
      style={{ paddingTop: "250px", paddingBottom: "250px" }}
    >
      <Box
        className="flex justify-center items-center"
        style={{ marginBottom: "100px" }}
      >
        <p style={{ fontWeight: "700", fontSize: "56px" }}>
          我們對於社會與客戶的承諾
        </p>
      </Box>
      <Box className="flex flex-col">
        <Box
          className="w-full flex justify-between"
          style={{ marginBottom: "200px" }}
        >
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
                BEST 準備好了
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
              <Box>-----</Box>
              <Box style={{ fontWeight: "700", fontSize: "38px" }}>
                BEST 相信
                <br />
                秉持誠信才能創造價值
              </Box>
            </Box>
          </Box>
          <Box className="bg-current order-1 w-2/4" style={{ height: "295px" }}>
            111
          </Box>
        </Box>

        <Box className="w-full flex justify-between">
          <Box className="bg-current order-1 w-2/4" style={{ height: "295px" }}>
            333
          </Box>
          <Box
            className={`flex justify-center  items-center ${
              true ? "order-1" : "order-2"
            } w-2/4`}
          >
            <Box className="flex flex-col br-rose-400">
              <Box>-----</Box>
              <Box style={{ fontWeight: "700", fontSize: "38px" }}>
                BEST 提供最佳方案
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content6;
