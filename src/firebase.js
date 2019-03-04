import fire from 'firebase';

const config = {
  apiKey: "AIzaSyBlKOygC6EHIuWDja33-aDJE4TsQMrrYU8",
  authDomain: "keepintouch-7f351.firebaseapp.com",
  databaseURL: "https://keepintouch-7f351.firebaseio.com",
  projectId: "keepintouch-7f351",
  storageBucket: "",
  messagingSenderId: "843671894531"
};
const firebase = fire.initializeApp(config);
export default firebase;
