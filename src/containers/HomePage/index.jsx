/* eslint-disable */
import React from "react";

import { Box } from "@mui/material";
import Header from "../../component/Header";
import Content1 from "../../component/Content1";
import Content2 from "../../component/Content2";
import Content3 from "../../component/Content3";
import Content4 from "../../component/Content4";
import Content5 from "../../component/Content5";
import Content6 from "../../component/Content6";
import Content7 from "../../component/Content7";
import Content8 from "../../component/Content8";
import Footer from "../../component/Footer";

function HomePage(props) {
  return (
    <>
      <Header {...props} />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Footer />
    </>
  );
}

export default HomePage;
