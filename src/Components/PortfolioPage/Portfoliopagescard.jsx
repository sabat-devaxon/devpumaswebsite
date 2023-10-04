import React from 'react'
import Portfoliopage from './Portfoliopage';

const Portfoliopagescard = () => {

    const PortfoliopageData = [
        {
            id: 1,
            title: 'Tech Wonders',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
            image: './images/web2.png',
        },
        {
            id: 2,
            title: 'Tech Wonders',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
            image: './images/web4.jpg',
        },

        {
            id: 3,
            title: 'Tech Wonders',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i',
            image: './images/web2.png',
        },


    ];

    return (
        <div className="portfolio_web-bg">
            <div className="container">

                <div className="Portfoliopage">
                    {PortfoliopageData.map((card) => (
                        <Portfoliopage
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

export default Portfoliopagescard;
