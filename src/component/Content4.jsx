import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content4 = ({ lang, locale, setLocale }) => {
  return (
    <Box
      className="w-full flex-col justify-center bg-[#171C23]"
      style={{ paddingTop: "150px", paddingBottom: "150px" }}
    >
      <Box className="w-fit">
        <Box
          style={{ fontWeight: "700", fontSize: "56px", marginBottom: "100px" }}
        >
          <span className="text-white">整合</span>
          <span className="text-[#C70E39]">方案與服務</span>
        </Box>
        <Box className="w-fit ml-0 mr-0">
          <Box
            className="grid grid-cols-3"
            style={{
              gap: "10px",
              justifyContent: "space-evenly",
              justifyItems: "center",
              alignContent: " space-evenly",
              alignItems: "center",
            }}
          >
            <Box
              className="display justify-center items-center"
              style={{
                width: "406px",
                height: "230px",
                backgroundColor: "#C70E39",
              }}
            >
              <Box>icon</Box>
              <Box className="text-white">品牌代理</Box>
            </Box>
            <Box
              style={{
                width: "406px",
                height: "230px",
                backgroundColor: "#C70E39",
              }}
            >
              <Box>icon</Box>
              <Box className="text-white">物流中心</Box>
            </Box>
            <Box
              style={{
                width: "406px",
                height: "230px",
                backgroundColor: "#C70E39",
              }}
            >
              <Box>icon</Box>
              <Box className="text-white">配送服務</Box>
            </Box>
            <Box
              style={{
                width: "406px",
                height: "230px",
                backgroundColor: "#C70E39",
              }}
            >
              <Box>icon</Box>
              <Box className="text-white">客製化服務</Box>
            </Box>
            <Box
              style={{
                width: "406px",
                height: "230px",
                backgroundColor: "#C70E39",
              }}
            >
              <Box>icon</Box>
              <Box className="text-white">客製化服務</Box>
            </Box>
            <Box
              style={{
                width: "406px",
                height: "230px",
                backgroundColor: "#C70E39",
              }}
            >
              {" "}
              <Box>進一步了解我們的方案與服務</Box>
              <Box className="text-white">
                <Box>商流服務</Box>
                <Box>立即聯繫達人</Box>
                <Box>物流服務</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content4;
