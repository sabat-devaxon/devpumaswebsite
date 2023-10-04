import React from 'react'
import Herosection from './Components/HeroSection/Herosection'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { ServicesCerd } from './Components/ServicesCards/ServicesCerd'
import Processcard from './Components/Process/Processcard'


export const Services = () => {

    const data = {
        top_heading: "",
        main_heading: "Our Services",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i",
        image: "./images/services_header.png",
    }

    return (
        <>
            <Herosection {...data} />
            <ServicesCerd />
            <Processcard />
            <Testimonial />
        </>
    )
}


