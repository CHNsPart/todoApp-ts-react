import * as React from 'react';
import { setSyntheticLeadingComments } from 'typescript';
import { Note } from "../models/note.model"
import Notes from './Notes';

interface INotesListProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}
 
const NotesList: React.FC<INotesListProps> = ({notes, setNotes}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  const renderNotes = ():JSX.Element[] => {
    return notes.map(note => {
      return <Notes key={ note.id } note={note} handleDelete={handleDelete}/>
    })
  } 
  return(
    <>
      <h2 className='mt-3 fw-bold' style={{color:"#198754"}}>Notes</h2>
      <hr/>
      <div>{ renderNotes() }</div>
      <hr/>
    </>
  ) ;
};

export default NotesList;
