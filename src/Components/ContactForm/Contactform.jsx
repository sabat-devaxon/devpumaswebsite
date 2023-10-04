import Aos from 'aos';
import React, { useEffect } from 'react'
import styled from 'styled-components';

export const Contactform = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
    return (

        <ContactForm className="contact_bg">
            <div className="container">
                <div className="contact_top_headings">
                    <h4 >Quick Support</h4>
                    <h2>Get in Touch Today!</h2>
                </div>
                <div className="contact">
                    <div className="contact_img" data-aos="fade-right">
                        <img src="./images/contactform.png" alt="" />
                        <div className="main-text main-text-name">
                            <span className=" text typewriter typewriter_name">Liam Davis</span>
                        </div>
                        <div className="main-text main-text-email">
                            <span className=" text typewriter typewriter_email">liam1@gmail.com</span>
                        </div>
                        <div className="main-text main-text-message">
                            <span className=" text typewriter typewriter_message">Your Message</span>
                        </div>
                    </div>
                    <div className="contact_form "  data-aos="fade-left">
                        <h4>Tell Us About Your Project</h4>
                        <h2>Fill out the form and we'll be in touch ASAP.</h2>
                        <form action="#" method='post'>
                            <input className='app-form-control'  type="text" name="name" id="" placeholder="Name" />
                            <input className='app-form-control' type="text" name="email" id="" placeholder="Email" />
                            <input className='app-form-control' type="text" name="subject" id="" placeholder="Subject " />
                            <textarea className='app-form-control' name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>

                            <button>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </ContactForm>

    )
}

const ContactForm = styled.form`


.contact_bg {
    padding: 50px 0 100px 0;
  }
  
  .contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .contact_top_headings h4 {
    font-size: 26px;
    font-weight: 500;
    line-height: 0.6em;
    text-align: center;
    position: relative;
    padding-bottom: 8px;
  }
  
  .contact_top_headings h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.1em;
    text-align: center;
    padding-bottom: 80px;
  }
  
  
  .contact_form {
    width: 45%;
    box-shadow: 0px 20px 30px #555;
    border-radius: 5px;
    padding: 25px 0;
  }
  
  .contact_form h2 {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding-top: 5px;
    width: 80%;
    margin: auto;
  }
  
  .contact_form h4 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding-top: 30px;
    width: 80%;
    margin: auto;
  }
  
  
  .contact_form form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact_form form input,
  textarea {
    width: 80%;
    padding: 16px 0;
    margin-top: 18px;
    border: none;
    outline: none;
    border-bottom: ${({ theme }) => theme.colors.heading} solid 1px;
  }

  .app-form-control:focus-visible {
    border-bottom: ${({ theme }) => theme.colors.heading} solid 0.5px;
  }
  
  
  .contact_form form input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
  }
  
  textarea:focus,
  input:focus {
    color: ${({ theme }) => theme.colors.heading};
    /* animation: 0.2s ease-in scale; */
    border: none;
  }
  
  
  .contact_form form textarea,
  input {
    color: ${({ theme }) => theme.colors.white};
  }

  input[type="text"]:focus + placeholder {
    transform: translateX(10px) translateY(-50%);
    color: #007bff;
  }
  
  .contact_form form button {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.btn};
    padding: 15px 0;
    width: 80%;
    margin: 30px 0;
    text-align: center;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 2px;
    border: none;
    border-radius: 2px;
    box-shadow: 0 0.7rem 0.7rem 0 rgb(132 144 255 / 50%);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .contact_form form button:hover {
    box-shadow: 0 1rem 1rem 0 rgb(132 144 255 / 100%);
    transform: rotateX(26deg) scale(0.99);
  }
  
  .contact_img {
    width: 45%;
  }
  
  .main-text .text {
    position: relative;
  }
  
  .main-text-name {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    position: relative;
    top: -405px;
    left: 7px;
  }
  
  .main-text-email {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    position: relative;
    top: -377px;
    left: 26px;
  }
  
  .main-text-message {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    position: relative;
    top: -355px;
    left: 15px;
    animation-delay: 300s;
  }
  
  .text.typewriter:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    height: 81%;
    width: 91.5%;
    background-color: #f4f8f9;
    border-left: 9px solid #000;
    animation: animate__type 5s steps(23) infinite;
  }
  
  @keyframes animate__type {
  
    40%,
    60% {
      left: calc(100% + 4px);
    }
  
    100% {
      left: 0%;
    }
  }


  @media screen and (max-width:1100px) {
    .contact {
      flex-direction: column;
      gap: 80px;
    }
    .main-text{
      display: none;
    }
    .contact_img, .contact_form{
      width: 100%;
    }
  }

`;
