import Aos from 'aos';
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Chooseus = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (

    <ChooseUsSection>
      <div class="why_cardBox" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <div class="why_card">
                <img src={props.image} alt={props.title} />
                <h2>{props.first_title}</h2>
                <div class="why_img"> <img src={props.image} alt={props.title}/></div>
                <div class="why_cardContent">
                  <h3>{props.second_title}</h3>
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
    </ChooseUsSection>

  )
}

export default Chooseus;

const ChooseUsSection = styled.section`


.why_cardBox {
  width: 300px;
  height: 400px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
}

.why_card {
  position: absolute;
  width: 95%;
  height: 95%;
  background: ${({ theme }) => theme.colors.heading};
  border-radius: 20px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;
}

.why_card h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  pointer-events: none;
  /* opacity: 0.5; */
}

.why_card>img {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  pointer-events: none;
  /* opacity: 0.5; */
}

.why_card img {
  width: 80px;
  transition: 0.5s ease-in-out;
}

img {
  top: 25%;
}

.why_card .why_cardContent h3 {
  font-size: 2rem;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
}

.why_card .why_cardContent p {
  font-size: 1rem;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.white};
}

.why_card .why_cardContent {
  transform: translateY(100%);
  opacity: 0;
  transition: 0.5s ease-in-out;
}

.why_card:hover .why_cardContent {
  transform: translateY(0);
  opacity: 1;
}

.why_card:hover h2 {
  opacity: 0;
  transition: 0.5s ease-in-out;
}

.why_card:hover img {
  position: absolute;
  left: 340px;
  transition: 0.5s ease-in-out;
}

.why_card .why_img img {
  position: absolute;
  top: 45px;
  left: -93px;
  opacity: 1;
  transition: 0.5s ease-in-out;
}

.why_card:hover .why_img img {
  left: 93px;
  opacity: 0.5;
}

.why_cardBox::before {
  content: "";
  position: absolute;
  width: 40%;
  height: 150%;
  background: #40e0d0;
  background: -webkit-linear-gradient(to right, #ff0080, #ff8c00, #40e0d0);
  background: linear-gradient(to right, #ff0080, #ff8c00, #40e0d0);
  transform-origin: center;
  animation: glowing 5s linear infinite;
}

@keyframes glowing {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}



`;
