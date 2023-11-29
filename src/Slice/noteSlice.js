import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noteList: [],
    selectedNote: {}
}

const noteSlice = createSlice({
    name: "noteSlice",
    initialState,
    reducers: {
        addNoteToList: (state, action) => {
            let id = Math.random() * 100;
            let note = { ...action.payload, id };
            state.noteList.push(note);
        },
        removeNoteFromList: (state, action) => {
            state.noteList = state.noteList.filter((note) => note.id !== action.payload.id);
        },
        updateNoteInList: (state, action) => {
            state.noteList = state.noteList.map((note) => note.id === action.payload.id ? action.payload : note);
        },
        setSelectedNote: (state, action) => {
            state.selectedNote = action.payload;
        }
    }
})

export const { addNoteToList, removeNoteFromList, updateNoteInList, selectedNote } = noteSlice.actions;
export default noteSlice.reducer;
