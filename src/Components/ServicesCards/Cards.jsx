// services cards
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';


function Cards(props) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (

    <CardSection>
      <div class="service_card" data-aos="zoom-out-up">
        <div class="service_card_container" id="c0" >
          <div class="service_card_image" id="i0" >
            <div class="card_img">
            <img src={props.image} alt={props.title} />
            </div>
          </div>
          <div class="card_story" id="s0">
            <div class="card_info">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}


export default Cards;


const CardSection = styled.section`



.service_card {
      /* position: absolute; */
      top: 10%;
      left: 40%;
      width: 300px;
      height: 450px;
      perspective: 900px;
      margin-top: -1px;
}

.services_section_bg.section_headings h2 {
  color: white;
}

.service_card_container {
      position: absolute;
      top: 0%;
      width: 100%;
      height: 100%;
      transition: .5s all ease;
      transform: rotateX(60deg) scale(0.7);
      perspective: 900px;
      box-shadow: 0px 20px 50px #555;
      background: linear-gradient(to bottom, #dfe1e5 0%, #d0d3da 40%);
      animation: entry 1s linear 1;
}

      .service_card_container:hover {
        cursor: pointer;
      transform: rotate(0deg) scale(1) translateY(10px);
      transition: .5s all ease;
      z-index: 400;
}

      .service_card_image {
        position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
}

      .card_story {
        position: absolute;
      top: 39%;
      left: 0%;
      height: 55%;
      width: 100%;
      z-index: 30;
}

      .card_info {
        position: absolute;
      top: 10%;
}

.card_info h3 {
      text-align: center;
      text-shadow: 0px 0px 10px #eee;
      color:${({ theme }) => theme.colors.heading};
      letter-spacing: 2px;
      font-weight: 700;
}


.card_info p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.heading};
      padding: 0px 20px 20px 20px;
      line-height: 150%;
      text-align: center;
      letter-spacing: 1px;
}

@keyframes simple {
  50 % {
          transform: translateX(10px);
          opacity: 0.5;
        }

  100% {
        transform: translateX(10px);
      opacity: 0;
  }
}

      @keyframes simple1 {
        50 % {
          transform: translateX(-10px);
          opacity: 0.5;
        }

  100% {
        transform: translateX(-10px);
      opacity: 0;
  }
}

      @keyframes entry {
        0 % {
          top: -20 %;
          opacity: 0.1;
        }

  100% {
        top: 0%;
  }
}

.card_img{
  width: 50%;
  margin: 20px auto;
}


/* Services Cards responsive */

@media screen and (max-width:890px) {

  .service_card_container{
    transform: none;
  }

}

      `;