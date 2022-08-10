import React,{ useRef, useState } from 'react';
import { Alert, Button, Form } from "react-bootstrap"
import {Note} from "../models/note.model"

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({notes, setNotes}) => {

  const [error, setError] = useState<string>("")

  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  const colorRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory")
    }
    setError("")
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()
    }])
    /* (titleRef.current as HTMLInputElement).value = "",
    (textRef.current as HTMLTextAreaElement).value = "" */
  }
  return(
    <>
      <hr/>
      { error && <Alert variant='danger'>{error}</Alert> }
      <h2 className='fw-bold' style={{color:"#0d6efd"}}>Create Notes</h2>
      <Form className="my-3" onSubmit={ (e) => handleSubmit(e) }>
        {/* Title for the notes */}
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          {/* <Form.Label>Title</Form.Label> */}
          <Form.Control type="text" placeholder='Enter title for the note' ref={titleRef}></Form.Control>
        </Form.Group>
        {/* Description for the notes */}
        <Form.Group className='mb-3' controlId='formBasicText'>
          {/* <Form.Label>Text</Form.Label> */}
          <Form.Control as="textarea" placeholder='Enter your note' rows={3} ref={textRef}></Form.Control>
        </Form.Group>
        {/* Color for the notes */}
        <Form.Group className='mb-3'>
          {/* <Form.Label htmlFor='colorInput'>Notes Color</Form.Label> */}
          <Form.Control type="color" id='colorInput' defaultValue="#FAFAFA" title="choose your color" ref={colorRef}></Form.Control>
        </Form.Group>
        <div className="d-grid gap-2 d-md-block">
        <Button type='submit' className='btn btn-sm' variant='primary'>Create</Button>
        </div>
      </Form>
    </>
  ) ;
};

export default CreateNotes;
