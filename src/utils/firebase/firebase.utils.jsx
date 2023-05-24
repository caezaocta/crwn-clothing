import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider
} from 'firebase/auth'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDDVVRqFqRprIIV7wU7SO0s0dpEfYTEU_I",
	authDomain: "crwn-clothing-db-7635f.firebaseapp.com",
	projectId: "crwn-clothing-db-7635f",
	storageBucket: "crwn-clothing-db-7635f.appspot.com",
	messagingSenderId: "681662666914",
	appId: "1:681662666914:web:df59f6049acd960039dffb",
	measurementId: "G-JW52G05R4N"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;

}

// export const createUserDocumentFromAuth = aysnc(userAuth) => {
// 	const userDocRef = doc(db, 'users', userAuth.uid);

// 	console.log(userDocRef)
// };