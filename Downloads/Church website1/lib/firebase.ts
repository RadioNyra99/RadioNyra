"use client"

import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth"

// Your Firebase Web App configuration (safe for client usage)
const firebaseConfig = {
  apiKey: "AIzaSyBwwhzz_Seu0WUr7XphF7JlWCu3CHJTxzM",
  authDomain: "churchwebsite-90713.firebaseapp.com",
  projectId: "churchwebsite-90713",
  storageBucket: "churchwebsite-90713.firebasestorage.app",
  messagingSenderId: "308458558971",
  appId: "1:308458558971:web:1b55f82e18a47e1be0675e",
}

let app: FirebaseApp
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}

const auth: Auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { app, auth, googleProvider }
