import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {} from "reactstrap";

const Content8 = () => {
  return (
    <Box className="w-full flex bg-[#F1F5F9] flex flex-col justify-center items-center">
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
                  <p>
                    <FormattedMessage id="locales.taiwan.text" />
                  </p>
                  <p>
                    <FormattedMessage id="locales.LiAddress.text" />
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
                  <p>
                    <FormattedMessage id="locales.us.text" />
                  </p>
                  <p>
                    <FormattedMessage id="locales.RitaPhone.text" />
                  </p>
                  <p>
                    <FormattedMessage id="locales.RitaLiAddress.text" />
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
                  <p>
                    <FormattedMessage id="locales.detailsLocations.text" />
                  </p>
                  <p>
                    <FormattedMessage id="locales.locationCount.text" />
                  </p>
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
