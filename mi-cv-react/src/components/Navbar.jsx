import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  Logo,
  Title,
  Subtitle,
  Menu,
  MenuItem,
  MenuLink,
  BurgerMenu,
  BurgerLines,
  MobileMenu
} from "../styles/NavbarStyles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Función para navegación con pequeño delay (para animación menú móvil)
  const handleNavClick = (path) => {
    setMenuOpen(false); // Cierra el menú
    setTimeout(() => {
      navigate(path); // Navega tras 300ms
    }, 300);
  };

  return (
    <Nav>
      <Logo
        initial={{ opacity: 0, y: -100, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onClick={() => {
          if (menuOpen) setMenuOpen(false);
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      >
        <Title>
          Milagros<span>Angulo</span>
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          FullStack Developer & UI/UX Designer
        </Subtitle>
      </Logo>

      <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        <BurgerLines />
        <BurgerLines />
        <BurgerLines />
      </BurgerMenu>

      <Menu>
        <MenuItem>
          <MenuLink as="div" onClick={() => navigate("/about")}>
            <span>ABOUT</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as="div" onClick={() => navigate("/projects")}>
            <span>PROJECTS</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as="div" onClick={() => navigate("/contact")}>
            <span>CONTACT</span>
          </MenuLink>
        </MenuItem>
      </Menu>

      <MobileMenu className={menuOpen ? "open" : ""}>
        <MenuItem>
          <MenuLink as="div" onClick={() => handleNavClick("/about")}>
            <span>ABOUT ME</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as="div" onClick={() => handleNavClick("/projects")}>
            <span>PROJECTS</span>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink as="div" onClick={() => handleNavClick("/contact")}>
            <span>CONTACT</span>
          </MenuLink>
        </MenuItem>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;

