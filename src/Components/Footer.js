// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="#FFFFFF">
//       {'Copyright © '}
//       <Link color="#FFFFFF" href="https://triplemsolution.com/">
//         Triple M IT Solutions
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function StickyFooter() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       <CssBaseline />

//       <Box
//         component="footer"
//         sx={{
//           py: 1,
          
//           mt: 'auto',
//           backgroundColor: '#4b578d'
//         }}
//       >
//         <Container maxWidth="sm">
//           <Typography variant="body1" style={{color:"white"}}>
//             TripleMSolution
//           </Typography>
//           <Copyright  />
//         </Container>
//       </Box>
//     </Box>
//   );
// }

export default function StickyFooter(){

    return(
        <div className="footer">
  <p style={{marginBottom:-5}}>We Build and Refine Smart Websites</p> <br/>
  <a href="https://triplemsolution.com" style={{color:'white'}}>Copyright © at TripleMSolution</a>
  <span>   { new Date().getUTCFullYear} </span>
  
</div>
    )
}