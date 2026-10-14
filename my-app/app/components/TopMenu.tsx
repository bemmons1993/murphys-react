'use client';

import {
    Container, 
    Image, 
    Nav, 
    Navbar,  

} from 'react-bootstrap';

export default function TopMenu() {
  return (
    <Navbar
      expand="lg"
      className="murphys-bg py-2"
      data-bs-theme="dark"
    >
      <Container fluid className="justify-content-center">
        <Container className="top-menu-container">
          {/* left logo */}
          <Navbar.Brand href="#" className="py-0">
            <Image
              src="/murphyslogo.png"
              className="murphys-logo"
              alt="Murphy's Bar & Grill logo"
            />
          </Navbar.Brand>

          {/* mobile navigation button */}
          <Navbar.Toggle
            aria-controls="murphys-navigation"
          />

          {/* nav links on the right side */}
          <Navbar.Collapse id="murphys-navigation">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                href="#"
                className="text-white fw-bold px-2"
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white fw-bold px-2"
              >
                About Us
              </Nav.Link>

              <Nav.Link
                href="#"
                className="st-patricks-link fw-bold px-2"
              >
                St. Patrick&apos;s Day
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white fw-bold px-2"
              >
                To Go Ordering
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white px-2 social-link"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white px-2 social-link"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" />
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white px-2 social-link"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}