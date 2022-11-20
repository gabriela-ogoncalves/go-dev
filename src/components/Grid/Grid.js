import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { Grid, Pagination } from 'swiper';
import { isMobile } from '../../helpers/utils';

import {trilhas} from '../../helpers/lists/trilhas';
import Card from '../Card/Card';

export default function TrilhasGrid() {
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 2 : 4}
        grid={{ rows: isMobile ? 1 : 2 }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {
          trilhas && trilhas.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Card item={item}/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
