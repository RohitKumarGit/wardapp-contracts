import { initializeApp, applicationDefault } from "firebase-admin/app";
initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://dewarr-923ad.firebaseio.com",
});
