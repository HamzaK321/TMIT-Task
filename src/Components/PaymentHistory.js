import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch user data and payment history from server
    const fetchUserData = async () => {
      const userResponse = await axios.get('/api/user');
      setUser(userResponse.data);

      const paymentsResponse = await axios.get('/api/payments');
      setPayments(paymentsResponse.data);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>

      <h3>Payment History</h3>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            Amount: {payment.amount} | Date: {payment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;