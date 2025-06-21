import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  

  @media (max-width: 1200px) {
    align-items: center;
    text-align: center;
    width: 100%;
    padding-top:60px;
    
  }
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  color: white;
  font-weight: 100;
  font-family: ${(props) => props.theme.fontFamily.main};
  letter-spacing: 1rem;
  display: inline-block;
  transform: scaleY(0.6);

  span {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    

    span {
      font-size: 2rem;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: bold;
  opacity: 0;
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.fontFamily.main};

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  right: 40px;
  top: 20px;

  @media (max-width: 1200px) {
    display: none;
  }
`;


const MenuItem = styled.li`
  list-style: none;
`;

const MenuLink = styled(Link)`
  color: white;
  font-family: ${(props) => props.theme.fontFamily.main};
  font-size: 2.8rem;
  letter-spacing: 1.5rem;
  line-height: 3.0;
  font-weight: 100;
  

  span {
    display: inline-block;
    transform: scaleY(0.3);
  }

  &:hover {
    color: #4e8477;
  }

  @media (max-width: 1200px) {
    font-size: 1.8rem;
    letter-spacing: 1rem;
    
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    position: absolute;
    left: 20px;
    top:20px;
  }
`;

const BurgerLines = styled.div`
  width: 30px;
  height: 3px;
  background: white;
  transition: 0.3s;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;  /* Asegura que ocupa todo el ancho */
  height: 100vh; /* Asegura que ocupa todo el alto */
  background: black; /* Fondo negro sólido */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 99999 !important; /* Lo llevamos por encima de todo */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  .menu-links {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;


export { Nav, Logo, Title, Subtitle, Menu, MenuItem, MenuLink, BurgerMenu, BurgerLines, MobileMenu };
