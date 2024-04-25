import { createContext, useContext } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
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

    }

    const addNote = async (title, content) => {
        return await addDoc(collection(db, 'notes'), { title, content, email: currentUser.email });
    }
    
    const updateNote = () => { }
    
    const deleteNote = () => { }

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