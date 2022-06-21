import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import styles from './mainslide.module.css';
import './swiper.css';

SwiperCore.use([Navigation, Pagination, Autoplay])

function MainSlide() {
  return(
    <div className={styles.container}>
      <Swiper className={styles.banner}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{
          el:'.swiper-pagination',
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide className={styles.swiper}>
          <h2>our most popular<br/>and loved products</h2>
          <div className={styles.btbox}>
            <div className={styles.button}>
              <p><a className={styles.button_txt}>Shop Products</a></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <h2>what's in it<br/>for you?</h2>
          <div className={styles.btbox}>
            <div className={styles.button}>
              <p><a className={styles.button_txt}>Shop Products</a></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <h2>banishing boring bath times<br/>with our bath products!</h2>
          <div className={styles.btbox}>
            <div className={styles.button}>
                <p><a className={styles.button_txt}>Shop Products</a></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <h2>ready for you<br/>summer adventure?</h2>
          <div className={styles.btbox}>
            <div className={styles.button}>
                <p><a className={styles.button_txt}>Shop Products</a></p>
            </div>
          </div>
        </SwiperSlide>
          <div class="swiper-button-prev swiper-button-black"></div>
          <div class="swiper-button-next swiper-button-black"></div>
          <div class='swiper-pagination'></div>
      </Swiper>
    </div>
  )
}
export default MainSlide;