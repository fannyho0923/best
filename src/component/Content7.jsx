import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content7 = ({ lang, locale, setLocale }) => {
  return (
    <Box className="w-full flex bg-[#50d71e] flex flex-col justify-center items-center mb-4">
      <Box
        style={{
          width: 1240,
          // height: 757,
        }}
      >
        <h2 className="m-0">需要協助</h2>
        <h2 className="m-0">佰事達國際化的團隊可為您提供最佳方案。</h2>
        <Box>
          <Box
            className="flex justify-center mx-0"
            style={{
              margin: "10px",
              padding: "60px",
              width: "100%",
              backgroundColor: "pink",
            }}
          >
            <Box className="flex justify-between w-full">
              <Box className="w-2/4">
                <Box className="w-fit">
                  <p>連結達人</p>
                  <p>佰事達的專業團隊隨時準備好為您服務。</p>
                  <Box className="grid grid-rows-3 divide-y">
                    <p>申請報價資訊</p>
                    <p>整合服務方案</p>
                    <p>回答您的問題</p>
                  </Box>
                  <Button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "0px",
                      gap: "27px",
                      width: "159px",
                      height: " 24px",
                    }}
                  >
                    立即聯繫達人
                  </Button>
                </Box>
              </Box>
              <Box className="w-2/4">
                <Box className="w-full h-full bg-current"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content7;
