import React from 'react'
import Herosection from './Components/HeroSection/Herosection'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { Aboutsection } from './Components/AboutSection/Aboutsection'
import Processcard from './Components/Process/Processcard'


export const About = () => {
    const data = {
        top_heading: "",
        main_heading: "About Us",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i",
        image: "./images/about_header.png",
    }

    return (
        <>
        <Herosection {...data} />
        <Aboutsection />
        <Processcard />
        <Testimonial />
        </>
    )
}
