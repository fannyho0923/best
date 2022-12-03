import React, { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

const Header = ({ lang, locale, setLocale }) => {
  const [value, setValue] = useState(0);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const toggle = (dropdownOpen) => {
    switch (dropdownOpen) {
      case "dropdownOpen1":
        setDropdownOpen1(!dropdownOpen1);
        break;
      case "dropdownOpen2":
        setDropdownOpen2(!dropdownOpen2);
        break;
      case "dropdownOpen3":
        setDropdownOpen3(!dropdownOpen3);
        break;
    }
    return;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Box
      className="text-black"
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {/* <NavbarToggler onClick={toggleNavbar} style={{backgroundColor:'gray'}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      <Nav className="flex justify-center" tabs>
        <Dropdown
          nav
          isOpen={dropdownOpen1}
          toggle={() => toggle("dropdownOpen1")}
        >
          <DropdownToggle nav caret>
            <FormattedMessage id="locales.about.text" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">
            <FormattedMessage id="locales.news.text" />
          </NavLink>
        </NavItem>
        <Dropdown
          nav
          isOpen={dropdownOpen2}
          toggle={() => toggle("dropdownOpen2")}
        >
          <DropdownToggle nav caret>
            <FormattedMessage id="locales.service.text" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">
            {" "}
            <FormattedMessage id="locales.sustainability.text" />
          </NavLink>
        </NavItem>
        <Dropdown
          nav
          isOpen={dropdownOpen3}
          toggle={() => toggle("dropdownOpen3")}
        >
          <DropdownToggle nav caret>
            <FormattedMessage id="locales.contact.text" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button
          color="primary"
          onClick={() => setLocale(lang.find((lang) => lang !== locale))}
        >
          <FormattedMessage id="locales.button.text" />
        </Button>
      </Nav>
    </Box>
  );
};

export default Header;
