const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

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