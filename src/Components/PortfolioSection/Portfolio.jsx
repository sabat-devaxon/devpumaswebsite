import Aos from 'aos';
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Portfolio = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <PortfolioSection>

      <figure class="imageRoll" data-aos="zoom-out">
        <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
        <figcaption><strong>{props.title}</strong>
          <p>{props.description}</p> 
          <a href="#">Know
            More</a>
        </figcaption>
      </figure>

    </PortfolioSection>
  )
}

export default Portfolio

const PortfolioSection = styled.section`

figure {
  width: 300px;
  perspective: 900px;
}

figure:nth-child(1) {
  --imageUrl: url("images/web.jpg");
}

figure:nth-child(2) {
  --imageUrl: url("images/web2.png");
}

figure:nth-child(3) {
  --imageUrl: url("images/web3.jpg");
}

figure:nth-child(4) {
  --imageUrl: url("images/web4.jpg");
}

figure:nth-child(5) {
  --imageUrl: url("images/web3.jpg");
}

figure:nth-child(6) {
  --imageUrl: url("images/web.jpg");
}

figure img {
  width: 100%;
}

.imageRoll {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #fff;
  box-shadow: 1em 0.5em 2em #1234, 0 0 5em #1234 inset;
}

.imageRoll i {
  position: absolute;
  left: calc(100% - 1px);
  width: 6px;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: transform 0.6s var(--delay, 0s) ease-in-out;
  background-image: linear-gradient(#0003, #0000 5% 95%, #0003), var(--imageUrl, "");
  background-position-x: calc(var(--bpx, 0) + 1px);
  background-size: 300px 300px;
}

.imageRoll>i {
  left: 0;
  width: 5px;
}

.imageRoll:hover i {
  transform: rotateY(var(--angle, 0deg)) skewY(var(--skew, 0deg));
  transition-delay: var(--delay2, 0s);
}

.imageRoll>i {
  --bpx: 0px;
  --delay: 0s;
  --delay2: 0.6s;
  --angle: -10deg;
  --skew: 0deg;
}

.imageRoll>i>i {
  --bpx: -5px;
  --delay: 0.01s;
  --delay2: 0.59s;
  --angle: -10.1deg;
  --skew: -0.1deg;
}

.imageRoll>i>i>i {
  --bpx: -10px;
  --delay: 0.02s;
  --delay2: 0.58s;
  --angle: -10.2deg;
  --skew: -0.2deg;
}

.imageRoll>i>i>i>i {
  --bpx: -15px;
  --delay: 0.03s;
  --delay2: 0.57s;
  --angle: -10.3deg;
  --skew: -0.3deg;
}

.imageRoll>i>i>i>i>i {
  --bpx: -20px;
  --delay: 0.04s;
  --delay2: 0.56s;
  --angle: -10.4deg;
  --skew: -0.4deg;
}

.imageRoll>i>i>i>i>i>i {
  --bpx: -25px;
  --delay: 0.05s;
  --delay2: 0.55s;
  --angle: -10.5deg;
  --skew: -0.5deg;
}

.imageRoll>i>i>i>i>i>i>i {
  --bpx: -30px;
  --delay: 0.06s;
  --delay2: 0.54s;
  --angle: -10.6deg;
  --skew: -0.6deg;
}

.imageRoll>i>i>i>i>i>i>i>i {
  --bpx: -35px;
  --delay: 0.07s;
  --delay2: 0.53s;
  --angle: -10.7deg;
  --skew: -0.7deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i {
  --bpx: -40px;
  --delay: 0.08s;
  --delay2: 0.52s;
  --angle: -10.8deg;
  --skew: -0.8deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i {
  --bpx: -45px;
  --delay: 0.09s;
  --delay2: 0.51s;
  --angle: -10.9deg;
  --skew: -0.9deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -50px;
  --delay: 0.1s;
  --delay2: 0.5s;
  --angle: -11deg;
  --skew: -1deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -55px;
  --delay: 0.11s;
  --delay2: 0.49s;
  --angle: -11.1deg;
  --skew: -1.1deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -60px;
  --delay: 0.12s;
  --delay2: 0.48s;
  --angle: -11.2deg;
  --skew: -1.2deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -65px;
  --delay: 0.13s;
  --delay2: 0.47s;
  --angle: -11.3deg;
  --skew: -1.3deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -70px;
  --delay: 0.14s;
  --delay2: 0.46s;
  --angle: -11.4deg;
  --skew: -1.4deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -75px;
  --delay: 0.15s;
  --delay2: 0.45s;
  --angle: -11.5deg;
  --skew: -1.5deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -80px;
  --delay: 0.16s;
  --delay2: 0.44s;
  --angle: -11.6deg;
  --skew: -1.6deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -85px;
  --delay: 0.17s;
  --delay2: 0.43s;
  --angle: -11.7deg;
  --skew: -1.7deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -90px;
  --delay: 0.18s;
  --delay2: 0.42s;
  --angle: -11.8deg;
  --skew: -1.8deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -95px;
  --delay: 0.19s;
  --delay2: 0.41s;
  --angle: -11.9deg;
  --skew: -1.9deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -100px;
  --delay: 0.2s;
  --delay2: 0.4s;
  --angle: -12deg;
  --skew: -2deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -105px;
  --delay: 0.21s;
  --delay2: 0.39s;
  --angle: -12.1deg;
  --skew: -2.1deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -110px;
  --delay: 0.22s;
  --delay2: 0.38s;
  --angle: -12.2deg;
  --skew: -2.2deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -115px;
  --delay: 0.23s;
  --delay2: 0.37s;
  --angle: -12.3deg;
  --skew: -2.3deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -120px;
  --delay: 0.24s;
  --delay2: 0.36s;
  --angle: -12.4deg;
  --skew: -2.4deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -125px;
  --delay: 0.25s;
  --delay2: 0.35s;
  --angle: -12.5deg;
  --skew: -2.5deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -130px;
  --delay: 0.26s;
  --delay2: 0.34s;
  --angle: -12.6deg;
  --skew: -2.6deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -135px;
  --delay: 0.27s;
  --delay2: 0.33s;
  --angle: -12.7deg;
  --skew: -2.7deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -140px;
  --delay: 0.28s;
  --delay2: 0.32s;
  --angle: -12.8deg;
  --skew: -2.8deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -145px;
  --delay: 0.29s;
  --delay2: 0.31s;
  --angle: -12.9deg;
  --skew: -2.9deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -150px;
  --delay: 0.3s;
  --delay2: 0.3s;
  --angle: -13deg;
  --skew: -3deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -155px;
  --delay: 0.31s;
  --delay2: 0.29s;
  --angle: -13.1deg;
  --skew: -3.1deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -160px;
  --delay: 0.32s;
  --delay2: 0.28s;
  --angle: -13.2deg;
  --skew: -3.2deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -165px;
  --delay: 0.33s;
  --delay2: 0.27s;
  --angle: -13.3deg;
  --skew: -3.3deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -170px;
  --delay: 0.34s;
  --delay2: 0.26s;
  --angle: -13.4deg;
  --skew: -3.4deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -175px;
  --delay: 0.35s;
  --delay2: 0.25s;
  --angle: -13.5deg;
  --skew: -3.5deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -180px;
  --delay: 0.36s;
  --delay2: 0.24s;
  --angle: -13.6deg;
  --skew: -3.6deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -185px;
  --delay: 0.37s;
  --delay2: 0.23s;
  --angle: -13.7deg;
  --skew: -3.7deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -190px;
  --delay: 0.38s;
  --delay2: 0.22s;
  --angle: -13.8deg;
  --skew: -3.8deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -195px;
  --delay: 0.39s;
  --delay2: 0.21s;
  --angle: -13.9deg;
  --skew: -3.9deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -200px;
  --delay: 0.4s;
  --delay2: 0.2s;
  --angle: -14deg;
  --skew: -4deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -205px;
  --delay: 0.41s;
  --delay2: 0.19s;
  --angle: -14.1deg;
  --skew: -4.1deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -210px;
  --delay: 0.42s;
  --delay2: 0.18s;
  --angle: -14.2deg;
  --skew: -4.2deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -215px;
  --delay: 0.43s;
  --delay2: 0.17s;
  --angle: -14.3deg;
  --skew: -4.3deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -220px;
  --delay: 0.44s;
  --delay2: 0.16s;
  --angle: -14.4deg;
  --skew: -4.4deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -225px;
  --delay: 0.45s;
  --delay2: 0.15s;
  --angle: -14.5deg;
  --skew: -4.5deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -230px;
  --delay: 0.46s;
  --delay2: 0.14s;
  --angle: -14.6deg;
  --skew: -4.6deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -235px;
  --delay: 0.47s;
  --delay2: 0.13s;
  --angle: -14.7deg;
  --skew: -4.7deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -240px;
  --delay: 0.48s;
  --delay2: 0.12s;
  --angle: -14.8deg;
  --skew: -4.8deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -245px;
  --delay: 0.49s;
  --delay2: 0.11s;
  --angle: -14.9deg;
  --skew: -4.9deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -250px;
  --delay: 0.5s;
  --delay2: 0.1s;
  --angle: -15deg;
  --skew: -5deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -255px;
  --delay: 0.51s;
  --delay2: 0.09s;
  --angle: -15.1deg;
  --skew: -5.1deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -260px;
  --delay: 0.52s;
  --delay2: 0.08s;
  --angle: -15.2deg;
  --skew: -5.2deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -265px;
  --delay: 0.53s;
  --delay2: 0.07s;
  --angle: -15.3deg;
  --skew: -5.3deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -270px;
  --delay: 0.54s;
  --delay2: 0.06s;
  --angle: -15.4deg;
  --skew: -5.4deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -275px;
  --delay: 0.55s;
  --delay2: 0.05s;
  --angle: -15.5deg;
  --skew: -5.5deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -280px;
  --delay: 0.56s;
  --delay2: 0.04s;
  --angle: -15.6deg;
  --skew: -5.6deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -285px;
  --delay: 0.57s;
  --delay2: 0.03s;
  --angle: -15.7deg;
  --skew: -5.7deg;
}

.imageRoll>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i>i {
  --bpx: -290px;
  --delay: 0.58s;
  --delay2: 0.02s;
  --angle: -15.8deg;
  --skew: -5.8deg;
}

.imageRoll>figcaption {
  position: absolute;
  padding: 25px 10px 0px 30px;
  z-index: -1;
  font-size: 32px;
  width: 100%;
  height: 100%;
}

.imageRoll>figcaption p {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.imageRoll>figcaption strong {
  display: block;
}

.imageRoll>figcaption a {
  background-color: var(--color-btn);
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  padding: 10px 15px 10px 15px;
  border-radius: 7px;
  cursor: pointer;
}

/* -----------------------------------------our portfolio End--------------------------------------- */

/* -----------------------------------------testimonial--------------------------------------- */
.testimonial {
  margin: 100px 0;
}

.testimonial_bg {
  padding-top: 150px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 600px !important;
  height: 300px !important;
}

.testimonial_bg .container>h4 {
  font-size: 26px;
  font-weight: 500;
  line-height: 0.6em;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

.swiper-wrapper {
  padding-top: 30px;
}

/* .testimonial_bg .container>h4::before {
  content: "";
  width: 60px;
  height: 5px;
  background-color: var(--color-text-2);
  position: absolute;
  top: 6px;
  left: 400px;
}

.testimonial_bg .container>h4::after {
  content: "";
  width: 60px;
  height: 5px;
  background-color: var(--color-text-2);
  position: absolute;
  top: 6px;
  right: 400px;
} */

.testimonial_bg h2 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1em;
  text-align: center;
}


.mySwiper {
  height: 420px;
  padding-top: 40px;
}

.testimonial_img-name {
  display: flex;
}

.testimonial_img-name img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.testimonial_slide {
  width: 600px !important;
  height: 300px !important;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
  padding: 0px 20px;
  padding-top: 30px;
}

.swiper-pagination-bullet-active {
  background-color: var(--color-text-1) !important;
}

.testimonial_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 21px;
}

.testimonial_name>h4 {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-1);
  line-height: 25px;
}

.testimonial_content>p {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text-1);
  padding-top: 10px;
}

.testimonial_star i {
  color: var(--color-text-2);
}

`;
