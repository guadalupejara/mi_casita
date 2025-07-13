import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import {RegisterUserData} from '../Types/types'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {LoginUserData, UserProfile} from '../Types/types'

export const registerUser = async (data: RegisterUserData) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  const user = userCredential.user;

  await setDoc(doc(db, 'users', user.uid), {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    createdAt: new Date().toISOString(),
  });

  return user;
};

export const loginUser = async (data: LoginUserData) => {
  const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
  return userCredential.user;
};

export const getCurrentUserProfile = async (): Promise<UserProfile | null> => {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { firstName, lastName, email } = docSnap.data();
      console.log( firstName , 'name')
      return { firstName, lastName, email };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};