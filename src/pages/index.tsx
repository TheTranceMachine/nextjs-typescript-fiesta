import { useAppSelector, useAppDispatch } from '@/hooks';
import { selectNotes, addNote } from '@/slice';
import type { Note } from '@/types/types';
import NewNote from '@/components/NewNote/NewNote';
import ListNotes from '@/components/ListNotes/ListNotes';
import { getRandomArbitrary } from '../utils/utils';

const HomePage = (): JSX.Element => {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  const addNewNote = (note: Note): void => {
    dispatch(addNote({ ...note, id: getRandomArbitrary() }));
  };

  return (
    <div className="todo">
      <NewNote addNewNote={(note: Note) => addNewNote(note)} />
      <ListNotes notes={notes} addNewNote={(note: Note) => addNewNote(note)} />
    </div>
  );
};

export default HomePage;
