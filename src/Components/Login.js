
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
import { useDispatch } from 'react-redux';
import { setCurrentUser, setError, clearError } from '../Redux/Reducers/authReducers';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setCurrentUser, setAuthError } from '../Redux/Actions/authActions';
// import { BrowserRouter, NavLink, Routes } from 'react-router-dom';

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { loginSuccess } from "../../src/Redux/Reducers/authReducers";

function Copyright(props) {
  

  return (  
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://triplemsolution.com/">
        Triple M IT Solutions
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
    const [values, setValues] = useState({
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get('email');
//     const password = data.get('password');
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });

  
//     if (!email) {
//         setEmailError(true);
//       } else {
//         setEmailError(false);
//       }
//       if (!password) {
//         setPasswordError(true);
//       } else {
//         setPasswordError(false);
//       }
  
//       // Submit the form if all required fields are filled
//       if (email && password) {
//         console.log({ email, password });
//       }
//   };

const dispatch = useDispatch();
const handleSubmission = async () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );
      // Signed in 
      const user = userCredential.user;

    //   const accessToken = await userCredential.user.getIdToken();
const accessToken = await userCredential.user.getIdToken();
const userEmail = userCredential.user.email;
dispatch(loginSuccess({accessToken: accessToken, userEmail: userEmail}));

      console.log(user);
      Navigate("/payment");


    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorMessage);
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
            <Box component="form" noValidate onSubmit={(e) => {
    e.preventDefault();
    handleSubmission();
}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                // error={emailError}
                // helperText={emailError && 'Please enter your email'}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                  }
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
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
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


