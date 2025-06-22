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
  font-size: 4rem;
  margin-left: 3rem;
  margin-top: 2.5rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    margin: 5rem auto 0; /* Más margen para bajar y centrar */
    align-items: center;
    text-align: center;
    padding-top: 0;
    font-size: 2.8rem;
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
    font-weight: bold;
    font-size: 3.5rem;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.6),
      rgba(158, 188, 175, 0.7),
      rgba(117, 155, 144, 0.6),
      rgba(90, 130, 121, 0.5),
      rgba(78, 132, 119, 0.7),
      rgba(90, 130, 121, 0.5),
      rgba(117, 155, 144, 0.6),
      rgba(158, 188, 175, 0.7),
      rgba(255, 255, 255, 0.6)
    );
    background-size: 600% 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 12s ease infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
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
  color: white;
  font-family: ${(props) => props.theme.fontFamily.main};

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
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
  margin-top: 2rem;
  &:first-child {
    margin-top: 6rem;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  font-family: ${(props) => props.theme.fontFamily.main};
  font-size: 8rem;
  letter-spacing: 1.5rem;
  line-height: 0.3;
  font-weight: 100;
  cursor: pointer;

  span {
    display: inline-block;
    transform: scaleY(0.3);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover span {
    animation: fadeInOut 1.6s ease-in-out forwards;
  }

  @keyframes fadeInOut {
    0% { opacity: 1; }
    30% { opacity: 0; }
    70% { opacity: 0.2; }
    100% { opacity: 1; }
  }

  @media (max-width: 1200px) {
    font-size: 1.8rem;
    letter-spacing: 1rem;

    span {
      font-size: 1.8rem;
    }
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
    top: 20px;
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
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Bajamos el contenido */
  align-items: center;
  gap: 35px;
  padding-top: 6rem; /* Para separar de top */
  z-index: 99999 !important;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export {
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
};
