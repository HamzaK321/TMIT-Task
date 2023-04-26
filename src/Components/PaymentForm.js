import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);

  const handleToken = (token) => {
    // Submit payment using Stripe API
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51MyWgYHCrYhJ0vqte1N0CyH609ROxv8QPu1WwPoMKBoQ3PV5PTHFRL2AqA8kMO7fo15zZUgv8FoP6rByS6pAJrUb00I0cxWlFV"
      amount={amount}
      token={handleToken}
      name="Triple M Solutions"
      description="We Build and Refine Smart Websites"
      image="https://triplemsolution.com/wp-content/uploads/2022/01/27-copy4.png"
      currency="PKR"
    >
        <div className='payarea'>
      <button className='paybtn'>Pay Now</button>
      </div>
    </StripeCheckout>
  );
};

export default PaymentForm;