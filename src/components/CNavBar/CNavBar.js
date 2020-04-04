import React from 'react';
import {
    Container,
    Navbar,
    NavbarBrand
}  from 'reactstrap';
import { Link } from 'react-router-dom'

export function CNavBar() {
  return (
      <Navbar className="navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Container>
              <NavbarBrand>
                  <Link to="/" className="navbar-brand">Employee salary index</Link>
              </NavbarBrand>
          </Container>
      </Navbar>
  );
}
