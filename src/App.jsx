import React from 'react'
import { useState } from 'react'
import './App.css'
import { Home } from './Home'
import { About } from './About'
import { Services } from './Services'
import { Contact } from './Contact'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle'
import PortfolioPage from './PortfolioPage'




function App() {
  const [count, setCount] = useState(0)

  const theme = {
    colors: {
      heading: "#003366",
      top_heading: "#FFBF00",
      text: "#003366",
      white: "#fff",
      black: " #333333",
      helper: "#8490ff",
      bg: "#003366",
      footer_bg: "#0a1435",
      btn: "#0d6efd",
      border: "#003366",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, #003366 0%, #003363 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };


  return (

      <ThemeProvider theme = {theme}>
        <GlobalStyle /> 
        <BrowserRouter>
      <Header />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/services" element={<Services />} />
        <Route path= "/portfolio" element={<PortfolioPage />} />
        <Route path= "/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </ThemeProvider>
   
  )
}

export default App
