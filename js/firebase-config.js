// Firebase SDK (نسخة تعمل مباشرة في المتصفح)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyDqsm-zt9r6zjKXgSwmhJk60No5cA_mUvk",
  authDomain: "academic-platform-a499e.firebaseapp.com",
  projectId: "academic-platform-a499e",
  storageBucket: "academic-platform-a499e.firebasestorage.app",
  messagingSenderId: "99095620829",
  appId: "1:99095620829:web:05455e7ffa610692ed3f34",
  measurementId: "G-PX6ML2W3XZ"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);

// الخدمات
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
