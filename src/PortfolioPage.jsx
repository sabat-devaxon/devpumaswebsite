import React from 'react'
import Herosection from './Components/HeroSection/Herosection'
import { Testimonial } from './Components/Testimonial/Testimonial'
import Portfoliopagescard from './Components/PortfolioPage/Portfoliopagescard'

const PortfolioPage = () => {

  const data = {
    top_heading: "",
    main_heading: "Our Portfolios",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i",
    image: "./images/Portfolio_header.png",
  }

  return (
    <div>
      <Herosection {...data} />
      <Portfoliopagescard />
      <Testimonial />
    </div>
  )
}

export default PortfolioPage
