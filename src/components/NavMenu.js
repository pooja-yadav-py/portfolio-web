import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyle = styled.nav`
  background: var(--dark-bg);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height:9%;
  padding: 1rem 0;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--hover-bg);
      }
    }
    a {
      display: inline-block;
      color: black;
      padding: 0.1rem 2rem;
      font-family: "Baloo Bhai 2", cursive;
      font-size: 1.6rem;
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2rem;
    font-size: 2rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    
      .hide-item{
          ${'' /* display:none; */}
          transform: translateY(calc(-100% - var(--top)));
      }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
        --top: 1rem;
      transition: 0.3s ease transform;
      background: var(--ul-bg);
      padding: 1rem;
      width: 90%;
      max-width: 250px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <NavMenuStyle>
        <div className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
        >
          <MdMenu />
        </div>
        <ul className={!showNav ? "navItems hide-item" : "navItems"}>
          <div 
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li className="home">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </NavMenuStyle>
    </>
  );
}
