const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const app = require('express');

exports.getUserProfile = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated.');
  }

  const userId = context.auth.uid;

  // Retrieve user data from Firestore
  const userRef = admin.firestore().collection('users').doc(userId);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'User not found.');
  }

  const userData = userDoc.data();

  // Retrieve payment history from Firestore
  const paymentsRef = userRef.collection('payments');
  const paymentsSnapshot = await paymentsRef.get();
  const paymentData = paymentsSnapshot.docs.map((doc) => doc.data());

  return {
    user: userData,
    payments: paymentData,
  };
});


const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

app.post('/charge', async (req, res) => {
  try {
    const { token, amount } = req.body;

    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: 'PKR',
      source: token.id,
      description: 'Payment for Triple M Solutions',
    });

    res.json({ message: 'Payment successful!', charge });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});