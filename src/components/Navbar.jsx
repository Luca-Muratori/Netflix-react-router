import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MyNavbar = (props) => {
  const [inputIsShown, setInputIsShown] = useState(false);
  return (
    <Navbar
      style={{ backgroundColor: props.bgColor, color: props.textColor }}
      expand="lg"
    >
      <Navbar.Brand style={{ width: "10%" }} href="#home">
        <Image
          className="d-none d-lg-block"
          style={{ width: props.logoWidth, height: props.logoHeight }}
          src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
        />

        {/* the netflix logo display only on sm and md screen */}
        <Image
          className="d-lg-none"
          style={{ width: props.logoSmartphoneWidth }}
          src="https://camo.githubusercontent.com/8ecaae67c08b23625ab4ed1a0fb703b2497eb9d7fdc1c0e7140b4cebb2082ebb/68747470733a2f2f63646e2e766f782d63646e2e636f6d2f7468756d626f722f597131566433396a4342477054554b485568457835466678766d4d3d2f333978303a3331313178323034382f31323030783830302f66696c746572733a666f63616c28333978303a333131317832303438292f63646e2e766f782d63646e2e636f6d2f75706c6f6164732f63686f7275735f696d6167652f696d6167652f34393930313735332f6e6574666c69786c6f676f2e302e302e706e67"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ backgroundColor: "white" }}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav className="mr-auto d-flex align-items-center">
          <Nav.Link
            style={{ color: props.textColor, fontSize: props.fontSize }}
            href="#"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: props.textColor, fontSize: props.fontSize }}
            href="#"
          >
            Tv Show
          </Nav.Link>
          <Nav.Link
            style={{ color: props.textColor, fontSize: props.fontSize }}
            href="#"
          >
            Movies
          </Nav.Link>
          <Nav.Link
            style={{ color: props.textColor, fontSize: props.fontSize }}
            href="#"
          >
            Recently added
          </Nav.Link>
          <Nav.Link
            style={{ color: props.textColor, fontSize: props.fontSize }}
            href="#"
          >
            My List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="d-flex flex-row justify-content-center">
          <Navbar.Text
            id="searchIcon"
            className="mr-3"
            onMouseEnter={() => setInputIsShown(true)}
            onMouseLeave={() => setInputIsShown(false)}
          >
            {inputIsShown && <SearchBar />}
            <svg
              style={{ color: props.textColor }}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Navbar.Text>

          <Navbar.Text
            className="mx-3"
            style={{ color: props.textColor, fontSize: props.fontSize }}
          >
            KIDS
          </Navbar.Text>
          <Navbar.Text className="mr-4">
            <svg
              style={{ color: props.textColor }}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </Navbar.Text>
          <Navbar.Text>
            <Image
              style={{ width: props.iconWidth, height: props.iconHeight }}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            />
          </Navbar.Text>
          <NavDropdown
            style={{ color: props.textColor }}
            title=""
            id="basic-nav-dropdown"
            className="dropleft"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
