import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterSection>
      <div class="footer_bg">
        <div class="container">
          <div class="footer">
            <div class="logo_section">
              <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
              <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut
                consec
                tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
              <ul class="social_icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </ul>
            </div>
            <div class="useful_links">
              <div class="useful_links-heading">
                <h2>Useful Links</h2>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="subscribe">
              <div class="subscribe-heading">
                <h2>Subscribe</h2>
              </div>
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button><i class="fab fa-telegram-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div class="copyright-text">
            <p>Copyright &copy; 2018, All Right Reserved <a href="index.html">DevPumas</a></p>
          </div>
        </div>
      </div>
    </FooterSection>

  )
}


const FooterSection = styled.footer`


hr {
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.heading};
}

.footer_bg {
  background-color: ${({ theme }) => theme.colors.bg};
}

.footer {
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: auto;
  grid-gap: 40px;
  justify-content: space-between;
  position: relative;
  padding: 100px 0;
}

.logo_section a img {
  width: 200px;
}

.logo_section p {
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 10px;
}


.social_icons i {
  font-size: 15px;
  color: ${({ theme }) => theme.colors.heading};
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.top_heading};
  text-align: center;
  line-height: 40px;
  border-radius: 100%;
  margin-right: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s all;
  &:hover{
    transform: scale(1.11);
  }
}

.useful_links-heading h2,
.subscribe-heading h2 {
  font-size: 23px;
  font-weight: 500;
  color:  ${({ theme }) => theme.colors.white};
  position: relative;
}

.useful_links-heading h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: ${({ theme }) => theme.colors.bg};
}

.subscribe-heading h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: ${({ theme }) => theme.colors.bg};
}

.useful_links ul {
  padding-top: 35px;
  gap: 14px;
  display: flex;
  flex-direction: column;
}

.useful_links ul li a {
  color: ${({ theme }) => theme.colors.white};
}

.useful_links ul li a:hover {
  opacity: 0.6;
}

.subscribe p {
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 35px;
}

.subscribe-form {
  position: relative;
  margin-top: 50px;
}

.subscribe-form input {
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px 35px;
}

.subscribe-form button {
  position: absolute;
  background-color:${({ theme }) => theme.colors.top_heading};
  padding: 6px 14px;
  font-size: 29px;
}

.subscribe-form button i {
  font-size: 29px;
}

.copyright-text p {
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 90px;
  text-align: center;
  padding: 40px 0;
}

.copyright-text a {
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.top_heading};
}

@media screen and (max-width:890px){
  .footer{
    display: block;
   gap: 40px;
  }
  .useful_links{
    padding: 20px 0;
  }
}

`;