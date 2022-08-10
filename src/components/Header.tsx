import * as React from 'react';
import {Navbar, Container} from "react-bootstrap"

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" className='text-center'>
      <Container className='text-center'>
        <Navbar.Brand className='text-center'>
          React TypeScript ToDo Project
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
