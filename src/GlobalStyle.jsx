import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
 }
html {
//   font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   line-height: 36px;
  }

  h3,h4 {
color: ${({ theme }) => theme.colors.top_heading};
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: 1;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

img{
  width: 100%;
}

.white{
  color: white;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0px 20px;
}



.grid {
  display: grid;
  width: 100%;
  gap:50px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: auto;
  justify-content: space-between;

}

.section_headings h4 {
  font-size: 26px;
  font-weight: 500;
  line-height: 0.6em;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

.section_headings h2 {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    padding-top: 5px;
    width: 80%;
    margin: auto;
  }

  .services:nth-child(4){
    margin-top: -100px;
  }

  @media screen and (max-width:890px) {
    .container {
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 0px 40px;
    }
    .grid{
      justify-content: center;
    }
  }
  

`;