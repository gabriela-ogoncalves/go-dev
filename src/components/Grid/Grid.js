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

import Card from '../Card/Card';

export default function TrilhasGrid(props) {
  const {title, items, row, style, titleStyle} = props;
  const gridRow = isMobile ? 1 : 2;

  return (
    <section className='trilhas'>
      <div className={titleStyle || 'title-grid'} >{title}</div>
      <Swiper
        slidesPerView={isMobile ? 2 : 4}
        slidesPerGroup={isMobile ? 2 : 1}
        grid={{ rows: row || gridRow }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className={style}
      >
        {
          items && items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Card item={item}/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
