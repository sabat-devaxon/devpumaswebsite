import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {CgMenu,CgClose } from 'react-icons/cg'


export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
  
    <Nav>
        <div className={openMenu ? "menuIcon active" : "menuIcon"}>
            <ul className="nav__links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
           
            <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>


        </div>
    </Nav>

  )
}

const Nav = styled.nav`



.nav__toggle-btn {
    display: none;
    color: #0048f0;
  }
  
  .nav__logo {
    width: 10.4rem;
    display: grid;
    place-items: center;
  }
  
  .nav__logo img {
    width: 100%;
  }
  
  .nav__links {
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 100%;
  }
  
  .nav__links li a {
    font-size: 16px;
    font-weight: 500;
  }

  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }

  @media screen and (max-width:890px) {

    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.heading};
    }

    .mobile-nav-icon {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.black};
    }

    /* hide the original nav menu  */
      .nav__links {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;
      }

      
      .active .mobile-nav-icon {
        display: none;
        font-size: 2.5rem;
        position: absolute;
        top: 1%;
        right: 6%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .nav__links li a{
          font-size: 40px;
        }

      .active .close-outline {
        display: inline-block;
      }

      .active .nav__links {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }

  }

`;
