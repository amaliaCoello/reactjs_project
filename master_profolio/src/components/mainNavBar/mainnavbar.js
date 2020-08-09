import React from "react";
import {
  Nav,
  Navbar,
  Dropdown,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../assets/css/mainnavbar/mainnavbar.css";
import Logo from "../../assets/images/litteBabbyLogo.png";
import en from "../../assets/images/flag/EN-min.jpg";
import es from "../../assets/images/flag/ES-min.jpg";

const MainNavBar = () => (
  <Container className="main">
    <Row>
      <Col sm={2}>
        <img src={Logo} className="logo" />
      </Col>
      <Col sm={10}>
        <Navbar bg="bg-*" expand="lg" fixed="top" className="Main-Navbar">
          <div className="bg-flag">
            <div className="bg-flag-EN">&nbsp;</div>
          </div>
          <Navbar.Brand href="#home" className="brand">
            <div className="title">
              <h3>littlebabby</h3>
            </div>
            <h6 className="announced">MASTER PORTFOLIO</h6>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="mr-auto formSearch">
              <Button variant="light">
                <Icon.Search />
              </Button>
              <FormControl
                type="text"
                placeholder="Search item..."
                className="search-input"
              />
            </Form>
            <Nav inline>
              <Nav.Link href="#home" className="nav">
                <span className="">
                  20 <Icon.Bell className="bell-bind" />
                </span>
              </Nav.Link>
              <Dropdown>
                <Button variant="">
                  <div className="color-navbar lb-pf-tittle">
                    my littlebabby's
                  </div>
                  <div className="color-navbar lb-pf-body">
                    portfolio of Roelvis Coello
                  </div>
                </Button>
                <Dropdown.Toggle
                  split
                  variant=""
                  id="littlebabby-dropdown"
                  className="color-navbar"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Button variant="">
                  <div className="color-navbar pf-welcome">Welcome:</div>
                  <div className="color-navbar pf-user">
                    Roelvis Coello Abijana
                  </div>
                  <div className="color-navbar pf-identity">manager</div>
                </Button>

                <Dropdown.Toggle
                  split
                  variant=""
                  id="profile-dropdown"
                  className="color-navbar"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Language:
                    <div>
                      <a href="?english" className="flag-menu">
                        <img src={en} width="25" />
                      </a>
                      <a href="?spanish" className="flag-menu">
                        <img src={es} width="25" />
                      </a>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

export default MainNavBar;
