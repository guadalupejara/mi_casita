import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import {RegisterUserData} from '../Types/types'

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
