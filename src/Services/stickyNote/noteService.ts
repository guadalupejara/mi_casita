import { db } from '../../lib/firebase';
import { collection, addDoc,doc, updateDoc, deleteDoc, query, where, getDocs  } from 'firebase/firestore';
import { Note } from '../../Types/types'

const notesCollection = collection(db, 'notes');

export const addNoteToDB = async (note: Note, uid: string) => {
  const docRef = await addDoc(collection(db, "notes"), {
    ...note,
    createdAt: Date.now(),
  });
  return docRef.id;
};

export const updateNoteInDB = async (firebaseId: string, updates: Partial<{ 
  text: string; 
  x: number; 
  y: number; 
  color: string; 
  font: string; 
  firebaseId: string;
}>) => {
  const noteRef = doc(db, 'notes', firebaseId);
  await updateDoc(noteRef, updates);
};

export const deleteNoteFromDB = async (firebaseId: string) => {
  const noteRef = doc(db, 'notes', firebaseId);
  await deleteDoc(noteRef);
};

export const getNotesForUser = async (uid: string): Promise<Note[]> => {
  const notesRef = collection(db, "notes");
  const q = query(notesRef, where("userId", "==", uid));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    firebaseId: doc.id, // attach Firestore doc ID
    ...doc.data(),
  })) as Note[];
};
