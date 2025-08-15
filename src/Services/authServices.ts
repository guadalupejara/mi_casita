import { createUserWithEmailAndPassword , updateEmail, EmailAuthProvider,
  reauthenticateWithCredential, verifyBeforeUpdateEmail  } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, deleteDoc  } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, deleteUser  } from 'firebase/auth';
import {LoginUserData, UserProfile, RegisterUserData, SettingsFormValues } from '../Types/types'

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
      const { firstName, lastName, email, phoneNumber } = docSnap.data();
      console.log( firstName , 'name')
      return { firstName, lastName, email, phoneNumber };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

export const updateUserProfile = async (data: SettingsFormValues) => {
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user found.');

  if (data.email && data.email !== user.email) {
    if (!data.currentPassword) {
      throw new Error('Current password is required to change email.');
    }

    const credential = EmailAuthProvider.credential(user.email || '', data.currentPassword);

    try {
      await reauthenticateWithCredential(user, credential);
      console.log('Reauthenticated successfully');
      await verifyBeforeUpdateEmail(user, data.email);
      console.log('Verification email sent to new address');
    } catch (error) {
      console.error('Reauthentication or email update failed:', error);
      throw new Error('Failed to change email. Please check your password and try again.');
    }
  }

  // Update Firestore document
  const docRef = doc(db, 'users', user.uid);
  await updateDoc(docRef, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber || '',
    updatedAt: new Date().toISOString(),
  });
};

export const deleteCurrentUser = async (password: string) => {
  const user = auth.currentUser;

  if (!user || !user.email) {
    throw new Error('No authenticated user found.');
  }

  try {
    // Re-authenticate user
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);

    // Delete Firestore document
    await deleteDoc(doc(db, 'users', user.uid));

    // Delete user from Auth
    await deleteUser(user);
  } catch (error) {
    throw error; // Let component handle error display
  }
};