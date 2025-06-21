import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Nav, Logo, Title, Subtitle, Menu, MenuItem, MenuLink, 
  BurgerMenu, BurgerLines, MobileMenu 
} from "../styles/NavbarStyles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <Logo
          initial={{ opacity: 0, y: -100, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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
      </Link>

      
      <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        <BurgerLines />
        <BurgerLines />
        <BurgerLines />
      </BurgerMenu>

      
      <Menu>
        <MenuItem><MenuLink to="/about"><span>SOBRE MÍ</span></MenuLink></MenuItem>
        <MenuItem><MenuLink to="/skills"><span>SKILLS</span></MenuLink></MenuItem>
        <MenuItem><MenuLink to="/projects"><span>PROYECTOS</span></MenuLink></MenuItem>
        <MenuItem><MenuLink to="/contact"><span>CONTACTO</span></MenuLink></MenuItem>
      </Menu>

      
      {menuOpen && (
        <MobileMenu
        className={menuOpen ? "open" : ""}>
          <MenuItem><MenuLink to="/about" onClick={() => setMenuOpen(false)}>SOBRE MÍ</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/skills" onClick={() => setMenuOpen(false)}>SKILLS</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/projects" onClick={() => setMenuOpen(false)}>PROYECTOS</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACTO</MenuLink></MenuItem>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;








