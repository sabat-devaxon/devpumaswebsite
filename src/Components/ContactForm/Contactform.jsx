// import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contactform.css';

const Result = () => {
  return (
    <p> Your message has been sent successfully &#128512;</p>
  )
}

export const Contactform = () => {

  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l5acxoo', 'template_i65g5an', form.current, 'JqYPP0h68QSmJKDwm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="container">
      <div className="contact_top_headings">
        <h4 >Quick Support</h4>
        <h2>Get in Touch Today!</h2>
      </div>
      <div className="contact_form">
        <div className="contact_image">
          <img src="./images/contact_form.jpg" alt="" />
        </div>
        <div className="form">
          <h4>Tell Us About Your Project</h4>
          <h2>Fill out the form and we'll be in touch ASAP.</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="name" id="name" class="form-control" placeholder='Name' required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" id='subject' class="form-control" placeholder='Subject' required />
            </div>
            <div className="form-group">
              <input type="email" name="email" id='email' class="form-control" placeholder='Email' required />
            </div>
            <div className="form-group">
              <textarea name="message" class="form-control" id='message' rows="5" placeholder='Message' required />
            </div>
            <input type="submit" value="Send" className='button' />
            <div className="result">
              {result ? <Result /> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

