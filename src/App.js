import './App.css';
import LoginForm from './Components/Login';
import RegistrationForm from './Components/Register';
import PaymentForm from './Components/PaymentForm';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PaymentDetails from './Components/PaymentHistory';
import { logout } from './Redux/Reducers/authReducers';
import { useDispatch, useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const isLogged = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Link to="/" className="logo" style={{ color: 'white' }}>Triple M Solutions</Link>
          <div className="header-right">
            {isLogged ? (
              <>
                <Link to="/payment">Pay</Link>
                <Link to="/UserData">User Info</Link>
                <Link to='/' className='btn btn-dark'  onClick={handleLogout}>Logout</Link>
              </>
            ) : (
              <>
                <Link to="/" className="active">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
            {/* <form action="/create-checkout-session" method="POST">
              <button type="submit">Checkout</button>
            </form> */}
          </div>
        </div>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/payment' element={<PaymentForm />} />
          <Route path='/UserData' element={<PaymentDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
