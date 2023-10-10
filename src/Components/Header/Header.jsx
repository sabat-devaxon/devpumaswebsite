import React, { useEffect } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom';



const Header = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav__links');
    const openNavBtn = document.querySelector('#nav__toggle-open');
    const closeNavBtn = document.querySelector('#nav__toggle-close');
    
    const openNav = () => {
       nav.style.display = 'flex';
       openNavBtn.style.display = 'none';
       closeNavBtn.style.display = 'inline-block';
    
    }
    
    openNavBtn.addEventListener('click', openNav)
    
    const closeNav = () => {
        nav.style.display = 'none';
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none';
     
     }
     
     closeNavBtn.addEventListener('click', closeNav)
  }, []);
  return (
    <nav>
        <div class="nav__container">
            <a href="index.html" class="nav__logo"><img src="images/logo.png" alt="Logo" /></a>
            <ul class="nav__links">
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about" >About Us</NavLink></li>
                <li><NavLink to="/services" >Services</NavLink></li>
                <li><NavLink to="/portfolio" >Portfolio</NavLink></li>
                <li><NavLink to="/contact" >Contact Us</NavLink></li>
                
            </ul>
            <button class="nav__toggle-btn" id="nav__toggle-open"><i class="fa-solid fa-bars"></i></button>
            <button class="nav__toggle-btn" id="nav__toggle-close"><i class="fa-solid fa-x"></i></button>
        </div>
    </nav>
  )
}

export default Header;


