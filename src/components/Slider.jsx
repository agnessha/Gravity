// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Carousel } from 'react-responsive-carousel';
// import sliderImg from '../img/Placeholder-10.png'
// import arrowPrev from '../img/Arrow left.png'
// import arrowNext from '../img/Arrow right.png'
//
//
//
//
//
// const SliderCom = (props) => {
//
//     let PrevArrow = (props) => {
//         const { className, onClick } = props;
//
//         return (
//             <div className={className}>
//                 <img src={arrowPrev} alt="" onClick={onClick}/>
//             </div>
//         )
//     }
//     let NextArrow = (props) => {
//         const { className, onClick } = props;
//
//         return (
//             <div className={className}>
//                 <img src={arrowNext} alt="" onClick={onClick}/>
//             </div>
//         )
//     }
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//         renderArrowPrev: <PrevArrow/>,
//         renderArrowNext: <NextArrow/>
//     };
//
//     return (
//
//
//         <Carousel>
//             <div>
//                 <img src={sliderImg} />
//             </div>
//             <div>
//                 <img src={sliderImg} />
//             </div>
//             <div>
//                 <img src={sliderImg} />
//             </div>
//         </Carousel>
//     )
// }
//
// export default SliderCom;