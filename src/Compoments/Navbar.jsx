import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FcCurrencyExchange } from "react-icons/fc";
import "./Navbar.css";


function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary hello">
            <Container>
                <Navbar.Brand href="/">CoinCraft <spam>

                    <FcCurrencyExchange size={"35"} />

                </spam></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-capitalize font-weight-bold  ">
                        <Nav.Link href="/" className='font-weight-bold '>home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                        <Nav.Link href='/service'>Service</Nav.Link>
                        <Nav.Link href='/team'>Team</Nav.Link>
                        {/* <Nav.Link to='/exchange'>Exchanges Coins</Nav.Link>
                        <Nav.Link to='/coins'>Coins</Nav.Link> */}

                        <NavDropdown title="Coins" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item >Coins</NavDropdown.Item> */}
                            <NavDropdown.Item href="/coins">
                                Coins
                            </NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="/exchange">Exchanges Coins</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;