// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4Gv88PqciXAwBQO6S5Y04dH5McOdod0k",
    authDomain: "ng-gems.firebaseapp.com",
    projectId: "ng-gems",
    storageBucket: "ng-gems.appspot.com",
    messagingSenderId: "816887947706",
    appId: "1:816887947706:web:31c25e00206df121437d83",
    measurementId: "G-RXNLSK1XZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  firebase: {
    projectId: 'ng-gems',
    appId: '1:816887947706:web:31c25e00206df121437d83',
    databaseURL: 'https://ng-gems-default-rtdb.firebaseio.com',
    storageBucket: 'ng-gems.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyD4Gv88PqciXAwBQO6S5Y04dH5McOdod0k',
    authDomain: 'ng-gems.firebaseapp.com',
    messagingSenderId: '816887947706',
    measurementId: 'G-RXNLSK1XZM',
  },
    production: false,
    gems_url: 'https://api.green.keyprdev.com',
    chat_url: 'https://chat-token.green.keyprdev.com',
    locale_url: 'https://translations.green.keyprdev.com/dashboard/translations/',
    api_v3: 'https://api.green.keyprdev.com/v1',
    kcsaccount_url: 'https://account.green.keyprdev.com',
    app_token: 'Z5T62DWXB3W2MYPH',
    notification_period: 5000,
    intercom_app_id: 'o0iq46xv',
    gtm_id: 'GTM-NFVXRKL',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
