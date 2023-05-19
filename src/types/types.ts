export type Note = {
  id: string;
  title: string;
  content: string;
};

export interface NoteState {
  notes: Array<Note>;
}

export interface ListNotes {
  notes: Array<Note>;
  addNewNote: (note: Note) => void;
}
