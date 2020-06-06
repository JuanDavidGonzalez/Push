
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');



var firebaseConfig = {
  apiKey: "AIzaSyD1-uFidwbNN4o1zbxM_P03YCz0KV9G6yA",
  authDomain: "notificaciones-55790.firebaseapp.com",
  databaseURL: "https://notificaciones-55790.firebaseio.com",
  projectId: "notificaciones-55790",
  storageBucket: "notificaciones-55790.appspot.com",
  messagingSenderId: "1082817577336",
  appId: "1:1082817577336:web:5c01fd74f0e917f70fc88d"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});