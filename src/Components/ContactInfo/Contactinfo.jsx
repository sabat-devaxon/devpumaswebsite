import React from 'react'
import styled from 'styled-components'

const Contactinfo = () => {
    return (

        <Contactinfosection>
            <div className="contact_info-bg">
                <div className="container">
                    <div className="contact_info-boxs">
                        <div className="contact_info-box">
                            <div className="contact_phone-icon">
                                <i className="fa-solid fa-phone fa-beat-fade" />
                            </div>
                            <h2>Call Us</h2>
                            <p>Questions about our product or pricing? Call for support</p>
                            <a href="tel:+4733378901">
                                <i className="fa-solid fa-phone" />
                                (786)753-7624s
                            </a>
                        </div>
                        <div className="contact_info-box">
                            <div className="contact_phone-icon">
                                <i className="fa-solid fa-envelope fa-beat-fade" />
                            </div>
                            <h2>Email Us</h2>
                            <p>Our support will help you Monday to Saturday</p>
                            <a href="mailto:someone@example.com">
                                <i className="fa-solid fa-envelope" />
                                Email Now
                            </a>
                            <p />
                        </div>
                        <div className="contact_info-box">
                            <div className="contact_phone-icon">
                                <i className="fa-solid fa-location-dot fa-beat-fade" />
                            </div>
                            <h2>Call Us</h2>
                            <p>Questions about our product or pricing? Call for support</p>
                            <a href="mailto:someone@example.com">
                                <i className="fa-solid fa-envelope" />
                                Email Now
                            </a>
                            <p />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </Contactinfosection>

    )
}

export default Contactinfo


const Contactinfosection = styled.section`


.contact_info-bg {
    background-color: ${({ theme }) => theme.colors.heading};
  }
  
  .contact_info-boxs {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: auto;
    justify-content: space-between;
    position: relative;
  }
  
  .contact_info-boxs .contact_phone-icon i {
    width: 60px;
    height: 60px;
    color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    border-radius: 100%;
    border: 2px solid  ${({ theme }) => theme.colors.top_heading};
    align-items: center;
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 40px;
  }
  
  .contact_info-boxs h2 {
    font-size: 25px;
    font-weight: 500;
    color:  ${({ theme }) => theme.colors.white};
    text-align: center;
    padding-top: 30px;
  }
  
  .contact_info-boxs p {
    font-size: 16px;
    font-weight: 400;
    color:  ${({ theme }) => theme.colors.white};
    text-align: center;
    padding-top: 10px;
  }
  
  .contact_info-boxs a {
    color:  ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 40px 0;
    gap: 10px;
  }
  
  .contact_info-boxs a:hover {
    color: ${({ theme }) => theme.colors.top_heading};
    padding-left: 30px;
  }
  
  @media screen and (max-width:890px) {

     .contact_info-boxs{
        justify-content: center;
     }

  }

`;
