import { useAppDispatch } from '@/hooks';
import { removeNote } from '@/slice';
import type { Note, ListNotes } from '@/types/types';
import styles from './ListNotes.module.css';
import { GroupButton } from '../common/buttons';
import { ReactElement } from 'react';

const ListNotes = (props: ListNotes): ReactElement => {
  const dispatch = useAppDispatch();
  const { notes, addNewNote } = props;

  const deleteNote = (noteId: string) => {
    dispatch(removeNote(noteId));
  };

  return (
    <>
      {notes.map((note: Note) => (
        <div
          key={note.id}
          className={`${styles.todo__note} max-w-sm rounded overflow-hidden shadow-lg bg-white`}
        >
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2 text-ellipsis overflow-hidden">
              {note.title}
            </h1>
            <p className="text-gray-700 text-base text-ellipsis overflow-hidden">
              {note.content}
            </p>
          </div>
          <div className="px-6 pt-6 pb-6">
            <div className="grid grid-cols-2 place-content-center">
              <GroupButton
                action={() => deleteNote(note.id)}
                text="Delete"
                position="l"
                color="gray-300"
                hover="gray-400"
                textColor="gray-800"
              />
              <GroupButton
                action={() => addNewNote(note)}
                text="Duplicate"
                position="r"
                color="gray-300"
                hover="gray-400"
                textColor="gray-800"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListNotes;
