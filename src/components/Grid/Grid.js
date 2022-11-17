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
// import Trilha from '../Trilha/Trilha';

import trilhas from '../../helpers/lists/trilhas.json';
import Card from '../Card/Card';

export default function TrilhasGrid() {
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 4}
        grid={{
          rows: isMobile ? 1 : 2,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {
          trilhas && trilhas.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                {/* <Trilha item={item} /> */}
                <Card />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
