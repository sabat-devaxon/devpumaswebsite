import Aos from 'aos';
import React, { useEffect } from 'react'
import styled from 'styled-components';

const Process = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return ( 
    <OurProcess>
            <div class="process_card" data-aos="zoom-in-up">
                <div class="process_card_icon">
                    <img src={props.image} alt={props.title} />
                    <div class="Pcard_numb">{props.card_no}</div>
                </div>
                <div class="process_card-content">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </ OurProcess>
  )
}

export default Process


const OurProcess = styled.section`

  
  .process_card {
    width: 310px;
    padding: 33px 10px;
    transition: 0.4s all;
    border: 1px solid ${({ theme }) => theme.colors.heading};
  }
  
  .process_card:hover{
    box-shadow: 13px 13px 0px ${({ theme }) => theme.colors.heading};
    border: 1px solid ${({ theme }) => theme.colors.heading};
  }
  
  .process_card_icon {
    width: 100px;
    height: 100px;
    background-color: #eef3f6;
    padding: 20px;
    border: 1px solid #efeaea;
    border-radius: 100%;
    box-shadow: 10px 0px 10px -15px #111;
    margin: auto;
  }
  
  .Pcard_numb {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    box-shadow: 15px 0px 10px -15px #111;
    border-radius: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -80px;
    left: 45px;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    color: var(--color-text-1);
    text-shadow: 1px 4px 10px ${({ theme }) => theme.colors.heading};
  }
  
  .process_card-content h2 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding-top: 20px;
  }
  
  .process_card-content p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
  }
  
`;