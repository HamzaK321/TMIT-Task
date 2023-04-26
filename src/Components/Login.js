// import React, { useState } from 'react';
// // import firebase from 'firebase/app';
// // import 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';
// import { BrowserRouter, NavLink, Routes } from 'react-router-dom';



// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Authenticate user with email and password
//   };


//   const Navigate = useNavigate();



// // // ...

// // firebase.auth().signInWithEmailAndPassword(email, password)
// //   .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ...
// //   });

//   return (
//     <div className='LoginMasterDiv'>
//     <div className='parentDiv'>
    
//     <form onSubmit={handleSubmit}  className='loginMainDiv'>
        
//         <div className='innerLoginDiv'>
//         <h3 style={{color:'white',   textShadow: '2px 2px 4px #000000'}}>Login Form</h3>
//       <label>
//        <span style={{color:'white', fontWeight:'bold',textShadow: '2px 2px 4px #000000'}}>Email</span> 
//        <br/>
//         <input className='inputField' type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <label>
//         <br/>
//         <span style={{color:'white', fontWeight:'bold' ,textShadow: '2px 2px 4px #000000'}}>Password</span> 
//        <br/>
//         <input className='inputField' type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br/>
//       <button type="submit" className='btn'>Login</button>
//     <p type='submit' onClick={()=>Navigate('/register')} className='btn3' style={{color:'blue', fontWeight:'bold', cursor:'pointer'}} >Not a User? Register here!</p>
//     </div>
//     </form>
    
    
//     </div>
//     </div>
//   );
// };

// export default LoginForm;




import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter, NavLink, Routes } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
   

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

  
    if (!email) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (!password) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
  
      // Submit the form if all required fields are filled
      if (email && password) {
        console.log({ email, password });
      }
  };


  

  const Navigate = useNavigate();


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp6819375.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError}
                helperText={emailError && 'Please enter your email'}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                  helperText={passwordError && 'Please enter your email'}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={()=>Navigate('/register')} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


