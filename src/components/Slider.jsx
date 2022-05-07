import React from 'react'
import Slider from "react-slick";
import sliderImg from '../img/Placeholder-10.png'
import arrowPrev from '../img/Arrow left.png'
import arrowNext from '../img/Arrow right.png'


const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div className={className}>
            <img src={arrowPrev} alt="" onClick={onClick}/>
        </div>
    )
}
const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div className={className}>
            <img src={arrowNext} alt="" onClick={onClick}/>
        </div>
    )
}

const SliderCom = (props) => {
    let settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        dots: false,
        arrows: true,
        speed: 500,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (


        <Slider {...settings}>
            <div className="slider__img">
                <img src={sliderImg} alt=""/>
            </div>
            <div>
                <img src={sliderImg} alt=""/>
            </div>
            <div>
                <img src={sliderImg} alt=""/>
            </div>

        </Slider>

    )
}

export default SliderCom;