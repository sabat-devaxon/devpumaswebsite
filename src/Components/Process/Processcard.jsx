import React from 'react'
import Process from './Process';


const Processcard = () => {

    const cardDataProcess = [
        {
            id: 1,
            card_no: '01',
            title: 'Requirement Analysis',
            description: 'We start by thoroughly understanding your project goals and requirements, conducting market research, and defining the scope to create a clear roadmap.',
            image: './images/blub.png.png',
        },
        {
            id: 2,
            card_no: '02',
            title: 'Design and Planning',
            description: 'Our skilled designers create wireframes and mockups, ensuring a user-centric design while our project managers establish timelines, allocate resources, and plan development phases',
            image: './images/blub.png.png',
        },
        {
            id: 3,
            card_no: '03',
            title: 'Development and Coding',
            description: 'Our experienced developers begin coding, adhering to industry best practices, and regularly testing to ensure functionality, security, and performance are maintained.',
            image: './images/blub.png.png',
        },
        {
            id: 4,
            card_no: '04',
            title: 'Testing and Quality Assurance',
            description: 'Post-launch, we provide continuous maintenance and optimization services to keep your web or app up-to-date, secure, and aligned with evolving technology and user needs.',
            image: './images/blub.png.png',
        },
        {
            id: 5,
            card_no: '05',
            title: 'Deployment and Launch',
            description: 'We handle the deployment process, ensuring a smooth launch on your preferred platforms and providing post-launch support for a seamless user experience.',
            image: './images/blub.png.png',
        },
        {
            id: 6,
            card_no: '06',
            title: 'Maintenance and Optimization',
            description: 'Post-launch, we offer ongoing maintenance and optimization services to keep your web or app up-to-date, secure, and aligned with evolving technology and user needs.',
            image: './images/blub.png.png',
        },
    ];


    return (
        <div className="process_section_bg">
            <div className="container">
                <div className="section_headings">
                    <h4>Our Process</h4>
                    <h2>Our process, marked by creativity and precision, turns your ideas into exceptional solutions. </h2>
                </div>
                <div className="grid grid-three-column Process">
                    {cardDataProcess.map((card) => (
                        <Process
                            key={card.id}
                            card_no={card.card_no}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Processcard