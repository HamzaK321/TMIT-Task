import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector  } from 'react-redux';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [payments, setPayments] = useState([]);
  const useremail = useSelector(state => state.auth.user);
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   const firstName = useSelector(state => state.auth.firstName)


//   useEffect(() => {

//     // Fetch user data and payment history from server
//     // const fetchUserData = async () => {
//     //   const userResponse = await axios.get('/api/user');
//     //   setUser(userResponse.data);

//     //   const paymentsResponse = await axios.get('/api/payments');
//     //   setPayments(paymentsResponse.data);
//     // };

//     // fetchUserData();
//   }, []);

  if (!useremail) {
    return <div>Loading...</div>;
  }
 
  
else{
    return (
        <div className='paymentpage'>
          <h2 style={{color:'white'}}>Welcome user:{useremail}</h2>
          {/* <p>Email: {useremail}</p> */}
          {/* <p>Name: {firstName}:</p> */}
    
          <h3 style={{color:'white'}}>Payment History</h3>
          <ul style={{color:'white'}}>
            {payments.map((payment) => (
              <li key={payment.id}>
                Amount: {payment.amount} | Date: {payment.date}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
}

 
export default UserProfile;


// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth'; 
// import 'firebase/firestore';
// // import 'firebase/auth';
// import StripeCheckout from 'react-stripe-checkout';
// import Container from '@mui/material/Container';

// const PaymentForm = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [amount, setAmount] = useState(0);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         firebase.firestore().collection('users').doc(user.uid).get()
//           .then(doc => {
//             setUserInfo(doc.data());
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       } else {
//         setUserInfo(null);
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleToken = async (token) => {
//     try {
//       const response = await fetch('http://localhost:4242/create-checkout-session', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           token,
//           amount,
//         }),
//       });

//       const data = await response.json();

//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       {userInfo && (
//         <div>
//           <p>{userInfo.name}</p>
//           <p>{userInfo.email}</p>
//           <p>{userInfo.address}</p>
//           <StripeCheckout
//             stripeKey="sk_test_51MyWgYHCrYhJ0vqtkCRw9dCy69HW2N5a2ivkIXu6f886MnYxhHbSZsNcPO6yeN9VmBx79AaX4g2Td8YTYYz131MP00o8qnRQpa"
//             amount={amount}
//             token={handleToken}
//             name="TripleM IT Solutions"
//             description="Payment for Services"
//             currency="PKR"
//           >
//             <Container maxWidth="sm">
//               <div className='payarea'>
//                 <button className='paybtn'>Pay Now</button>
//               </div>
//             </Container>
//           </StripeCheckout>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentForm;
