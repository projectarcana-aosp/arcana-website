import swipe1 from './img/swiper/swipe1.png';
import swipe2 from './img/swiper/swipe2.png';
import swipe3 from './img/swiper/swipe3.png';
import swipe4 from './img/swiper/swipe4.png';
import swipe5 from './img/swiper/swipe5.png';
import swipe6 from './img/swiper/swipe6.png';
import swipe7 from './img/swiper/swipe7.png';
import swipe8 from './img/swiper/swipe8.png';
import swipe9 from './img/swiper/swipe9.png';
import swipe10 from './img/swiper/swipe10.png';
import swipe11 from './img/swiper/swipe11.png';
import swipe12 from './img/swiper/swipe12.png';
import swipe13 from './img/swiper/swipe13.png';
import swipe14 from './img/swiper/swipe14.png';
import swipe15 from './img/swiper/swipe15.png';
import swipe16 from './img/swiper/swipe16.png';
import swipe17 from './img/swiper/swipe17.png';
import swipe18 from './img/swiper/swipe18.png';
import swipe19 from './img/swiper/swipe19.png';
import swipe20 from './img/swiper/swipe20.png';

import { A11y, Autoplay, EffectCoverflow, Pagination, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';


const Carousel = () => {
    // const swipeSlides = <img src={ swipe } alt="" style={ {height: "50vh", zIndex: "1"} }/>

    return ( 
      <>
        <h1 className='component-h1'>Screenshots</h1>
        <Swiper modules={[Virtual, Pagination, A11y, Autoplay, EffectCoverflow]}
              virtual
              effect= {'coverflow'}
              coverflowEffect = { {slideShadows: 0} }
              a11y={true}
              autoplay = { {delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true} }
              pagination = { {dynamicBullets: true} }
              breakpoints={{
                260: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                560: {
                  slidesPerView: 3,
                  spaceBetween: 5
                },
                720: {
                  slidesPerView: 5,
                  spaceBetween: 15
                },
                1280: {
                  slidesPerView: 7,
                  spaceBetween: 15
                },
              }}
              >
          <SwiperSlide><img src={ swipe1 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe2 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe3 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe4 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe5 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe6 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe7 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe8 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe9 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe10 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe11 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe12 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe13 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe14 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe15 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe16 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe17 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe18 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe19 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
          <SwiperSlide><img src={ swipe20 } alt="" style={ {height: "50vh", zIndex: "1"} }/></SwiperSlide>
        </Swiper>
      </>
     );
}
 
export default Carousel;