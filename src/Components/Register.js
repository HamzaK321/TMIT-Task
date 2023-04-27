

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from "../FireBase.js";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
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

export default function SignUp() {
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

const handleSubmit=async ()=> {
    if (!values.email || !values.pass|| !values.firstName||!values.lastName) {
        setErrorMsg("Fill all fields");
        return;
      }
      
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.pass);
        
        // Save user's data to Firestore
        const userDocRef = doc(firestore, "users", userCredential.user.uid);

        await setDoc(userDocRef, {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        });
        
        // Log the user in and redirect to home page
        console.log("User created successfully");
        // You can redirect to home page here
      } catch (error) {
        console.error(error);
      }
    }
      

// async function signUp(email, password, displayName) {
//   try {
//     // Create user in Firebase Authentication
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Update user's display name
//     await userCredential.user.updateProfile({
//       displayName: displayName,
//     });

//     // Create user document in Firestore
//     const userDocRef = doc(firestore, "users", userCredential.user.uid);
//     await setDoc(userDocRef, {
//       displayName: displayName,
//       email: email,
//       createdAt: new Date(),
//     });

//     console.log("User signed up successfully!");
//     return userCredential.user;
//   } catch (error) {
//     console.error("Error signing up:", error);
//     throw error;
//   }
// }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const firstName = data.get('firstName');
//     const lastName = data.get('lastName');
//     const email = data.get('email');
//     const password = data.get('password');

//     // Check if required fields are filled
//     if (!firstName) {
//       setFirstNameError(true);
//     } else {
//       setFirstNameError(false);
//     }
//     if (!lastName) {
//       setLastNameError(true);
//     } else {
//       setLastNameError(false);
//     }
//     if (!email) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     if (!password) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }

//     // Submit the form if all required fields are filled
//     if (firstName && lastName && email && password) {
//       console.log({ firstName, lastName, email, password });
//     }
//   };

  const Navigate = useNavigate();


  return (
    <ThemeProvider  theme={theme}>
      <Container component="main" maxWidth="xs" style={{backgroundColor:'white', marginBottom: "1rem"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography onClick={()=>Navigate('/')} component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
}}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, lastName: event.target.value }))
                  }
                autoFocus
                error={firstNameError}
                helperText={firstNameError && 'Please enter your first name'}

            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                // error={lastNameError}
                // helperText={lastNameError && 'Please enter your last name'}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, firstName: event.target.value }))
                  }
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // error={emailError}
                // helperText={emailError && 'Please enter your email'}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                  }
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
            />
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
            />
        </Grid>
    </Grid>
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Sign Up
    </Button>
    <Grid container justifyContent="flex-end">
        <Grid item>
            <Link onClick={()=>Navigate('/')} variant="body2">
                Already have an account? Sign in
            </Link>
        </Grid>
    </Grid>
</Box>

        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}