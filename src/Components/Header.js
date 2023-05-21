import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container mx-auto">
        <Navbar.Brand href="/">One Piece Character Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline className="ml-auto">
            <div className="flex items-center">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="ml-2" variant="outline-light">Search</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export { Header };
