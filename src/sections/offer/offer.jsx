// import React, { useRef, useState } from 'react';
// Import Swiper React components
import offer1 from '../../assets/offer/offer1.png';
import offer2 from '../../assets/offer/offer2.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import './offer.module.css';

export default function Offer() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            900: {
                slidesPerView: 3,
            }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={offer1} alt='offer1'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer2} alt='offer2'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer1} alt='offer1'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer2} alt='offer2'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer1} alt='offer1'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer2} alt='offer2'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer1} alt='offer1'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer2} alt='offer2'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={offer1} alt='offer1'></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
