import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../../Style/Button';


function Herosection(props) {
    return (
        <MainHeader>
            <div className="header_bg">
                <div className="container">
                    <div className="header">
                        <div className="header_content">
                            <h4>{props.top_heading}</h4>
                            <h2>{props.main_heading}</h2>
                            <p>{props.details}</p>
                            <Button className="btn hireme-btn">
                                <NavLink to="/contact"> Hire Us </NavLink>
                            </Button>
                        </div>

                        <div className="header_imgs">
                            <div ><img src={props.image} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </MainHeader>
    )
}

export default Herosection;





const MainHeader = styled.section`
.header {
    display: flex;
    gap: 40px;
    padding: 100px 0 100px 0;
    align-items: center;
  }
  
  .header_content {
    width: 60%;
    font-size: 50px;
    position: relative;
  }
  
  .header_content h4 {
    font-size: 0.76em;
    font-weight: 500;
    line-height: 0.5em;
  }
  
  .header_content h2 {
    font-size: 1em;
    font-weight: 700;
    line-height: 1.2em;
  }
  
  .header_content p {
    font-size: 0.4em;
    font-weight: 400;
    line-height: 1.4em;
    padding: 1em 0;
  }
  
  .header_content::after{
    content: '';
    width: 40px;
    height: 40px;
    border: 2px solid #e5daeb;
    border-radius: 100%;
    display: block;
    position: absolute;
    top: -25px;
    right: 149px;
    z-index: -1;
    animation: bouncebox 0.5s infinite;
  }
  
  @keyframes bouncebox {
    0% {
      transform: translate3d(0px, 0px, 0);
    }
    50% {
      transform: translate3d(0px, -3px, 0);
    }
    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  @media screen and (max-width:890px) {

    
    .header {
      flex-wrap: wrap;
      justify-content: center;
    }

  }


`;