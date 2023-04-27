// import firebase from '../firebase';

// export const signUp = (userData) => {
//   return (dispatch) => {
//     firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         dispatch({ type: 'SIGNUP_SUCCESS', user });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         dispatch({ type: 'SIGNUP_ERROR', errorMessage });
//       });
//   };
// };

// export const signIn = (userData) => {
//   return (dispatch) => {
//     firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         dispatch({ type: 'LOGIN_SUCCESS', user });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         dispatch({ type: 'LOGIN_ERROR', errorMessage });
//       });
//   };
// };

// export const signOut = () => {
//   return (dispatch) => {
//     firebase.auth().signOut()
//       .then(() => {
//         dispatch({ type: 'SIGNOUT_SUCCESS' });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         dispatch({ type: 'SIGNOUT_ERROR', errorMessage });
//       });
//   };
// };
// Actions.js

// export const setAccessToken = (accessToken) => {
//   return {
//     type: "SET_ACCESS_TOKEN",
//     payload: accessToken,
//   };
// };

// export const clearAccessToken = () => {
//   return {
//     type: "CLEAR_ACCESS_TOKEN",
//   };
// };

// export const setLoading = (loading) => {
//   return {
//     type: "SET_LOADING",
//     payload: loading,
//   };
// };

// export const setError = (error) => {
//   return {
//     type: "SET_ERROR",
//     payload: error,
//   };
// };
