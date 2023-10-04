import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'
import styled from 'styled-components'

export const Header = () => {
  return (
    <div className="container">
        <MainHeader>
        <NavLink to="/">
           <img src="./images/logo.png" alt="" className='logo' />
        </NavLink>
        <NavBar />
    </MainHeader>
    </div>
  )
}

const MainHeader = styled.header`
//   padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

//   .logo {
//     height: auto;
//     max-width: 30%;
//   }
`;



