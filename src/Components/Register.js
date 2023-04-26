// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';




// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Register user with name, email, password, and address
//   };

//   const Navigate= useNavigate();

//   return (
//     <div className='LoginMasterDiv'>
//     <div className='parentDiv'>
//     <form onSubmit={handleSubmit}  className='loginMainDiv'>

//     <div className='innerLoginDiv'>
//     <h3 style={{color:'white', textShadow: '2px 2px 4px #000000'}}>Registeration Form</h3>
//       <label>
//       <span style={{color:'white', fontWeight:'bold', textShadow: '2px 2px 4px #000000'}}>Name</span> <br/>
//         <input  className='inputField' type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <br/>

//       <label>
//       <span style={{color:'white', fontWeight:'bold', textShadow: '2px 2px 4px #000000'}}>Email</span> <br/>
//         <input  className='inputField' type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br/>

//       <label>
//       <span style={{color:'white', fontWeight:'bold',textShadow: '2px 2px 4px #000000'}}>Password</span> <br/>
//         <input  className='inputField' type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br/>

//       <label>
//       <span style={{color:'white', fontWeight:'bold' , textShadow: '2px 2px 4px #000000'}}>Address</span> <br/>
//         <textarea  className='inputField' value={address} onChange={handleAddressChange} />
//       </label>
//       <br/>

//       <button type="submit" className='btn'>Register</button>
//     <p type='submit' onClick={()=>Navigate('/')} className='btn3' style={{color:'blue', fontWeight:'bold', cursor:'pointer'}} >Already a User? Login here!</p>

//       </div>
//     </form>
//     </div>
//     </div>

//   );
// };

// export default RegistrationForm;




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

export default function SignUp() {
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');

    // Check if required fields are filled
    if (!firstName) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (!lastName) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
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
    if (firstName && lastName && email && password) {
      console.log({ firstName, lastName, email, password });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
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
                  error={lastNameError}
                  helperText={lastNameError && 'Please enter your last name'}
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
                  error={emailError}
                  helperText={emailError && 'Please enter your email'}
                  
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
                  error={passwordError}
                  helperText={passwordError && 'Please enter your email'}
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
                <Link href="#" variant="body2">
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