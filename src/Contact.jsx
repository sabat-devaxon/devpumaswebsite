import React from 'react'
import Herosection from './Components/HeroSection/Herosection'
import { Contactform } from './Components/ContactForm/Contactform'
import { Testimonial } from './Components/Testimonial/Testimonial'

export const Contact = () => {
      
    const data = {
        top_heading: "",
        main_heading: "Contact Us",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i",
        image: "./images/contact_header.png",
    }

    return (
        <>
        <Herosection {...data} />
        <Contactform />
        <Testimonial />
        </>
    )
}
