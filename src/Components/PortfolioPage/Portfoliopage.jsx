import Aos from 'aos';
import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'

const Portfoliopage = (props ) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
    return (
        <Portfoliopagecard>
            <div class="portfolio_web_header " data-aos="zoom-in-right">
                <div class="poHeader_web_content">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <a href="#" class="port_btn">View Case Study <i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div class="poHeader_web_img">
                    <img class="image_tilt" src={props.image} alt={props.title} />
                </div>
            </div>
        </ Portfoliopagecard >
    )
}

export default Portfoliopage


const Portfoliopagecard = styled.section` 
       
.portfolio_web_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 25px ${({ theme }) => theme.colors.heading};
    padding: 25px;
    text-align: start;
}

.poHeader_web_content {
    width: 50%;
    font-size: 40px;
}

.poHeader_web_content h2 {
    font-size: 1em;
    font-weight: 600;
    line-height: 1em;
    text-shadow: 0px 1px 2px;
}

.poHeader_web_content p {
    font-size: 0.455em;
    font-weight: 400;
    line-height: 1.4em;
    padding: 1.1em 0;
}

.poHeader_web_img{
    width: 45%;
    box-shadow: 10px 10px 1px ${({ theme }) => theme.colors.heading};
}

.port_btn{
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  padding: 13px 20px;
  background-color: ${({ theme }) => theme.colors.btn};
  text-shadow: 1px 1px 24px ${({ theme }) => theme.colors.heading};
  border-radius: 6px;
  transition: 0.5s all;
}

.port_btn:hover{
  box-shadow: 5px 5px 1px ${({ theme }) => theme.colors.heading};
}

.port_btn i{
animation: bounce 0.5s infinite;
}

@keyframes bounce {
  0% {
    transform: translate3d(4px, 0px, 0);
  }
  50% {
    transform: translate3d(0px, 0px, 0);
  }
  100% {
    transform: translate3d(4px, 0px, 0);
  }
}

@media screen and (max-width:890px) {

  .portfolio_web_header{
    flex-direction: column;
    
  }
  .poHeader_web_content, .poHeader_web_img{
    width: 100%;
  }

}

            `;