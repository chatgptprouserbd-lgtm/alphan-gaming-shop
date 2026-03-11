import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDMh2wmc96iWxtO3KdOagYagh4XJREhS1I",
authDomain: "alphan-gaming-shop.firebaseapp.com",
projectId: "alphan-gaming-shop",
storageBucket: "alphan-gaming-shop.firebasestorage.app",
messagingSenderId: "682244888719",
appId: "1:682244888719:web:b219155b140abc13d578fa"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
