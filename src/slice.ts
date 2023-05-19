import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import type { Note } from '@/types/types';
import { NoteState } from '@/types/types';

const initialState: NoteState = {
  notes: [{ id: '0', title: 'Todo for the day', content: 'Testing content' }],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload;
      state.notes.push(note);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const notes = state.notes.filter((note) => note.id !== id);
      state.notes = notes;
    },
  },
});

// actions
export const { addNote, removeNote } = noteSlice.actions;

// selectors
export const selectNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;
