const firebaseConfig = {
    apiKey: "AIzaSyC7ZbkSF8vl0OfnTFHc0-2NaYnYa2DmZiQ",
    authDomain: "fast-tasty.firebaseapp.com",
    databaseURL: "https://fast-tasty.firebaseio.com",
    projectId: "fast-tasty",
    storageBucket: "fast-tasty.appspot.com",
    messagingSenderId: "893783669375",
    appId: "1:893783669375:web:013a96aac9824578751d4a",
    measurementId: "G-5E4WQ7WR0M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




const tasty = document.getElementById('fast-tasty');
const ulList = document.getElementById('list');

const bdRefObject = firebase.database().ref().child('fast-tasty');
const bdRefList = bdRefObject.child('chefs');

bdRefObject.on('value',snap => {
    tasty.innerHTML = JSON.stringify(snap.val(), null, 6 );
});

bdRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    ulList.appendChild(li);
});