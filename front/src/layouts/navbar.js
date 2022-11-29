import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarProyecto = () => {
    return (
        <>
            <Navbar className = "navBg" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/">Agencia de Viajes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="nosotros">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="servicios">Servicios</Nav.Link>
                            <Nav.Link as={Link} to="destinos">Destinos</Nav.Link>
                            <Nav.Link as={Link} to="contacto">Contacto</Nav.Link>
                          
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
                <a target="_blank" class="btn btn-outline-dark" href="http://localhost:3000/admin/login/logout">Administrador<i class="fas fa-sing-out-alt"></i></a>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

export default NavBarProyecto