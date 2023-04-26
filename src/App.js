
import './App.css';
import LoginForm from './Components/Login';
import RegistrationForm from './Components/Register';
import PaymentForm from './Components/PaymentForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from './Components/PaymentHistory';
import firebase from './Database/FireBase';


function App() {

  // const ref= firebase.firestore().collection("User-Payment")
  // console.log("I am here", ref);
  return (
    <BrowserRouter>
    <div className="App">
    <div className="header">
  <a href="https://triplemsolution.com/" className="logo" style={{color:'white'}}>Triple M Solutions </a>
  <div className="header-right">
    <a className="active" href="/">Login</a>
    <a href="/register">Register</a>
    <a href="/payment">Pay</a>
    <a href="/UserData">User Info</a>
  </div>
</div>

      <Routes>  
      <Route path='/' Component={LoginForm}/>
      {/* <LoginForm/> */}
      <Route path='/register' Component={RegistrationForm}/>
      {/* <RegistrationForm/> */}
      <Route path='/payment' Component={PaymentForm}/>
      {/* <PaymentForm/> */}
      <Route path='/UserData' Component={UserProfile}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
