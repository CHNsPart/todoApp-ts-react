import React, { useState } from 'react';
import {Note} from './models/note.model';
import './App.css';
import Header from "./components/Header"
import NotesList from "./components/NotesList"
import { Container, Col, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Sample Title",
    text: "Sample ToDo Description",
    color: "#FAFAFA",
    date: (new Date).toString()
  }])

  return (
    <>
      <Header />
      <Container className='mt-5 text-center'>
        <Row className='md-5'>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5'>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
