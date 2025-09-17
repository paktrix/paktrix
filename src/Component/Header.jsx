import React from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="">
            <Navbar expand="lg" className="bg-white px-3 px-lg-4">
                <Navbar.Brand as={Link} to="/">
                    <div style={{ width: '180px', height: 'auto' }}>
                        <img
                            src={require("../assets/images/PAKTRIX LOGO FINAL.jpg")}
                            className="img-fluid w-100 h-100 object-fit-cover"
                            alt="Logo"
                        />
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar" className='border-0 fw-bold shadow-none' />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" className='px-2'>
                            <Link to="/">
                                <div style={{ width: '180px', height: 'auto' }}>
                                    <img
                                        src={require("../assets/images/PAKTRIX LOGO FINAL.jpg")}
                                        className="img-fluid w-100 h-100 object-fit-cover"
                                        alt="Logo"
                                    />
                                </div>
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='px-3'>
                        <Nav className="justify-content-end flex-grow-1 pe-3 gap-2">
                            <NavLink
                                to="/"
                                className="border text-center px-2 py-1 fw-bold text-white navbar_menu text-decoration-none"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="border text-center px-2 py-1 fw-bold text-white navbar_menu text-decoration-none"
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className="border text-center px-2 py-1 fw-bold text-white navbar_menu text-decoration-none"
                            >
                                Blog
                            </NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </div>
    );
}

export default Header