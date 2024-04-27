import { createContext, useContext } from "react";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { useAuth } from "./AuthProvider";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const { currentUser } = useAuth();

    const getNotes = async () => {
        const querySnapshot = await getDocs(query(collection(db, 'notes'), where("email", "==", currentUser.email)));

        return querySnapshot;
    }

    const getNote = async (id) => {
        return (await getDoc(doc(db, 'notes', id))).data();
    }

    const addNote = async (title, content) => {
        return await addDoc(collection(db, 'notes'), { title, content, email: currentUser.email, createdAt: serverTimestamp() });
    }
    
    const updateNote = async (id, title, content) => {
        return await updateDoc(doc(db, 'notes', id), {
            title, content, email: currentUser.email, createdAt: serverTimestamp()
        });
    }
    
    const deleteNote = async (id) => {
        return await deleteDoc(doc(db, 'notes', id));
    }

    const values = {
        getNotes,
        getNote,
        addNote,
        updateNote,
        deleteNote
    };

    return (
        <NoteContext.Provider value={values}>
            {children}
        </NoteContext.Provider>
    );
}

export const useNoteContext = () => useContext(NoteContext);