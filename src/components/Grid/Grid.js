import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.scss';

import { Grid, Pagination } from 'swiper';
import { isMobile, isDesktopBigScreen } from '../../helpers/utils';

import Card from '../Card/Card';

const calculeSlidePerView = (from) => {
  if (from === 'profile-info') {
    if (isMobile) {
      return 1;
    } else {
      return isDesktopBigScreen ? 3 : 2;
    }
  }
  
  return isMobile ? 2 : 4;
};

const calculeSlidePerGroup = (from) => {
  if (from === 'profile-info') {
    return 1;
  }

  return isMobile ? 2 : 1;
};

export default function TrilhasGrid(props) {
  const {title, items, row, style, titleStyle, from} = props;
  const gridRow = isMobile ? 1 : 2;

  return (
    <section className='trilhas'>
      { title && <div className={titleStyle || 'title-grid'} >{title}</div> }
      <Swiper
        slidesPerView={calculeSlidePerView(from)}
        slidesPerGroup={calculeSlidePerGroup(from)}
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
