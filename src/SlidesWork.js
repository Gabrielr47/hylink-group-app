import React, { Component } from 'react';
import Slider from "react-slick";

class SlidesWork extends Component {

    constructor() {
        super();
        const baseUrl = "./images/work/";

        this.state = {
            slide: [
                { id: 1, name: 'SAIC - GM', description: 'Chevrolet Brand Campaign', imageUrl: baseUrl + '1.jpg' },
                { id: 2, name: 'KFC', description: 'Appetizer Platter Mobile Media Integration Campaign', imageUrl: baseUrl + '2.jpg' },
                { id: 3, name: 'Mengniu', description: 'Xin Yang Dao “Mystic Nine” Creative Campaign', imageUrl: baseUrl + '3.jpg' },
                { id: 4, name: 'Estee Lauder', description: 'Envy Rouge Lipstick Search Campaign', imageUrl: baseUrl + '4.jpg' },
                { id: 5, name: 'Brand USA', description: 'Fliggy Single\'s Day', imageUrl: baseUrl + '5.jpg' },
                { id: 6, name: 'Oppo', description: 'R9', imageUrl: baseUrl + '6.jpg' }
            ]
        }
    }

    generateSlides(slide) {

        if (slide) {
            return slide.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.imageUrl} alt={item.name} />

                        <div className="submenu-slide has-background-dark has-text-white">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>

                    </div>
                )
            })
        }

    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                {this.generateSlides(this.state.slide)}
            </Slider>
        );
    }
}

export default SlidesWork;