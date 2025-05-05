
console.log("Starting firebaseConfig.js execution");
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeDX5Bza_Vo39bEKNWDEAfiTIn8qKpPpw",
    authDomain: "codemeowtionlog.firebaseapp.com",
    projectId: "codemeowtionlog",
    storageBucket: "codemeowtionlog.firebasestorage.app",
    messagingSenderId: "698830556629",
    appId: "1:698830556629:web:87fad0ea0d75c78a7ac15c",
    measurementId: "G-45SN966R4W"
};

// Verify Firebase SDK is loaded
if (typeof firebase === 'undefined') {
    console.error('Firebase SDK is not loaded!');
} else {
    console.log('Firebase SDK is available');
}

// Create a promise to track Firebase initialization
window.firebaseInitPromise = new Promise((resolve, reject) => {
    try {
        console.log("Starting Firebase initialization...");
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log("Firebase app initialized");
        } else {
            console.log("Firebase app already initialized");
        }
        
        // Initialize Firestore
        window.db = firebase.firestore();
        console.log("Firestore initialized");
        resolve();
    } catch (error) {
        console.error("Firebase initialization error:", error);
        reject(error);
    }
});

// Add a then handler to verify promise execution
window.firebaseInitPromise.then(() => {
    console.log("Firebase initialization promise resolved");
}).catch(error => {
    console.error("Firebase initialization promise rejected:", error);
});
