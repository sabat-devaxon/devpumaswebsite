import Aos from 'aos';
import React, { useEffect } from 'react'
import styled from 'styled-components'

export const Aboutsection = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <AboutSection className="about_bg">
      <div className="container">
        <div className="about">
          <div class="about_header_main_img" data-aos="zoom-in-right">
            <img src="images/about.png" alt="" />
          </div>
          <div class="about_img " data-aos="fade-right"
            data-aos-offset="ease-in-sine"
            data-aos-easing="ease-in-sine">
            <img src="images/about.png" alt="" />
            <div class="about_tags-images">
              <img src="images/codingtag.png" alt="" />
              <img src="images/braces.png" alt="" />
              <img src="images/settings.png" alt="" />
              <img src="images/html.png" alt="" />
              <img src="images/java.png" alt="" />
              <div class="about_rocket-img">
                <img src="images/rocket.png" alt="" />
              </div>
            </div>
          </div>
          <div className="about_content" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000">
            <h4>Our Story</h4>
            <h2>
              A Reliable Group of Software Developers Pioneering Innovative Technology!
            </h2>
            <p>We are a STRATEGICALLY COHESIVE TEAM focused on delivering the highest possible client ROI.</p>
            <p>Our primary objective is to facilitate your access to the developers you desire. Our foundational
              values revolve around delivering principled services, safeguarding our clients' interests, and
              continuously pursuing innovative excellence in the field of software development.</p>
          </div>
        </div>
      </div>
    </AboutSection>
  )
}


const AboutSection = styled.section`

.about {
    display: flex;
    gap: 15px;
    padding: 100px 0 100px 0;
    align-items: center;
    justify-content: center;
}

.about_content {
    width: 60%;
    font-size: 50px;
    position: relative;
}

.about_content h4 {
    font-size: 0.6em;
    font-weight: 500;
    line-height: 1.2em;
}

.about_content h2 {
    font-size: 0.8em;
    font-weight: 700;
    line-height: 1.1em;
}

.about_content p {
    font-size: 0.4em;
    font-weight: 400;
    line-height: 1.4em;
    padding-top: 1em;
}

.about_header_main_img img{
    display: none;
  }
  
  .about_img {
    width: 40%;
    align-items: center;
    justify-content: center;
  }
  
  .about_tags-images {
    display: flex;
    position: relative;
  }
  
  .about_tags-images>img {
    width: 25px;
    animation: scale 3s  infinite both;
    transform: scale(0);
  }
  
  @keyframes scale{
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  
  .about_tags-images>:nth-child(1) {
    position: absolute;
    top: -291px;
    left: 249px;
  }
  
  .about_tags-images :nth-child(2) {
    position: absolute;
    top: -309px;
    left: 278px;
  }
  
  .about_tags-images :nth-child(3) {
    position: absolute;
    top: -326px;
    left: 305px;
  }
  
  .about_tags-images :nth-child(4) {
    width: 60px;
    position: absolute;
    top: -307px;
    left: 343px;
  }
  
  .about_tags-images :nth-child(5) {
    width: 60px;
    position: absolute;
    top: -261px;
    left: 343px;
  }
  
  .about_rocket-img>img{
    width: 65px;
    position: absolute;
    top: -303px;
    left: 176px;
    animation: bounce 0.5s infinite;
  }
  
  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }
    50% {
      transform: translate3d(0px, -4px, 0);
    }
    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  /* about us responsive */

  @media screen and (max-width:890px) {

    .about {
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .about_img,
    .about_content {
      width: 100%;
    }
  
    .about_header_main_img img{
      display: block;
      width: 100%;
    }
    
    .about_img{
      display: none;
    }
  
  }
  
`;  