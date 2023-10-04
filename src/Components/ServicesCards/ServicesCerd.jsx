import React from 'react'
import Card from '/src/Components/ServicesCards/Cards';

export const ServicesCerd = () => {

      
  const cardDataServices = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'Our expert developers craft tailored websites to suit your unique business needs, ensuring responsive design, user-friendly interfaces, and seamless functionality',
      image: './images/web-development.png',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'We design and develop native and cross-platform mobile apps for iOS and Android, offering a rich user experience, efficient performance, and robust security',
      image: './images/app-development.png',
    },
    {
      id: 3,
      title: 'E-commerce Solutions',
      description: 'We build scalable e-commerce platforms with intuitive navigation, secure payment gateways, and advanced inventory management to help businesses thrive in the online marketplace.',
      image: './images/ecommerce.png',
    },
    {
      id: 4,
      title: 'UI/UX Design Services',
      description: 'Our design team creates captivating user interfaces and exceptional user experiences, optimizing user engagement and conversion rates for your digital products.',
      image: './images/ui-ux.png',
    },
    {
      id: 5,
      title: 'Content Management',
      description: 'We develop custom CMS solutions, empowering you to manage and update website content effortlessly, enhancing your online presence and SEO performance.',
      image: './images/cms.png',
    },
    {
      id: 6,
      title: 'Cloud Integration and Hosting',
      description: 'We offer cloud-based hosting and integration services, optimizing scalability, security, and performance, ensuring your web and app solutions are always available and responsive.',
      image: './images/cloud-integration.png',
    },
  ];


  return (
   
    <div className="services_section_bg">
        <div className="container">
          <div className="section_headings">
            <h4>What We Do?</h4>
            <h2 className='white'>We specialize in creating innovative solutions that transform your ideas into reality.</h2>
          </div>
          <div className="grid grid-three-column services">
            {cardDataServices.map((card) => ( 
              <Card
                key={card.id}
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
