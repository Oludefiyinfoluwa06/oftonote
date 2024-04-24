import { createContext, useContext } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const getNotes = () => {}

    const addNote = () => { }
    
    const updateNote = () => { }
    
    const deleteNote = () => { }

    const values = {
        getNotes,
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