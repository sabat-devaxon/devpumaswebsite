import React from 'react'
import Chooseus from '/src/Components/ChooseUs/Chooseus';

export const Chooseuscard = () => {

    const cardDataChooseus = [
        {
          id: 1,
          first_title: 'Client Satisfaction',
          second_title: 'Client Satisfaction',
          description: 'We prioritize client satisfaction as the cornerstone of our business. Our team actively listens to your needs, communicates transparently, and consistently delivers results that align with your goals.',
          image: './images/client satisfaction.png',
        },
        {
          id: 2,
          first_title: 'Dedicated Teams',
          second_title: 'Dedicated Teams',
          description: 'We believe in the power of dedicated, cross-functional teams. Each project is assigned a group of experts who work collaboratively, ensuring a deep understanding of your projects requirements and seamless execution.',
          image: './images/dedicated teams.png',
        },
        {
          id: 3,
          first_title: 'Flexibility',
          second_title: 'Card 10',
          description: 'We understand that every project is unique. Our flexible approach allows us to adapt to changing project dynamics, incorporate client feedback, and pivot when necessary to meet evolving needs.',
          image: 'images/flexiblility .png',
        },
        {
          id: 4,
          first_title: 'Competitive Pricing',
          second_title: 'Competitive Pricing',
          description: 'We offer competitive pricing without compromising on quality. Our cost-effective solutions are designed to provide exceptional value, ensuring that you receive the best return on your investment.',
          image: 'images/client satisfaction.png',
        },
        {
          id: 5,
          first_title: 'Hiring Standards',
          second_title: 'Hiring Standards',
          description: 'Our team is composed of highly skilled professionals who meet rigorous hiring standards. We recruit top talent with a commitment to continuous learning and innovation, ensuring that your projects are in capable hands',
          image: 'images/hiring standard.png',
        },
        {
          id: 6,
          first_title: 'Coding Standards',
          second_title: 'Coding Standards',
          description: 'We adhere to industry-leading coding standards and best practices. Our code is clean, well-documented, and maintainable, reducing future development costs and enhancing the scalability and performance of your applications.',
          image: 'images/coding standard.png',
        },
      ];

  return (
    <div className="Chooseus_section_bg">
        <div className="container">
          <div className="section_headings">
            <h4>Why Choose Us</h4>
            <h2>Choose us for our expertise, reliability, and personalized solutions that ensure your success</h2>
          </div>
          <div className="grid grid-three-column Chooseus">
            {cardDataChooseus.map((card) => (
              <Chooseus
                key={card.id}
                first_title={card.first_title}
                second_title={card.second_title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
  
  )
}
