import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAHZ0vIzWawDaAL2C04-WQcs4MKkkXOCGk',
	authDomain: 'tenbits-1.firebaseapp.com',
	projectId: 'tenbits-1',
	storageBucket: 'tenbits-1.appspot.com',
	messagingSenderId: '415286767465',
	appId: '1:415286767465:web:2f2b5bcc3f9d0d63d8d7f8',
	measurementId: 'G-XYPXNL0JGP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const projectAuth = getAuth(app)
