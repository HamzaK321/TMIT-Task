import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Container from '@mui/material/Container';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);

  const handleToken = (token) => {
    // Submit payment using Stripe API

    try {
        const response = fetch('http://localhost:4242/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            amount,
          }),
        });
    
        const data = response.json();
    
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51MyWgYHCrYhJ0vqte1N0CyH609ROxv8QPu1WwPoMKBoQ3PV5PTHFRL2AqA8kMO7fo15zZUgv8FoP6rByS6pAJrUb00I0cxWlFV"
      amount={amount}
      token={handleToken}
      name="Triple M Solutions"
      description="We Build and Refine Smart Websites"
      image="https://t3.ftcdn.net/jpg/04/58/97/26/240_F_458972693_hZjqN0G0PWyiuz1Won8gQ5fQ3msv4WdF.jpg"
      currency="PKR"
    >
        <Container maxWidth="sm">
        <div className='payarea'>
      <button className='paybtn'>Pay Now</button>
      </div>
        </Container>
        
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>

    </StripeCheckout>
  );
};



export default PaymentForm;