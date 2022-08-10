import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Note} from "../models/note.model"
interface INotesProps {
  note: Note,
  handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({note, handleDelete}) => {
  return(
    <div className='my-3'>
      <Card style={{backgroundColor: note.color}}>
        <Card.Body>
        <Card.Title className='fs-5 fw-bold' style={{color:"#6c757d"}}>
          {note.title}
        </Card.Title> 
        <Card.Text className='fs-1 lh-lg'>
          {note.text}
        </Card.Text>
        <Card.Subtitle className='text-muted lead fs-6'>
          {note.date}
        </Card.Subtitle>
        <div className="d-grid gap-2 d-md-block">  
          <Button variant="danger" className='mt-3 btn btn-sm' onClick={ () => {handleDelete(note.id)}}>
            Delete
          </Button>
        </div>
        </Card.Body>
      </Card>
    </div>
  ) ;
};

export default Notes;
