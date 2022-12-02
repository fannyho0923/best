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
      <Content1 {...props} />
      <Content2 {...props} />
      <Content3 {...props} />
      <Content4 {...props} />
      <Content5 {...props} />
      <Content6 {...props} />
      <Content7 {...props} />
      <Content8 {...props} />
      <Footer {...props} />
      {/* <Box
        className="ml-4 p-1 bg-black"
        sx={{
          width: 300,
          height: 300,
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      /> */}
    </>
  );
}

export default HomePage;

// import * as React from 'react';
// import Box from '@mui/material/Box';

// export default function BoxSx() {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }
