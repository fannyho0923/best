import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content8 = ({ lang, locale, setLocale }) => {
  return (
    <Box className="w-full flex bg-[#50d71e] flex flex-col justify-center items-center">
      <Box
        style={{
          width: 1240,
          // height: 757,
        }}
      >
        <h2 className="m-0">
          <FormattedMessage id="locales.serviceLocations.text" />
        </h2>
        <Box>
          <Box
            className="flex"
            style={{
              marginTop: 50,
              width: "100%",
              height: "450px",
              backgroundColor: "gray",
            }}
          ></Box>
          <Box
            className="flex justify-center mx-0"
            style={{
              margin: "10px",
              padding: "60px",
              width: "100%",
              height: "297px",
              backgroundColor: "#F2F3F3",
            }}
          >
            <Box className="grid grid-cols-3 divide-x">
              <Box
                style={{
                  width: "292px",
                  borderRight: "solid 2px gray6",
                }}
              >
                <Box
                  style={{
                    width: "288px",
                  }}
                >
                  <p>台灣</p>
                  <p>pippa@bestlog.com.tw (李小姐)</p>
                  <p>
                    總部、台北辦公室、平鎮辦公室、忠富倉、台中轉運站、高雄轉運站
                  </p>
                </Box>
              </Box>
              <Box
                style={{
                  width: "292px",
                  borderRight: "solid 2px gray6",
                }}
              >
                <Box
                  className="pl-2"
                  style={{
                    width: "288px",
                  }}
                >
                  <p>美國</p>
                  <p>+1-408-940-0036 (Miss Rita)</p>
                  <p>
                    Best USA Logistics Inc. 675 Sycamore Drive, STE 150
                    Milpitas, CA 95035
                  </p>
                </Box>
              </Box>
              <Box
                style={{
                  width: "292px",
                  borderRight: "solid 2px gray6",
                }}
              >
                <Box
                  className="pl-2"
                  style={{
                    width: "288px",
                  }}
                >
                  <p>台灣</p>
                  <p>5 個服務據點</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content8;
