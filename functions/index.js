const functions = require('firebase-functions');
const admin = require ('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification) =>{ 
  return admin.firestore.collection('notifications')
      .add(notification)
      .then(doc => console.log('Notification added.'))
}

exports.projectCreated = functions.firestore.document('users/{userId}').onCreate( doc => {
  const user = doc.data();
  const notification = {
    content: ' Someone signed up. ',
    user: `&{user.alias}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }

  return createNotification(notification);
  
});