import React from 'react'
import Portfolio from './Portfolio'

export const Portfoliocard = () => {

    const cardDataPortfolio = [
        {
            id: 1,
            title: 'Research Project',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
        },
        {
            id: 2,
            title: 'Research Project',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
        },
        {
            id: 3,
            title: 'Research Project',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
        },
        {
            id: 4,
            title: 'Research Project',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
        },
        {
            id: 5,
            title: 'Research Project',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
        },
        {
            id: 6,
            title: 'Research Project',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
        },

    ];

    return (
        <div className="Portfolio_section_bg">
            <div className="container">
                <div className="section_headings">
                    <h4>What We Do?</h4>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis </h2>
                </div>
                <div className="grid grid-three-column Portfolio">
                    {cardDataPortfolio.map((card) => (
                        <Portfolio
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
