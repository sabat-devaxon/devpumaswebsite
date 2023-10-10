import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../../Style/Button';


function HomePageHeroSection(props) {
    return (
        <HomeHeader>
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
                        <div class="header_imgs">
                            <div class="header_img1"><img src="images/header1.png" alt="" /></div>
                            <div class="header_img2"><img src="images/header2.png" alt="" /></div>
                            <div class="header_img5"><img src="images/header5.png" alt="" /></div>
                            <div class="header_img3"><img src="images/header3.png" alt="" /></div>
                            <div class="header_img4"><img src="images/header4.png" alt="" /></div>
                        </div>
                        <div className="header_main_img">
                            <div ><img src={props.image} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeHeader>
    )
}

export default HomePageHeroSection;





const HomeHeader = styled.section`
.header_bg{
  background: ${({ theme }) => theme.colors.heading};
  color: white;
}
.header {
    display: flex;
    gap: 40px;
    padding: 100px 0 100px 0;
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
    color: ${({ theme }) => theme.colors.white};
  }
  
  .header_content p {
    font-size: 0.4em;
    font-weight: 400;
    line-height: 1.4em;
    padding: 1em 0;
    color: ${({ theme }) => theme.colors.white};
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

  .header_main_img{
    display: none;
  }
  

/* -------------------header animation-------------- */

.header_imgs {
  width: 40%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
}

.header_imgs img {
  width: 200px;
}

.header_img1 img {
  position: absolute;
  top: -40px;
  left: -9px;
  animation: 6s imagerotate1;
}

@keyframes imagerotate1 {
  0% {
    transform: rotateY(0deg);
  }

  25% {
    transform: rotateY(90deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  75% {
    transform: rotateY(270deg);
  }

  100% {
    transform: rotateY(360deg);
  }

}

.header_img2 img {
  position: absolute;
  top: 201px;
  left: 21px;
  animation: 6s imagerotate2 ease-in-out;
  animation-delay: 5s;
}

@keyframes imagerotate2 {
  to {
    transform: rotateY(-360deg);
  }
}

.header_img3 img {
  position: absolute;
  top: 190px;
  animation: 6s imagerotate3 ease-in-out;
  /* animation-delay: 8s; */

}

@keyframes imagerotate3 {
  to {
    transform: rotateY(360deg);
  }
}

.header_img4 img {
  position: absolute;
  top: -97px;
  left: 295px;
  animation: 6s imagerotate4 ease-in-out;
  animation-delay: 5s;

}

@keyframes imagerotate4 {
  to {
    transform: rotateY(-360deg);
  }
}

.header_img5 img {
  transform: scale(0.8);
  animation: 6s imagerotate5 ease-in-out;
}

@keyframes imagerotate5 {
  to {
    transform: scale(1);
  }
}



  /* Header responsive */

  @media screen and (max-width:890px) {

    
  .header {
    flex-wrap: wrap;
    padding: 50px 0 50px 0;
    justify-content: center;
  }

  .header_content,
  .header_img {
    width: 100%;
  }

  .header_content {
    font-size: 36px;
  }
  .header_imgs{
    display: none;
  }
  .header_main_img{
    display: flex;
  }


  }

`;