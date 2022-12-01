import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box
    className='ml-4 p-1 bg-black'
      sx={{
        width: 300,
        height: 300,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
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
