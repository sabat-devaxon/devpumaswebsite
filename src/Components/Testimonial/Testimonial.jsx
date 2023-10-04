import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper/modules';

export const Testimonial = () => {

    useEffect(() => {
        // Initialize Swiper
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            modules: [Navigation, Pagination],
        });
    }, []);

    return (
        <>
            <TestimonialSection className="testimonial_bg">
                <div className="container">
                    <div className="testimonial_heading">
                        <h4>Testimonial</h4>
                        <h2>Transforming lives, one satisfied <br /> customer at a time.</h2>
                    </div>
                    <div className="testimonial">
                        {/* Swiper */}
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial_slide">
                                        <div className="testimonial_img-name">
                                            <img src="images/man1.png" alt="" />
                                            <span className="testimonial_name">
                                                <h4>Christopher</h4>
                                                <h5>CEO, Amazon</h5>
                                                <ul className="testimonial_star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </ul>
                                            </span>
                                        </div>
                                        <div className="testimonial_content">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, qui placeat cum
                                                nesciunt doloremque quo consequuntur architecto fugiat consectetur impedit
                                                accusamus quae. Illum adipisci quidem esse culpa. Odio, vitae culpa?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </div>
            </TestimonialSection>

        </>
    )
}


const TestimonialSection = styled.section`
.testimonial {
  margin: 100px 0;
}

.testimonial_bg {
  padding-top: 150px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 600px !important;
  height: 300px !important;
}

.testimonial_heading h4 {
  font-size: 26px;
  font-weight: 500;
  line-height: 0.6em;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

.testimonial_heading h2 {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    padding-top: 5px;
    width: 80%;
    margin: auto;
  }
  

.swiper-wrapper {
  padding-top: 30px;
}

.testimonial_bg h2 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1em;
  text-align: center;
}


.mySwiper {
  height: 420px;
  padding-top: 40px;
}

.testimonial_img-name {
  display: flex;
}

.testimonial_img-name img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.testimonial_slide {
  width: 600px !important;
  height: 300px !important;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
  padding: 0px 20px;
  padding-top: 30px;
}

.swiper-pagination-bullet-active {
  background-color: ${({ theme }) => theme.colors.heading} !important;
}

.testimonial_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 21px;
}

.testimonial_name>h4 {
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  line-height: 25px;
}

.testimonial_content>p {
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.heading};
  padding-top: 10px;
}

.testimonial_star i {
  color:${({ theme }) => theme.colors.top_heading};
}


/* testimonial_slide responsive */

@media screen and (max-width:600px) {

  .testimonial_slide {
    width: 300px !important;
    height: 386px !important;
    margin-left: 151px;
  }

}


`;