import React from 'react'
import HomePageHeroSection from './Components/HeroSection/HomePageHeroSection'
import { Contactform } from './Components/ContactForm/Contactform'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { Aboutsection } from './Components/AboutSection/Aboutsection'
import { ServicesCerd } from './Components/ServicesCards/ServicesCerd'
import { Chooseuscard } from './Components/ChooseUs/Chooseuscard'
import Processcard from './Components/Process/Processcard'
import { Portfoliocard } from './Components/PortfolioSection/Portfoliocard'
import Contactinfo from './Components/ContactInfo/Contactinfo'




export const Home = () => {

  const data = {
    top_heading: "we are an entire service",
    main_heading: "Developers you can trust for your next digital project",
    details: "Our committed team is available around the clock, no matter your location, to achieve your desired outcomes. We offer time zone-aligned support, ensuring 24/7 availability for all your inquiries. Skilled agile developers are ready to take on your project, whether it's starting from scratch or ongoing.",
    image: "./images/header.png",
  }


  return (
    <>
      <HomePageHeroSection {...data} />
      <Aboutsection />
      <ServicesCerd />
      <Chooseuscard />
      <Processcard />
      <Portfoliocard />
      <Testimonial />
      <Contactform />
      <Contactinfo />
    </>
  )
}
