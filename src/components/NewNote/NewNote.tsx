import { useState } from 'react';
import type { Note } from '@/types/types';
import { DefaultButton } from '../common/buttons';
import DefaultInput from '../common/inputs';
import DefaultTextArea from '../common/textArea';
import styles from './NewNote.module.css';

type AddNewNote = { addNewNote: (note: Note) => void };

const NewNote = ({ addNewNote }: AddNewNote): JSX.Element => {
  const [note, setNote] = useState({
    id: '1',
    title: 'title',
    content: 'content',
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setNote({ ...note, [e.currentTarget.title]: e.currentTarget.value });
  };

  const onTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setNote({ ...note, [e.currentTarget.id]: e.currentTarget.value });
  };

  return (
    <div className={`max-w-sm ${styles.todo__newNote}`}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <DefaultInput
            title="title"
            textColor="gray-700"
            action={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-6">
          <DefaultTextArea
            action={onTextAreaChange}
            value={note.content}
            id="content"
            rows={4}
            bgColor="gray-50"
            textColor="gray-700"
          />
        </div>
        <div className="flex items-center justify-between">
          <DefaultButton
            text="Add note"
            color="blue-500"
            hover="blue-700"
            textColor="white"
            extraProps="w-full"
            action={() => addNewNote(note)}
          />
        </div>
      </div>
    </div>
  );
};

export default NewNote;
